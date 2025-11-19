import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a
            href="#sobre"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.aboutUs}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="#termos"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.termsOfUse}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="#privacidade"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.privacyPolicy}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="#contato"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            {t.footer.contact}
          </a>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.app.title}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

