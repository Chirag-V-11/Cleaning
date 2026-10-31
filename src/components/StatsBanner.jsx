import React from 'react';
import { Star, Clock, ShieldCheck, Heart, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function StatsBanner() {
  const stats = [
    {
      icon: Star,
      val: "5.0 ★ (16 Reviews)",
      label: "100% Five-Star Rating",
      sub: "All 16 Google Reviews Are 5 Stars"
    },
    {
      icon: Heart,
      val: "10+ Years",
      label: "Trusted Family Team",
      sub: "Sheila, Lincoln & Dedicated Crew"
    },
    {
      icon: Sparkles,
      val: "Wood & Details",
      label: "Baseboards, Blinds & Shine",
      sub: "Lincoln's Signature Floor Polish"
    },
    {
      icon: MapPin,
      val: "Dallas & Coppell",
      label: "18065 Appleridge Dr",
      sub: "LGBTQ+ Friendly Local Business"
    }
  ];

  return (
    <div className="bg-forest-950 text-white py-8 border-y border-forest-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-900 border border-forest-800 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight">
                    {item.val}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-mint-100">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-mint-300/80 hidden sm:block">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
