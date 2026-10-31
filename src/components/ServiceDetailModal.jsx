import React from 'react';
import { X, CheckCircle2, Calendar, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function ServiceDetailModal({ service, isOpen, onClose, onSelectService }) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-mint-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-charcoal hover:bg-forest-100 hover:text-forest-900 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-forest-950 font-bold text-xs uppercase tracking-wider mb-2">
              {service.popularTag || service.badge}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          <p className="text-base text-charcoal leading-relaxed mb-6 font-medium">
            {service.fullDesc}
          </p>

          {/* Pricing & Duration Banner */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-forest-50 border border-mint-200 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted block">
                Estimated Starting Rate
              </span>
              <span className="font-display font-extrabold text-2xl text-forest-900">
                {service.startingPrice}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted block">
                Dallas & Coppell Service
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full inline-block mt-0.5">
                Supplies & Specialized Buffers Included
              </span>
            </div>
          </div>

          {/* Detailed Room by Room Checklist */}
          {service.checklist && service.checklist.length > 0 && (
            <div className="mb-8">
              <h4 className="font-display font-bold text-lg text-forest-950 mb-4 flex items-center">
                <Sparkles className="w-4 h-4 text-forest-700 mr-2" />
                Included in This Checklist:
              </h4>
              <div className="space-y-4">
                {service.checklist.map((group, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface-light border border-mint-100">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-forest-800 block mb-2">
                      {group.area}
                    </span>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {group.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-start text-xs sm:text-sm text-charcoal-soft">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="font-display font-bold text-sm text-forest-950 uppercase tracking-wider mb-3">
              Quality Guarantees:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, fidx) => (
                <div key={fidx} className="flex items-center text-xs sm:text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Bottom Bar */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectService(service.title);
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 shadow-elevated transition-all flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2 text-mint-300" />
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4 ml-2 text-amber-300" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-mint-100 text-forest-900 font-bold text-sm hover:bg-mint-200 transition-colors flex items-center justify-center border border-mint-300"
            >
              <Phone className="w-4 h-4 mr-2 text-forest-800" />
              <span>Call Sheila ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
