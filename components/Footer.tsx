import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto bg-white/90 backdrop-blur-sm border-t border-gray-200/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <button
            onClick={() => onNavigate('about')}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.aboutUs}
          </button>
          <span className="hidden sm:inline text-gray-300">|</span>
          <button
            onClick={() => onNavigate('terms')}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.termsOfUse}
          </button>
          <span className="hidden sm:inline text-gray-300">|</span>
          <button
            onClick={() => onNavigate('privacy')}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.privacyPolicy}
          </button>
          <span className="hidden sm:inline text-gray-300">|</span>
          <button
            onClick={() => onNavigate('contact')}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.contact}
          </button>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.app.title}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

