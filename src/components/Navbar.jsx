import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Sparkles, Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isQuotePage = location.pathname === '/quote';
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', path: '/' },
    { name: 'About', href: '/#about', path: '/#about' },
    { name: 'Services', href: '/#services', path: '/#services' },
    { name: 'Transformations', href: '/#transformations', path: '/#transformations' },
    // { name: '16 Reviews', href: '/#reviews', path: '/#reviews' },
    // { name: 'Instant Estimate', isRoute: true, path: '/quote' },
    { name: 'Contact', isRoute: true, path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-forest-950 text-white text-xs py-2 px-4 sm:px-6 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="flex items-center text-mint-100 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              18065 Appleridge Dr #2622, Dallas, TX 75287
            </span>
            <span className="hidden md:flex items-center text-mint-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Sheila & Lincoln Family Cleaning (10+ Yrs)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-amber-400 font-bold hover:underline"
            >
              ★ 5.0 Stars (16 Google Reviews)
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-extrabold text-mint-200 hover:text-white transition-colors flex items-center ml-2 bg-forest-800/80 px-2.5 py-1 rounded-lg border border-forest-700"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400 animate-pulse" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${isScrolled || isQuotePage || isContactPage
            ? 'glass-nav shadow-soft py-2.5 bg-white/95'
            : 'bg-white/95 backdrop-blur-md py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-2xl bg-forest-800 flex items-center justify-center text-mint-100 shadow-md group-hover:scale-105 transition-transform border border-forest-700">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-forest-950 group-hover:text-forest-700 transition-colors">
                  Brazilian <span className="text-forest-600 font-semibold">Cleaning</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal-muted">
                  Services • Dallas & Coppell TX
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-sm font-bold transition-all relative py-1 flex items-center space-x-1 ${isActive
                          ? 'text-forest-800 font-extrabold underline decoration-amber-400 decoration-2 underline-offset-4'
                          : 'text-charcoal hover:text-forest-800'
                        }`}
                    >
                      {link.path === '/quote' && <Calculator className="w-3.5 h-3.5 text-amber-500" />}
                      {link.path === '/contact' && <Phone className="w-3.5 h-3.5 text-forest-700" />}
                      <span>{link.name}</span>
                    </Link>
                  );
                }

                if (isQuotePage || isContactPage) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-sm font-semibold text-charcoal hover:text-forest-800 transition-colors relative py-1"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-charcoal hover:text-forest-800 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-800 hover:after:w-full after:transition-all"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center px-4 py-2.5 rounded-xl text-forest-950 font-bold text-sm bg-mint-100 hover:bg-mint-200 transition-all border border-mint-300"
              >
                <Phone className="w-4 h-4 mr-2 text-forest-800" />
                <span>Call</span>
              </a>

              <Link
                to="/quote"
                className={`flex items-center px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-md transition-all transform hover:-translate-y-0.5 ${isQuotePage
                    ? 'bg-amber-400 text-forest-950 hover:bg-amber-300'
                    : 'bg-forest-800 text-white hover:bg-forest-900 shadow-elevated'
                  }`}
              >
                <Calculator className="w-4 h-4 mr-1.5" />
                <span>Instant Estimate Page</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <Link
                to="/quote"
                className="p-2.5 rounded-xl bg-amber-400 text-forest-950"
                aria-label="Instant Estimate Page"
              >
                <Calculator className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-forest-900 hover:bg-forest-50 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-forest-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-base font-bold text-forest-900 bg-mint-100 flex items-center justify-between"
                    >
                      <span>{link.name} (Separate Page)</span>
                      <ArrowRight className="w-4 h-4 text-forest-700" />
                    </Link>
                  );
                }

                if (isQuotePage || isContactPage) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-base font-semibold text-charcoal hover:bg-forest-50 hover:text-forest-800"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-base font-semibold text-charcoal hover:bg-forest-50 hover:text-forest-800"
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-amber-400 text-forest-950 font-extrabold text-sm shadow-md"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  <span>Request Instant Estimate Page</span>
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-forest-800 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-300" />
                  Call Sheila: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
