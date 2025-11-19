import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { TermsPage } from './components/pages/TermsPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { ContactPage } from './components/pages/ContactPage';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} 
        />
        <Route 
          path="/sobre" 
          element={
            <Layout>
              <AboutPage />
            </Layout>
          } 
        />
        <Route 
          path="/termos" 
          element={
            <Layout>
              <TermsPage />
            </Layout>
          } 
        />
        <Route 
          path="/privacidade" 
          element={
            <Layout>
              <PrivacyPage />
            </Layout>
          } 
        />
        <Route 
          path="/contato" 
          element={
            <Layout>
              <ContactPage />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
