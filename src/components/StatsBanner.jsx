import React from 'react';
import { Star, Clock, ShieldCheck, Heart, MapPin, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import Card3DTilt from './Card3DTilt';

export default function StatsBanner() {
  const stats = [
    {
      icon: Star,
      val: "4.8 ★ (12 Reviews)",
      label: "Authentic Google Rating",
      sub: "Highly Worth the Money"
    },
    {
      icon: Clock,
      val: "2-Hour Response",
      label: "Emergency Deep Clean",
      sub: "Rapid On-Site Dispatch"
    },
    {
      icon: Heart,
      val: "Women & Latino",
      label: "Proudly Local Owned",
      sub: "Led by Rebecca & Team"
    },
    {
      icon: MapPin,
      val: "Dallas 75287",
      label: "3621 Frankford Rd",
      sub: "LGBTQ+ Friendly Service"
    }
  ];

  return (
    <div className="bg-forest-950 text-white py-8 border-y border-forest-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card3DTilt
                key={idx}
                maxTilt={12}
                scale={1.03}
                className="rounded-2xl p-3 bg-forest-900/60 border border-forest-800/80 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest-900 border border-forest-800 flex items-center justify-center flex-shrink-0 text-amber-400 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight">
                      {item.val}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-mint-100">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-mint-300/80">
                      {item.sub}
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>
      </div>
    </div>
  );
}
