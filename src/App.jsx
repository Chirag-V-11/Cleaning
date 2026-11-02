import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingQuickActions from './components/FloatingQuickActions';
import Ambient3DCanvas from './components/Ambient3DCanvas';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Standard House Cleaning');

  const handleSelectServiceForQuote = (serviceTitle) => {
    setSelectedServiceForQuote(serviceTitle);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-mint-200 selection:text-forest-900 flex flex-col justify-between relative overflow-x-hidden">
        {/* Global 3D Ambient Space Canvas */}
        <Ambient3DCanvas />

        {/* Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onSelectServiceForQuote={handleSelectServiceForQuote} />}
            />
            <Route
              path="/quote"
              element={<QuotePage preselectedService={selectedServiceForQuote} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<HomePage onSelectServiceForQuote={handleSelectServiceForQuote} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Floating Quick Contact & Back to Top */}
        <FloatingQuickActions />
      </div>
    </Router>
  );
}
