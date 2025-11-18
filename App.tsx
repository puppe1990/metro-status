import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { METRO_LINES } from './constants';
import { fetchMetroStatus } from './services/geminiService';
import { MetroLine, LineStatus } from './types';
import { LineCard } from './components/LineCard';
import { GroundingSources } from './components/GroundingSources';

export default function App() {
  const [lines, setLines] = useState<MetroLine[]>(METRO_LINES);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);

  const handleFetchStatus = useCallback(async () => {
    setLoading(true);
    setError(null);
    setGroundingChunks([]);

    try {
      const { statusMap, sources } = await fetchMetroStatus();
      
      setGroundingChunks(sources);
      setLastUpdated(new Date());

      setLines(prevLines => prevLines.map(line => {
        const newStatus = statusMap[line.id];
        return newStatus ? { ...line, status: newStatus } : line;
      }));

    } catch (err) {
      console.error("Failed to fetch status", err);
      setError("Unable to retrieve live status. Displaying default information.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch on mount
  useEffect(() => {
    handleFetchStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOverallStatus = () => {
    const issues = lines.filter(l => l.status !== LineStatus.NORMAL && l.status !== LineStatus.UNKNOWN);
    if (issues.length === 0) return { text: "All Systems Normal", color: "text-green-600", icon: CheckCircle };
    return { text: `${issues.length} Line(s) with Issues`, color: "text-amber-600", icon: AlertTriangle };
  };

  const statusSummary = getOverallStatus();
  const StatusIcon = statusSummary.icon;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-900 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-gray-900">SP Metro Status</h1>
              <p className="text-xs text-gray-500">Live AI Updates</p>
            </div>
          </div>
          
          <button
            onClick={handleFetchStatus}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-sm font-medium"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{loading ? 'Updating...' : 'Refresh'}</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        
        {/* Overall Status Banner */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full ${statusSummary.color === 'text-green-600' ? 'bg-green-100' : 'bg-amber-100'}`}>
              <StatusIcon className={`w-8 h-8 ${statusSummary.color}`} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{statusSummary.text}</h2>
              <p className="text-sm text-gray-500">
                {lastUpdated 
                  ? `Updated: ${lastUpdated.toLocaleTimeString()}` 
                  : 'Waiting for update...'}
              </p>
            </div>
          </div>
          {error && (
             <div className="px-4 py-2 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center">
               <AlertTriangle className="w-4 h-4 mr-2" />
               {error}
             </div>
          )}
        </div>

        {/* Grid of Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lines.map((line) => (
            <LineCard key={line.id} line={line} loading={loading} />
          ))}
        </div>

        {/* Sources / Disclaimer */}
        {groundingChunks.length > 0 && (
          <GroundingSources chunks={groundingChunks} />
        )}

        <div className="flex items-start space-x-2 text-xs text-gray-400 mt-8 p-4 border-t border-gray-200">
          <Info className="w-4 h-4 flex-shrink-0" />
          <p>
            Status information is generated by Google Gemini using Google Search grounding. 
            Real-time accuracy depends on public news and official reports available online. 
            Always verify with official Metro/CPTM channels for critical travel planning.
          </p>
        </div>

      </main>
    </div>
  );
}
