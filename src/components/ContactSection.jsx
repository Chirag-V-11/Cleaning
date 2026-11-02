import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Navigation, Send, CheckCircle2, AlertCircle, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formState.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', phone: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Connect Directly with Rebecca</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            Contact Orellana’s Cleaning LLC
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Ready to come home to a clean, fresh, and sparkling house? Call or message Rebecca directly.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest-950 mb-1">
                Direct Phone & Text
              </h3>
              <p className="text-xs text-charcoal-muted mb-4">
                Call or text Rebecca for quick quotes, emergency 2-hour scheduling, or questions.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-display font-extrabold text-2xl text-forest-800 hover:text-forest-950 transition-colors block"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-forest-800 text-white font-bold text-xs hover:bg-forest-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>Click to Call Now</span>
            </a>
          </div>

          {/* Card 2: Address & Directions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-forest-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest-950 mb-1">
                Dallas Headquarters
              </h3>
              <p className="text-xs text-charcoal-muted mb-2">
                Serving Dallas 75287, Coppell, Plano & Carrollton.
              </p>
              <p className="font-display font-bold text-sm text-forest-900 leading-snug">
                {BUSINESS_INFO.address}
              </p>
              <span className="text-[11px] font-semibold text-charcoal-muted block mt-1">
                Plus code: {BUSINESS_INFO.plusCode}
              </span>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-mint-100 text-forest-950 font-bold text-xs hover:bg-mint-200 transition-colors border border-mint-300"
            >
              <Navigation className="w-3.5 h-3.5 mr-1.5 text-forest-800" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

          {/* Card 3: Business Hours */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-forest-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest-950 mb-1">
                Operating Hours
              </h3>
              <p className="text-xs text-charcoal-muted mb-3">
                Monday through Saturday service across North Texas.
              </p>
              <p className="font-display font-bold text-base text-forest-900">
                {BUSINESS_INFO.hours}
              </p>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mt-2">
                Opens 8:00 AM Mon – Sat
              </span>
            </div>
            <a
              href="#quote"
              className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-surface-subtle text-forest-900 font-bold text-xs hover:bg-mint-100 transition-colors border border-mint-200"
            >
              <span>Schedule Free Estimate</span>
            </a>
          </div>

        </div>

        {/* Map & Inquiry Form Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-mint-200 shadow-soft flex flex-col min-h-[420px]">
            <div className="p-4 bg-forest-950 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-mint-100">Dallas TX 75287 Map Location</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-300 hover:text-white underline font-semibold"
              >
                Open in Google Maps
              </a>
            </div>
            
            <div className="flex-1 w-full relative">
              <iframe
                title="Orellana’s Cleaning LLC Dallas Location"
                src="https://maps.google.com/maps?q=3621%20Frankford%20Rd,%20Dallas,%20TX%2075287&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 bg-surface-light border-t border-mint-200 flex items-center justify-between text-xs text-charcoal">
              <span className="font-semibold text-forest-900">{BUSINESS_INFO.address}</span>
              <span className="text-emerald-700 font-bold">★ 4.8 (12 Reviews)</span>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-mint-200 shadow-soft flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-forest-950 mb-2">
                Send a Message to Rebecca
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
                Have questions or need recurring or emergency deep cleaning in Dallas? Send us a quick note.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center py-10 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-display font-bold text-lg text-emerald-950 mb-1">
                    Message Sent to Rebecca!
                  </h4>
                  <p className="text-xs text-emerald-800 mb-4">
                    Thank you! Rebecca or her team will get back to you right away.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-forest-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Holly Bittick"
                      className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-sm focus:outline-none focus:border-forest-700"
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(469) 585-7283"
                        className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-sm focus:outline-none focus:border-forest-700"
                      />
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-sm focus:outline-none focus:border-forest-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Your Message or Address Details *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your home (bedrooms, bathrooms, emergency 2-hour clean, deep bathtub, preferred day)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-sm focus:outline-none focus:border-forest-700"
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 transition-all flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <span>Sending to Rebecca...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message to Rebecca</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-charcoal-muted">
              <span>Personal response from Rebecca</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-forest-800 hover:underline">
                Or call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
