import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Star, Sparkles, CheckCircle2, Heart, Award, MapPin, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Hero({ onSelectServiceForQuote }) {
  const popularTags = [
    "Baseboards & Blinds Detailed",
    "Lincoln's Wood Floor Shine",
    "100% Trustworthy Family Team",
    "10+ Years Serving Dallas & Coppell"
  ];

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-surface-light via-white to-surface-light">
      {/* Subtle ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-gradient-to-r from-mint-200/40 via-amber-100/30 to-mint-100/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -top-20 right-0 w-96 h-96 bg-mint-100/60 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust Chips & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Dallas Rating & Address Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/95 border border-mint-300 rounded-full py-1.5 px-4 mb-6 shadow-sm w-fit backdrop-blur-sm">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-extrabold text-forest-950 border-l border-mint-200 pl-2">
                5.0 Stars
              </span>
              <a 
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-semibold text-forest-700 underline hover:text-forest-900 transition-colors"
              >
                (16 Verified Google Reviews)
              </a>
              <span className="text-[11px] bg-mint-100 text-forest-900 font-bold px-2 py-0.5 rounded-full">
                Dallas TX 75287
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest-950 tracking-tight leading-[1.12] mb-6">
              A Spotless Home.{' '}
              <span className="relative inline-block text-forest-800">
                <span className="relative z-10">Trusted Family Care.</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-amber-200/70 -z-0 rounded-sm"></span>
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-lg sm:text-xl text-charcoal-soft font-normal leading-relaxed mb-6 max-w-2xl">
              Meet <strong className="font-semibold text-forest-950">Sheila & Lincoln</strong> from Brazilian Cleaning Services. For over a decade, we have been the secret behind Dallas and Coppell’s cleanest homes, gleaming hardwood floors, and immaculate baseboards.
            </p>

            {/* Quote Snippet from Real Client */}
            <div className="bg-forest-50 border-l-4 border-forest-700 p-4 rounded-r-2xl mb-8 max-w-2xl">
              <p className="text-xs sm:text-sm text-forest-950 italic font-medium">
                "Sheila and John are incredible with the details. The house smells fresh and clean. The baseboards, the blinds, the things that always annoyed me... they handle it all!"
              </p>
              <span className="text-[11px] font-bold text-forest-700 mt-1 block">
                — Shannon Hammond (Verified Google Review)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-forest-800 text-white font-bold text-base hover:bg-forest-900 shadow-elevated hover:shadow-glow transition-all transform hover:-translate-y-0.5 group"
              >
                <Calculator className="w-5 h-5 mr-3 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Instant Estimate Page</span>
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-mint-100 text-forest-950 font-bold text-base hover:bg-mint-200 border border-mint-300 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-3 text-forest-800 animate-pulse" />
                <span>Call Sheila: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Client Favorite Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-forest-100">
              {popularTags.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Real Testimonial Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Cleaner Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Sheila and team from Brazilian Cleaning Services cleaning a Dallas home"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
                
                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1" /> Brazilian Cleaning Services
                  </p>
                  <p className="font-display font-bold text-lg text-white">
                    Family-Run Cleaning with Exceptional Hustle
                  </p>
                  <p className="text-xs text-mint-100 mt-1">
                    Serving Dallas, Coppell, Plano & North Texas
                  </p>
                </div>
              </div>

              {/* Floating Real Quote Card 1: Dana Chandler on Wood Floors */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-elevated border border-mint-200 max-w-[270px]">
                <div className="flex items-center space-x-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-forest-950 leading-snug">
                  "Lincoln can make my wood floors shine like no one ever has!!"
                </p>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-gray-100 text-[10px] text-charcoal-muted font-bold">
                  <span>Dana Chandler</span>
                  <span className="text-emerald-700">★ 5.0 Google</span>
                </div>
              </div>

              {/* Floating Real Quote Card 2: 10+ Years Trust */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-forest-900 text-white rounded-2xl p-4 shadow-elevated border border-forest-700 max-w-[250px]">
                <div className="flex items-center space-x-2 mb-1">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-mint-200 uppercase tracking-wider">10+ Year Client</span>
                </div>
                <p className="text-xs text-white/95 italic leading-snug">
                  "Sheila is absolutely fantastic and trustworthy. Cleaning for us for over 10 years!"
                </p>
                <div className="text-[10px] text-mint-300 font-semibold mt-1">
                  — Bruce Malmed (Local Guide)
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
