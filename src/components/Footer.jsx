import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin, Clock, Star, ExternalLink, Heart, Calculator } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white pt-16 pb-10 border-t border-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-800 flex items-center justify-center text-mint-100 shadow-md border border-forest-700">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  Brazilian <span className="text-mint-300 font-semibold">Cleaning</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400">
                  Services • Dallas & Coppell TX
                </span>
              </div>
            </div>

            <p className="text-sm text-mint-100/80 leading-relaxed max-w-sm">
              Trusted for over 10 years by Dallas & Coppell families. Founded by Sheila & Lincoln, bringing spotless detail, gleaming hardwood floors, and dependable family care.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2 hover:bg-forest-800 transition-colors"
              >
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 Google Rating</span>
                <span className="text-xs text-amber-300">({BUSINESS_INFO.reviewCount} Reviews)</span>
                <ExternalLink className="w-3 h-3 text-mint-300 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-mint-100/90 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Meet Sheila & Team</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Wood & Deep Clean</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">16 Google Reviews</a></li>
              <li><Link to="/quote" className="text-amber-300 font-bold hover:text-white transition-colors flex items-center"><Calculator className="w-3.5 h-3.5 mr-1" />Instant Estimate Page</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sheila</Link></li>
            </ul>
          </div>

          {/* Services Links (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-sm text-mint-100/90 font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Dallas Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-mint-100/90">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-bold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-amber-300 hover:text-white underline"
              >
                View on Google Maps Listing
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords */}
        <div className="py-6 border-b border-forest-800/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
            Dallas & Coppell Local Search Keywords:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-mint-100/70">
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">Brazilian Cleaning Services Dallas</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">House Cleaning Coppell TX</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">Wood Floor Polishing Dallas</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">Deep Cleaning Dallas 75287</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">Sheila Cleaning Dallas</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">18065 Appleridge Dr Cleaning</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">Plano TX House Cleaning</span>
            <span className="bg-forest-900 px-2 py-0.5 rounded-md border border-forest-800">LGBTQ+ Friendly Cleaning Dallas</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-mint-200/60 gap-4">
          <p>
            © {currentYear} Brazilian Cleaning Services. All rights reserved. 18065 Appleridge Dr #2622, Dallas, TX 75287.
          </p>
          <p className="flex items-center text-amber-300/80">
            Proudly family-owned and serving Dallas & Coppell for over a decade.
          </p>
        </div>

      </div>
    </footer>
  );
}
