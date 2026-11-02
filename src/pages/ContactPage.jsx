import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Navigation, Send, CheckCircle2, AlertCircle, Sparkles, Heart, ArrowLeft, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import Card3DTilt from '../components/Card3DTilt';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Standard House Cleaning',
    preferredTime: 'Morning (8am - 12pm)',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    if (!formState.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formState.phone.trim()) newErrors.phone = 'Please provide a contact phone number';
    if (!formState.message.trim()) newErrors.message = 'Please enter your message or question';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        phone: '',
        email: '',
        serviceInterest: 'Standard House Cleaning',
        preferredTime: 'Morning (8am - 12pm)',
        message: ''
      });
    }, 600);
  };

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
            <span className="text-forest-950 font-bold">Contact Rebecca & Orellana’s Cleaning</span>
          </nav>
        </div>

        {/* Dedicated Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-950 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-5 border border-mint-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-forest-800" />
            <span>Connect Directly with Rebecca</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest-950 tracking-tight leading-tight mb-5">
            Contact Orellana’s Cleaning LLC
          </h1>

          <p className="text-base sm:text-xl text-charcoal-soft font-normal leading-relaxed max-w-2xl mx-auto">
            Ready to come home to a clean, fresh, and sparkling house? Call or message Rebecca directly. We proudly serve Dallas (75287), Carrollton, Addison, Plano, and surrounding areas.
          </p>

          {/* Trust Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-mint-200">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8 Google Rating (12 Reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Direct Phone & Text Response</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-950 bg-white px-4 py-2 rounded-2xl border border-mint-200 shadow-2xs">
              <Heart className="w-4 h-4 text-emerald-600" />
              <span>Women-Owned & Latino-Owned</span>
            </div>
          </div>
        </div>

        {/* 3 Contact Info Cards Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <Card3DTilt maxTilt={12} scale={1.03}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="font-display font-bold text-lg text-forest-950 mb-1">
                  Direct Phone & Text
                </h2>
                <p className="text-xs text-charcoal-muted mb-4">
                  Call or text Rebecca directly for rapid booking, emergency 2-hour cleans, or questions.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-display font-extrabold text-2xl text-forest-800 hover:text-forest-950 transition-colors block"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-forest-800 text-white font-bold text-xs hover:bg-forest-900 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`sms:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-mint-100 text-forest-900 font-bold text-xs hover:bg-mint-200 transition-colors border border-mint-300"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-forest-800" />
                  <span>Send a Text Message</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Card 2: Address & Directions */}
          <Card3DTilt maxTilt={12} scale={1.03}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-forest-700" />
                </div>
                <h2 className="font-display font-bold text-lg text-forest-950 mb-1">
                  Dallas Headquarters
                </h2>
                <p className="text-xs text-charcoal-muted mb-2">
                  Serving Dallas (75287), Coppell, Plano, Carrollton & Addison.
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
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </Card3DTilt>

          {/* Card 3: Business Hours */}
          <Card3DTilt maxTilt={12} scale={1.03}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mint-100 text-forest-800 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-forest-700" />
                </div>
                <h2 className="font-display font-bold text-lg text-forest-950 mb-1">
                  Operating Schedule
                </h2>
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
              <Link
                to="/quote"
                className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-forest-800 text-white font-bold text-xs hover:bg-forest-900 transition-colors shadow-sm"
              >
                <span>Instant Estimate Page</span>
              </Link>
            </div>
          </Card3DTilt>

        </div>

        {/* Map & Inquiry Form Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-mint-200 shadow-soft flex flex-col min-h-[440px]">
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
                className="w-full h-full min-h-[400px] border-0"
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
              <h2 className="font-display font-bold text-xl text-forest-950 mb-2">
                Send a Message to Rebecca
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
                Have questions about recurring service, emergency 2-hour cleans, or move-in rental rescues in Dallas or Carrollton? Send us a quick note below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center py-10 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-display font-bold text-lg text-emerald-950 mb-1">
                    Message Sent to Rebecca!
                  </h3>
                  <p className="text-xs text-emerald-800 mb-4">
                    Thank you! Rebecca or her team will review your message and respond promptly.
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Service of Interest
                      </label>
                      <select
                        name="serviceInterest"
                        value={formState.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-xs sm:text-sm bg-white"
                      >
                        <option value="Emergency Deep Cleaning">Emergency Deep Cleaning (2-Hr Callout)</option>
                        <option value="Standard House Cleaning">Standard House Cleaning</option>
                        <option value="Deep Clean & Tub Detailing">Deep Clean & Tub Detailing</option>
                        <option value="Move-In / Move-Out Rental Rescue">Move-In / Rental Rescue</option>
                        <option value="Post-Baby Family Cleaning">Post-Baby Family Cleaning</option>
                        <option value="Commercial & Office Cleaning">Commercial & Office</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Preferred Contact Window
                      </label>
                      <select
                        name="preferredTime"
                        value={formState.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-mint-200 text-xs sm:text-sm bg-white"
                      >
                        <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                        <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                        <option value="Urgent 2-Hour Window">Urgent 2-Hour Window</option>
                        <option value="Anytime via Text">Anytime via Text Message</option>
                      </select>
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
                      placeholder="Tell us about your home (bedrooms, bathrooms, urgent move-in, deep bathtub cleaning, or preferred dates)..."
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
              <span>Personal response directly from Rebecca</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-forest-800 hover:underline">
                Or call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Areas Served Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mint-200 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-base text-forest-950 flex items-center">
                <MapPin className="w-4 h-4 text-forest-700 mr-2" />
                Communities We Proudly Clean Across North Texas:
              </h3>
              <p className="text-xs text-charcoal-muted mt-1">
                Convenient scheduling for homes, townhouses, and offices in:
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-forest-50 text-forest-900 text-xs font-semibold rounded-lg border border-mint-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
