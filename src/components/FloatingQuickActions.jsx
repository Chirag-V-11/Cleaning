import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function FloatingQuickActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-forest-900 shadow-elevated border border-mint-200 flex items-center justify-center hover:bg-forest-50 transition-all transform hover:-translate-y-1"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-forest-800" />
          </button>
        )}

        {/* Quick Quote Pill */}
        <Link
          to="/quote"
          className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-full bg-amber-400 text-forest-950 font-extrabold text-xs shadow-elevated border border-amber-300 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
        >
          <Calendar className="w-4 h-4 mr-1.5 text-forest-950" />
          <span>Instant Estimate Page</span>
        </Link>

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="inline-flex items-center px-5 py-3.5 rounded-full bg-forest-800 text-white font-extrabold text-sm shadow-2xl hover:bg-forest-900 transition-all transform hover:scale-105 group border-2 border-amber-300"
          aria-label="Call Orellana’s Cleaning LLC"
        >
          <span className="relative flex h-3 w-3 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
          <Phone className="w-4 h-4 mr-2 text-amber-300" />
          <span className="hidden sm:inline">Call Rebecca: {BUSINESS_INFO.phoneDisplay}</span>
          <span className="sm:hidden">Call {BUSINESS_INFO.phoneDisplay}</span>
        </a>

      </div>
    </>
  );
}
