import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GroundingSourcesProps {
  chunks: any[];
}

export const GroundingSources: React.FC<GroundingSourcesProps> = ({ chunks }) => {
  const { t } = useLanguage();
  
  if (!chunks || chunks.length === 0) return null;

  // Extract web sources. 
  // Structure is often: { web: { uri: string, title: string } }
  const sources = chunks
    .filter(c => c.web)
    .map(c => ({
      title: c.web.title,
      uri: c.web.uri
    }));

  if (sources.length === 0) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl">
      <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center">
        <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
        {t.sources.title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sources.map((source, idx) => (
          <a 
            key={idx} 
            href={source.uri} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-700 hover:text-blue-800 font-medium truncate block p-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
          >
            {source.title || source.uri}
          </a>
        ))}
      </div>
    </div>
  );
};
