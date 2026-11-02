import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, MapPin, Award, Phone, Heart, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import Card3DTilt from './Card3DTilt';

export default function AboutSection() {
  const pillars = [
    {
      title: "2-Hour Emergency Response",
      desc: "When landlords leave a rental dirty or an unexpected event happens, Rebecca can arrive within 2 hours. As Holly Bittick shared: 'Rebecca has saved the day once again!'",
      icon: Clock
    },
    {
      title: "Women & Latino-Owned",
      desc: "Founded by Rebecca Orellana, Orellana’s Cleaning LLC is a proud local business bringing dependable work ethic, honest communication, and warm, respectful service to every client.",
      icon: Heart
    },
    {
      title: "Deep Bathtub & Detail Care",
      desc: "As Trayce Cavanaugh noted: 'I’m disabled and can’t clean my deep bathtub... Liz and Michelle were very professional and did everything I asked. Very thorough!'",
      icon: Sparkles
    },
    {
      title: "Reasonable & Honest Value",
      desc: "Clients Kat B Suarez, Brenda Layton, and Chase consistently praise our fair pricing: 'Great communication, great prices, prompt and professional. Highly worth the money.'",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Meet Rebecca & The Orellana Team</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-6">
            About Orellana’s Cleaning LLC
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Located at 3621 Frankford Rd, Dallas, TX 75287, Orellana’s Cleaning LLC is an independent, women-owned and Latino-owned cleaning company. Led by Rebecca alongside trusted team members like Liz and Michelle, we deliver emergency rescues, deep scrubs, and dependable housekeeping across North Texas.
          </p>
        </div>

        {/* Content Grid: Visual + Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3D Images Composition */}
          <div className="lg:col-span-5 relative perspective-1000">
            <Card3DTilt
              maxTilt={8}
              scale={1.02}
              className="relative"
            >
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-surface-subtle">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                  alt="Orellana's Cleaning LLC team detailing a clean Dallas kitchen"
                  className="w-full h-[410px] object-cover"
                />
              </div>

              {/* Inset Deep Bath Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white translate-z-20">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80"
                  alt="Spotless deep bathtub and tile restoration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trust Badge */}
              <div className="absolute top-4 left-4 bg-forest-900/95 text-white p-4 rounded-2xl shadow-xl backdrop-blur-md max-w-[210px] border border-forest-700 translate-z-30">
                <div className="flex items-center space-x-1.5 text-amber-400 mb-1">
                  <MapPin className="w-4 h-4 text-mint-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-mint-200">Dallas Headquarters</span>
                </div>
                <p className="text-xs text-white/90 font-medium">
                  3621 Frankford Rd, Dallas, TX 75287
                </p>
              </div>
            </Card3DTilt>
          </div>

          {/* Right: Pillars & Values with 3D Tilt */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Card3DTilt
                    key={idx}
                    maxTilt={12}
                    scale={1.02}
                    className="h-full"
                  >
                    <div className="p-6 rounded-2xl bg-surface-light border border-mint-200 hover:border-forest-400 hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4 group-hover:bg-forest-800 group-hover:text-amber-400 transition-colors shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-forest-950 mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-charcoal-muted leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </Card3DTilt>
                );
              })}
            </div>

            {/* Service Areas Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-forest-50 border border-mint-200">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-forest-700" /> Dallas Metro Service Areas:
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-bold text-forest-800 hover:text-forest-950 underline flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" /> Call Rebecca: {BUSINESS_INFO.phoneDisplay}
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
