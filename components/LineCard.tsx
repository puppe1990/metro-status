import React from 'react';
import { MetroLine, LineStatus } from '../types';
import { Check, AlertOctagon, Clock, XOctagon, Minus } from 'lucide-react';

interface LineCardProps {
  line: MetroLine;
  loading: boolean;
}

export const LineCard: React.FC<LineCardProps> = ({ line, loading }) => {
  
  const getStatusColor = (status: LineStatus) => {
    switch (status) {
      case LineStatus.NORMAL: return 'bg-green-100 text-green-800 border-green-200';
      case LineStatus.REDUCED: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case LineStatus.STOPPED: return 'bg-red-100 text-red-800 border-red-200';
      case LineStatus.CLOSED: return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-50 text-gray-500 border-gray-200';
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Line Header */}
      <div 
        className={`h-3 w-full`} 
        style={{ backgroundColor: line.colorHex }}
      />
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div 
              className={`text-xs font-bold uppercase tracking-wider mb-1 opacity-70`}
              style={{ color: line.colorHex }}
            >
              {line.operator}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{line.name}</h3>
          </div>
          
          {/* Badge */}
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm"
            style={{ backgroundColor: line.colorHex }}
          >
            {line.id}
          </div>
        </div>
        
        <div className="mt-auto pt-2 space-y-2">
           <div className={`
             flex items-center space-x-2 px-3 py-2 rounded-lg border text-sm font-medium
             ${loading ? 'animate-pulse bg-gray-50 border-gray-100 text-gray-400' : getStatusColor(line.status)}
           `}>
             {loading ? (
               <>
                 <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                 <span>Updating...</span>
               </>
             ) : (
               <>
                 {getStatusIcon(line.status)}
                 <span>{line.status}</span>
               </>
             )}
           </div>
           {line.description && !loading && (
             <p className="text-xs text-gray-600 leading-relaxed px-1">
               {line.description}
             </p>
           )}
        </div>
      </div>
    </div>
  );
};
