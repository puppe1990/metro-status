import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.pages.back}</span>
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100">
              <Info className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{t.about.title}</h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.about.description}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about.mission.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.mission.text}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about.features.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.about.features.items.map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about.source.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.source.text.split('{link}').map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index === 0 && (
                      <a 
                        href="https://www.diretodostrens.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-blue-600 font-semibold transition-colors"
                      >
                        Direto dos Trens
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about.updates.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.about.updates.text}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

