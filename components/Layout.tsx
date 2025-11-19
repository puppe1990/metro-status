import React, { ReactNode } from 'react';
import { RefreshCw, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  showRefresh?: boolean;
  onRefresh?: () => void;
  loading?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showRefresh = false, 
  onRefresh, 
  loading = false 
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="glass-effect border-b border-gray-200/50 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
            <div className="p-1 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center">
              <img src="/logo.png" alt="SP Metro Status Logo" className="w-10 h-10 rounded-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{t.app.title}</h1>
              <p className="text-sm text-gray-600 font-medium">{t.app.subtitle}</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative group">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white hover:shadow-md transition-all text-sm font-semibold border border-gray-200/50"
                title={t.app.switchLanguage}
              >
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline uppercase font-bold">{language}</span>
              </button>
            </div>
            
            {showRefresh && onRefresh && (
              <button
                onClick={onRefresh}
                disabled={loading}
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-sm font-semibold shadow-lg hover:shadow-xl"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">{loading ? t.app.updating : t.app.refresh}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

