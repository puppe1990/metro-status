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
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
        <ExternalLink className="w-4 h-4 mr-2" />
        {t.sources.title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {sources.map((source, idx) => (
          <a 
            key={idx} 
            href={source.uri} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline truncate block p-1 rounded hover:bg-blue-50"
          >
            {source.title || source.uri}
          </a>
        ))}
      </div>
    </div>
  );
};
