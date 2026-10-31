import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, MapPin, Award, Phone, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function AboutSection() {
  const pillars = [
    {
      title: "Family Care & Serious Hustle",
      desc: "As long-time client Liz Elliott shared: 'Truly a family business and boy do they hustle.' Sheila, Lincoln, and our team work with infectious energy, care, and thoroughness.",
      icon: Heart
    },
    {
      title: "The Baseboard & Blind Difference",
      desc: "We don't just dust open surfaces. We hand-wipe baseboards, detail blinds slat-by-slat, tidy everyday clutter, and clean behind the spots other companies skip.",
      icon: Sparkles
    },
    {
      title: "Lincoln's Hardwood Floor Polish",
      desc: "Client Dana Chandler raves: 'Lincoln can make my wood floors shine like no one ever has!!' Our specialized floor care brings natural warmth and shine back to your home.",
      icon: Award
    },
    {
      title: "10+ Years of Unbroken Trust",
      desc: "Our clients in Dallas and Coppell stay with us for 5, 8, and 10+ years. You get honest, reliable, background-checked family members you can comfortably leave keys with.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Meet Sheila & Lincoln</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-6">
            About Brazilian Cleaning Services
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Located at 18065 Appleridge Dr #2622, Dallas, TX 75287, we are an independent family cleaning business dedicated to making Texas homes glow. For over a decade, we have built lifelong relationships with homeowners in Dallas, Coppell, Plano, and North Texas.
          </p>
        </div>

        {/* Content Grid: Visual + Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Images Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-surface-subtle">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                  alt="Brazilian Cleaning Services detailing a clean Dallas kitchen"
                  className="w-full h-[410px] object-cover"
                />
              </div>

              {/* Inset Wood Floor Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=500&q=80"
                  alt="Lincoln's shining hardwood floor restoration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trust Badge */}
              <div className="absolute top-4 left-4 bg-forest-900/95 text-white p-4 rounded-2xl shadow-xl backdrop-blur-md max-w-[210px] border border-forest-700">
                <div className="flex items-center space-x-1.5 text-amber-400 mb-1">
                  <MapPin className="w-4 h-4 text-mint-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-mint-200">Dallas & Coppell</span>
                </div>
                <p className="text-xs text-white/90 font-medium">
                  18065 Appleridge Dr #2622, Dallas, TX 75287
                </p>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Values */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-surface-light border border-mint-200 hover:border-forest-400 hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4 group-hover:bg-forest-800 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-forest-950 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Service Areas Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-forest-50 border border-mint-200">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-forest-700" /> Service Coverage Across North Texas:
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-bold text-forest-800 hover:text-forest-950 underline flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" /> Call Sheila: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white text-forest-900 border border-mint-200 shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
