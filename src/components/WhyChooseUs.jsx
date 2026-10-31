import React from 'react';
import { ShieldCheck, Clock, Sparkles, Award, CalendarCheck, Briefcase, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/businessInfo';

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    Sparkles: Sparkles,
    Award: Award,
    CalendarCheck: CalendarCheck,
    Briefcase: Briefcase
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Why Dallas Chooses Us</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-6">
            The Brazilian Cleaning Standard
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            We hold ourselves to elevated standards so you return home to immaculate spaces every single time. Here is why homeowners and businesses across Dallas trust us.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-mint-200/80 shadow-soft hover:shadow-elevated hover:border-forest-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-mint-100 text-forest-900 flex items-center justify-center mb-6 group-hover:bg-forest-800 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-forest-950 mb-3 group-hover:text-forest-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom check */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Guaranteed Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
