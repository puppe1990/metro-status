const CACHE_NAME = 'sp-metro-status-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/favicon.png',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch((err) => {
          console.log('Cache addAll failed:', err);
        });
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all pages immediately
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Skip external API requests - let them go through normally
  // Only intercept requests to our own domain
  try {
    const url = new URL(event.request.url);
    const requestOrigin = url.origin.toLowerCase();
    
    // List of external domains that should NOT be intercepted by service worker
    const externalDomains = [
      'diretodostrens.com.br',
      'www.diretodostrens.com.br',
      'googleapis.com',
      'gstatic.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];
    
    // Check if this is an external domain request
    const isExternalDomain = externalDomains.some(domain => requestOrigin.includes(domain));
    if (isExternalDomain) {
      return; // Don't intercept external requests - let browser handle them directly
    }
    
    // Get the current origin from registration scope
    let currentOrigin = '';
    if (self.registration && self.registration.scope) {
      try {
        const scopeUrl = new URL(self.registration.scope);
        currentOrigin = scopeUrl.origin.toLowerCase();
      } catch (e) {
        // If we can't parse scope, be conservative and don't intercept
        return;
      }
    }
    
    // If we have a current origin and it doesn't match the request origin, it's external
    if (currentOrigin && requestOrigin !== currentOrigin) {
      return; // Don't intercept external requests
    }
  } catch (e) {
    // If URL parsing fails, don't intercept (safer to skip)
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // If both cache and network fail, return offline page if available
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

