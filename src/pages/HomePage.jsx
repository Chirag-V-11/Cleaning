import React from 'react';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import WhyChooseUs from '../components/WhyChooseUs';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import { Sparkles, ArrowRight, Calculator, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Link } from 'react-router-dom';

export default function HomePage({ onSelectServiceForQuote }) {
  return (
    <>
      {/* 1. Hero */}
      <Hero onSelectServiceForQuote={onSelectServiceForQuote} />

      {/* 2. Key Stats & Credentials Banner */}
      <StatsBanner />

      {/* 3. About Us */}
      <AboutSection />

      {/* 4. Our Services */}
      <ServicesSection onSelectServiceForQuote={onSelectServiceForQuote} />

      {/* 5. Interactive Before & After Transformations */}
      <BeforeAfterSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Dedicated Instant Estimate Callout Banner (Directs to Separate Page) */}
      <section className="py-16 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-forest-900/90 rounded-3xl p-8 sm:p-12 border border-forest-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-forest-800 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-forest-700">
                <Calculator className="w-3.5 h-3.5" />
                <span>Honest & Upfront Estimates</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3 leading-tight">
                Want to See What Your Cleaning Costs?
              </h2>
              <p className="text-mint-100 text-base leading-relaxed mb-6">
                Use our dedicated Instant Cleaning Estimate Calculator on a separate page to customize your bedroom count, square footage, wood floor buffing, and schedule frequency.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-mint-200">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-1.5" /> Real-time pricing</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-1.5" /> 100% Free & No Obligation</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-1.5" /> Zero hidden fees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                to="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-amber-400 text-forest-950 font-extrabold text-base hover:bg-amber-300 shadow-xl transition-all transform hover:-translate-y-0.5 group"
              >
                <Calculator className="w-5 h-5 mr-2.5 text-forest-900" />
                <span>Go to Estimate Page</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-700 border border-forest-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-amber-300" />
                <span>Call ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gallery */}
      <GallerySection />

      {/* 9. Verified Google Reviews */}
      <ReviewsSection />

      {/* 10. Contact & Interactive Dallas Map */}
      <ContactSection />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />
    </>
  );
}
