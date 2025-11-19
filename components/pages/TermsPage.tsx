import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export const TermsPage: React.FC = () => {
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
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{t.terms.title}</h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-500 mb-6">
              {t.terms.lastUpdated}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.acceptance.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.terms.acceptance.text}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.use.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.terms.use.text}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.terms.use.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.data.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.terms.data.text}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.accuracy.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.terms.accuracy.text}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.limitation.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.terms.limitation.text}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.terms.limitation.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.changes.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.terms.changes.text}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terms.contact.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.terms.contact.text}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

