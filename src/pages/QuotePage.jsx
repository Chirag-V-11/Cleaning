import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calculator, ArrowLeft, ShieldCheck, Heart, Clock, Star, Phone, CheckCircle2, HelpCircle } from 'lucide-react';
import QuoteCalculatorSection from '../components/QuoteCalculatorSection';
import { BUSINESS_INFO } from '../data/businessInfo';
import Card3DTilt from '../components/Card3DTilt';

export default function QuotePage({ preselectedService }) {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-charcoal-muted">
            <Link
              to="/"
              className="inline-flex items-center text-forest-800 hover:text-forest-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1 text-forest-700" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="text-forest-950 font-bold">Instant Estimate</span>
          </nav>
        </div>

        {/* Dedicated Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-950 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-5 border border-mint-300 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-forest-800" />
            <span>Honest & Upfront Estimates</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest-950 tracking-tight leading-tight mb-5">
            Request an Instant Cleaning Estimate
          </h1>

          <p className="text-base sm:text-xl text-charcoal-soft font-normal leading-relaxed max-w-2xl mx-auto">
            Calculate your instant estimate in seconds for your home in Dallas, Coppell, Plano, or Carrollton. Honest, transparent pricing with no hidden charges.
          </p>

          {/* Trust Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-mint-200">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8 Google Rating (12 Reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free & No Obligation</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <Heart className="w-4 h-4 text-amber-500" />
              <span>Women & Latino Owned (Rebecca)</span>
            </div>
          </div>
        </div>

        {/* Main Interactive Estimate Calculator & Booking Form */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-elevated border border-mint-200 mb-16">
          <QuoteCalculatorSection preselectedService={preselectedService} />
        </div>

        {/* Why Our Estimates Are 100% Upfront (Trust Explainer Grid) */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mb-3">
              Why Our Estimates Are 100% Upfront
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              We know homeowners hate surprise fees. Here is our pricing promise to every Dallas & Coppell client:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card3DTilt maxTilt={12} scale={1.03}>
              <div className="bg-white rounded-2xl p-6 border border-mint-200 shadow-soft h-full">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-base text-forest-950 mb-2">
                  All Supplies & Equipment Included
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  We bring commercial vacuums, microfibers, safe eco-friendly detergents, and specialized deep bathtub cleaners. Never any surprise supply fees.
                </p>
              </div>
            </Card3DTilt>

            <Card3DTilt maxTilt={12} scale={1.03}>
              <div className="bg-white rounded-2xl p-6 border border-mint-200 shadow-soft h-full">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-display font-bold text-base text-forest-950 mb-2">
                  Transparent Formula
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Our calculator uses real bedroom, bathroom, and square footage measurements so you see accurate numbers before submitting.
                </p>
              </div>
            </Card3DTilt>

            <Card3DTilt maxTilt={12} scale={1.03}>
              <div className="bg-white rounded-2xl p-6 border border-mint-200 shadow-soft h-full">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-display font-bold text-base text-forest-950 mb-2">
                  Direct Communication With Rebecca
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  No automated bot call centers. Rebecca reviews your request personally to confirm timing, emergency needs, and pet details.
                </p>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Quick Phone Callout Banner */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-10 border border-forest-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-900 border border-forest-800 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Need an Emergency Clean or Move-In Rescue?
              </h3>
              <p className="text-xs sm:text-sm text-mint-100">
                Call or text Rebecca directly at <strong className="text-amber-300">{BUSINESS_INFO.phoneDisplay}</strong> for 2-hour dispatch.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-amber-400 text-forest-950 font-extrabold text-sm hover:bg-amber-300 transition-colors shadow-md text-center"
          >
            Call Rebecca: {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </div>
  );
}
