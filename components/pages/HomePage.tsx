import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Info, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { METRO_LINES } from '../../constants';
import { fetchMetroStatus } from '../../services/diretoDosTrensService';
import { MetroLine, LineStatus } from '../../types';
import { LineCard } from '../LineCard';
import { GroundingSources } from '../GroundingSources';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../Layout';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [lines, setLines] = useState<MetroLine[]>(METRO_LINES);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('metro-status-favorites');
    if (storedFavorites) {
      try {
        const favoritesArray = JSON.parse(storedFavorites);
        setFavorites(new Set(favoritesArray));
      } catch (e) {
        console.error('Failed to parse favorites from localStorage', e);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (favorites.size > 0) {
      localStorage.setItem('metro-status-favorites', JSON.stringify(Array.from(favorites)));
    } else {
      localStorage.removeItem('metro-status-favorites');
    }
  }, [favorites]);

  const toggleFavorite = useCallback((lineId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(lineId)) {
        newFavorites.delete(lineId);
      } else {
        newFavorites.add(lineId);
      }
      return newFavorites;
    });
  }, []);

  const handleFetchStatus = useCallback(async () => {
    setLoading(true);
    setError(null);
    setGroundingChunks([]);

    try {
      const { statusMap, descriptions, sources } = await fetchMetroStatus();
      
      setGroundingChunks(sources);
      setLastUpdated(new Date());

      setLines(prevLines => prevLines.map(line => {
        const newStatus = statusMap[line.id];
        const description = descriptions[line.id];
        return newStatus 
          ? { ...line, status: newStatus, description } 
          : { ...line, description };
      }));

    } catch (err) {
      console.error("Failed to fetch status", err);
      setError(t.errors.unableToRetrieve);
    } finally {
      setLoading(false);
    }
  }, [t]);

  // Initial fetch on mount
  useEffect(() => {
    handleFetchStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOverallStatus = () => {
    const issues = lines.filter(l => l.status !== LineStatus.NORMAL && l.status !== LineStatus.UNKNOWN);
    if (issues.length === 0) return { text: t.status.allNormal, color: "text-green-600", icon: CheckCircle };
    return { text: `${issues.length} ${t.status.linesWithIssues}`, color: "text-amber-600", icon: AlertTriangle };
  };

  const statusSummary = getOverallStatus();
  const StatusIcon = statusSummary.icon;

  // Filter and sort lines based on search query and favorites
  const filteredLines = useMemo(() => {
    let filtered = lines;
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = lines.filter(line => 
        line.name.toLowerCase().includes(query) ||
        line.operator.toLowerCase().includes(query) ||
        line.id.toLowerCase().includes(query)
      );
    }
    
    // Sort: favorites first, then by line ID
    return [...filtered].sort((a, b) => {
      const aIsFavorite = favorites.has(a.id);
      const bIsFavorite = favorites.has(b.id);
      
      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      
      // If both are favorites or both are not, sort by ID
      return parseInt(a.id) - parseInt(b.id);
    });
  }, [lines, searchQuery, favorites]);

  return (
    <Layout showRefresh onRefresh={handleFetchStatus} loading={loading}>
      {/* Overall Status Banner */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transform transition-all hover:shadow-2xl">
        <div className="flex items-center space-x-5">
          <div className={`p-4 rounded-2xl shadow-lg ${statusSummary.color === 'text-green-600' ? 'bg-gradient-to-br from-green-100 to-emerald-100' : 'bg-gradient-to-br from-amber-100 to-orange-100'}`}>
            <StatusIcon className={`w-10 h-10 ${statusSummary.color}`} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{statusSummary.text}</h2>
            <p className="text-sm text-gray-600 font-medium">
              {lastUpdated 
                ? `${t.status.updated}: ${lastUpdated.toLocaleTimeString()}` 
                : t.status.waitingForUpdate}
            </p>
          </div>
        </div>
        {error && (
           <div className="px-5 py-3 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 text-sm rounded-xl border-2 border-red-200 flex items-center shadow-md font-semibold">
             <AlertTriangle className="w-5 h-5 mr-2" />
             {error}
           </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-200/50">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t.app.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
          />
        </div>
      </div>

      {/* Grid of Lines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredLines.length > 0 ? (
          filteredLines.map((line) => (
            <LineCard 
              key={line.id} 
              line={line} 
              loading={loading}
              isFavorite={favorites.has(line.id)}
              onToggleFavorite={() => toggleFavorite(line.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50">
            <p className="text-gray-500 text-lg font-medium">{t.app.noResults}</p>
          </div>
        )}
      </div>

      {/* Sources / Disclaimer */}
      {groundingChunks.length > 0 && (
        <GroundingSources chunks={groundingChunks} />
      )}

      <div className="flex items-start space-x-3 text-sm text-gray-500 mt-10 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
        <Info className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" />
        <p className="leading-relaxed">
          {t.disclaimer.text.split('{link}').map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index === 0 && (
                <a href="https://www.diretodostrens.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 font-semibold transition-colors">
                  {t.disclaimer.linkText}
                </a>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </Layout>
  );
};

