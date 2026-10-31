import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, Info, Calendar, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessInfo';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServicesSection({ onSelectServiceForQuote }) {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    }
    navigate('/quote');
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Dedicated Family Housekeeping</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-6">
            Our Cleaning Specialties
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            From routine house cleaning and hand-washed baseboards to Lincoln’s signature hardwood floor polish and spotless move-outs, we treat every home with meticulous care.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-mint-200/90 shadow-soft hover:shadow-elevated hover:border-forest-400 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image with Badge & Price Tag */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/95 text-forest-900 font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {service.popularTag || service.badge}
                </span>

                {/* Starting Price Pill */}
                <div className="absolute bottom-3 right-4 bg-forest-900/90 text-mint-100 px-3 py-1 rounded-xl text-xs font-bold backdrop-blur-sm border border-forest-700">
                  From <span className="text-amber-400 text-sm font-extrabold">{service.startingPrice}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-forest-950 mb-3 group-hover:text-forest-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start text-xs sm:text-sm text-charcoal-soft font-medium">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-mint-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="inline-flex items-center text-xs font-bold text-forest-800 hover:text-forest-950 py-2 px-3 rounded-lg hover:bg-forest-50 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 mr-1 text-forest-600" />
                    <span>Checklist & Info</span>
                  </button>

                  <button
                    onClick={() => handleSelectService(service.title)}
                    className="inline-flex items-center text-xs font-bold text-white bg-forest-800 hover:bg-forest-900 py-2.5 px-4 rounded-xl shadow-sm hover:shadow transition-all group-hover:bg-forest-900"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-amber-300" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-forest-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-forest-800">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-900 flex items-center justify-center text-amber-400 flex-shrink-0 border border-forest-800">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Need a Custom Cleaning Schedule or Move-Out Quote?
              </h4>
              <p className="text-xs sm:text-sm text-mint-100">
                Call Sheila directly or request an estimate online for rapid turnaround.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 md:flex-none text-center px-5 py-3 rounded-xl bg-mint-100 text-forest-950 font-bold text-sm hover:bg-mint-200 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2 text-forest-800" />
              <span>Call ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
            <Link
              to="/quote"
              className="flex-1 md:flex-none text-center px-6 py-3 rounded-xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-700 transition-colors border border-forest-700"
            >
              Get Free Estimate Page
            </Link>
          </div>
        </div>

      </div>

      {/* Checklist / Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectService={handleSelectService}
      />
    </section>
  );
}
