import React from 'react';
import { MetroLine, LineStatus } from '../types';
import { Check, AlertOctagon, Clock, XOctagon, Minus, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LineCardProps {
  line: MetroLine;
  loading: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const LineCard: React.FC<LineCardProps> = ({ line, loading, isFavorite, onToggleFavorite }) => {
  const { t } = useLanguage();
  
  const getStatusColor = (status: LineStatus) => {
    switch (status) {
      case LineStatus.NORMAL: return 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-green-300';
      case LineStatus.REDUCED: return 'bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-800 border-yellow-300';
      case LineStatus.STOPPED: return 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border-red-300';
      case LineStatus.CLOSED: return 'bg-gradient-to-r from-gray-50 to-slate-50 text-gray-800 border-gray-300';
      default: return 'bg-gradient-to-r from-gray-50 to-slate-50 text-gray-500 border-gray-200';
    }
  };

  const getStatusIcon = (status: LineStatus) => {
    switch (status) {
      case LineStatus.NORMAL: return <Check className="w-4 h-4" />;
      case LineStatus.REDUCED: return <Clock className="w-4 h-4" />;
      case LineStatus.STOPPED: return <AlertOctagon className="w-4 h-4" />;
      case LineStatus.CLOSED: return <XOctagon className="w-4 h-4" />;
      default: return <Minus className="w-4 h-4" />;
    }
  };

  const getStatusLabel = (status: LineStatus): string => {
    switch (status) {
      case LineStatus.NORMAL: return t.lineStatus.normal;
      case LineStatus.REDUCED: return t.lineStatus.reduced;
      case LineStatus.STOPPED: return t.lineStatus.stopped;
      case LineStatus.CLOSED: return t.lineStatus.closed;
      default: return t.lineStatus.unknown;
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Line Header */}
      <div 
        className={`h-4 w-full relative`} 
        style={{ backgroundColor: line.colorHex }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <div 
                className={`text-xs font-extrabold uppercase tracking-widest opacity-80`}
                style={{ color: line.colorHex }}
              >
                {line.operator}
              </div>
              {isFavorite && (
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{line.name}</h3>
          </div>
          
          <div className="flex items-center gap-2 ml-3 flex-shrink-0">
            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className={`p-2 rounded-lg transition-all hover:scale-110 active:scale-95 ${
                isFavorite 
                  ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-yellow-500'
              }`}
              title={isFavorite ? t.app.removeFromFavorites : t.app.addToFavorites}
            >
              <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            
            {/* Badge */}
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg transform group-hover:scale-110 transition-transform"
              style={{ backgroundColor: line.colorHex }}
            >
              {line.id}
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-3 space-y-3">
           <div className={`
             flex items-center space-x-2.5 px-4 py-3 rounded-xl border-2 text-sm font-semibold shadow-sm
             ${loading ? 'animate-pulse bg-gray-50 border-gray-200 text-gray-400' : getStatusColor(line.status)}
           `}>
             {loading ? (
               <>
                 <div className="w-5 h-5 rounded-full bg-gray-300 animate-pulse"></div>
                 <span>{t.lineStatus.updating}</span>
               </>
             ) : (
               <>
                 <div className="flex-shrink-0">{getStatusIcon(line.status)}</div>
                 <span className="truncate">{getStatusLabel(line.status)}</span>
               </>
             )}
           </div>
           {line.description && !loading && (
             <p className="text-sm text-gray-700 leading-relaxed px-1 py-2 bg-gray-50/50 rounded-lg border border-gray-100">
               {line.description}
             </p>
           )}
        </div>
      </div>
    </div>
  );
};
