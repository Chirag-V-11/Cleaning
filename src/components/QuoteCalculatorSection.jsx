import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Phone, Mail, Home, CheckCircle2, AlertCircle, ArrowRight, DollarSign, PlusCircle, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, BUSINESS_INFO } from '../data/businessInfo';

export default function QuoteCalculatorSection({ preselectedService }) {
  // Form State
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceRequired: preselectedService || 'Standard House Cleaning',
    propertyType: 'Single Family Home',
    preferredDate: '',
    propertySize: '1500 - 2499 sq ft',
    bedrooms: '3',
    bathrooms: '2',
    frequency: 'Bi-Weekly (15% Off)',
    addons: [],
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const addOnOptions = [
    { id: 'wood-polish', label: "Lincoln's Hardwood Floor Polish ($45)", price: 45 },
    { id: 'baseboards', label: 'Hand-Washing Baseboards ($40)', price: 40 },
    { id: 'blinds', label: 'Detailing Blinds Slat-by-Slat ($35)', price: 35 },
    { id: 'inside-oven', label: 'Inside Oven Degrease ($40)', price: 40 },
    { id: 'inside-fridge', label: 'Inside Refrigerator Sanitize ($35)', price: 35 }
  ];

  const calculateEstimate = () => {
    let base = 125;
    
    if (formData.serviceRequired === 'Deep Detail Cleaning') base = 195;
    else if (formData.serviceRequired === 'Hardwood Floor Polishing') base = 140;
    else if (formData.serviceRequired === 'Move-In / Move-Out Cleaning') base = 220;
    else if (formData.serviceRequired === 'Office & Small Business Cleaning') base = 160;
    else if (formData.serviceRequired === 'Recurring Family Housekeeping') base = 115;

    const beds = parseInt(formData.bedrooms, 10) || 1;
    const baths = parseFloat(formData.bathrooms, 10) || 1;
    const roomCost = (beds - 1) * 20 + (baths - 1) * 25;

    let sizeCost = 0;
    if (formData.propertySize === '1000 - 1499 sq ft') sizeCost = 20;
    else if (formData.propertySize === '1500 - 2499 sq ft') sizeCost = 40;
    else if (formData.propertySize === '2500 - 3499 sq ft') sizeCost = 75;
    else if (formData.propertySize === '3500+ sq ft') sizeCost = 120;

    const addonsCost = formData.addons.reduce((acc, addonId) => {
      const match = addOnOptions.find((a) => a.id === addonId);
      return acc + (match ? match.price : 0);
    }, 0);

    let total = base + roomCost + sizeCost + addonsCost;
    if (formData.frequency === 'Bi-Weekly (15% Off)') total = total * 0.85;
    if (formData.frequency === 'Weekly (20% Off)') total = total * 0.80;
    if (formData.frequency === 'Monthly (10% Off)') total = total * 0.90;

    return Math.round(total);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const toggleAddon = (addonId) => {
    setFormData((prev) => {
      const exists = prev.addons.includes(addonId);
      return {
        ...prev,
        addons: exists ? prev.addons.filter((id) => id !== addonId) : [...prev.addons, addonId]
      };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    } else if (formData.customerName.trim().length < 2) {
      newErrors.customerName = 'Please enter a valid full name';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for Sheila to confirm';
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number (e.g. 214-450-6302)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred cleaning date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const calculatedTotal = calculateEstimate();
    const referenceId = `BRAZILIAN-${Math.floor(100000 + Math.random() * 900000)}`;

    const submissionPayload = {
      referenceId,
      ...formData,
      estimatedPrice: `$${calculatedTotal}`,
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('brazilian_cleaning_quotes') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('brazilian_cleaning_quotes', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage error', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmissionDetails(submissionPayload);

      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#124C3A', '#DDF3E8', '#F59E0B', '#2A8F68']
        });
      } catch (e) {}
    }, 800);
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setSubmissionDetails(null);
    setFormData({
      customerName: '',
      phoneNumber: '',
      emailAddress: '',
      serviceRequired: 'Standard House Cleaning',
      propertyType: 'Single Family Home',
      preferredDate: '',
      propertySize: '1500 - 2499 sq ft',
      bedrooms: '3',
      bathrooms: '2',
      frequency: 'Bi-Weekly (15% Off)',
      addons: [],
      additionalRequirements: ''
    });
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Honest & Upfront Estimates</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            Request an Instant Cleaning Estimate
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Get an instant estimate for your home in Dallas, Coppell, Plano, or Carrollton. Sheila or Lincoln will follow up directly to lock in your date.
          </p>
        </div>

        {/* Confirmation Screen */}
        {submitSuccess && submissionDetails ? (
          <div className="max-w-2xl mx-auto bg-surface-light rounded-3xl p-8 sm:p-12 border-2 border-mint-400 shadow-2xl text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
              Quote Request Received
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-4 mb-2">
              Thank You, {submissionDetails.customerName}!
            </h3>

            <p className="text-sm sm:text-base text-charcoal-muted mb-6">
              Sheila has received your request for <strong className="text-forest-900">{submissionDetails.serviceRequired}</strong>. Reference Code: <strong className="text-forest-800 font-mono">{submissionDetails.referenceId}</strong>.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-mint-200 text-left mb-8 space-y-3">
              <div className="flex justify-between text-sm py-1 border-b border-gray-100">
                <span className="text-charcoal-muted">Estimated Total:</span>
                <span className="font-display font-extrabold text-xl text-forest-900">{submissionDetails.estimatedPrice}</span>
              </div>
              <div className="flex justify-between text-sm py-1 border-b border-gray-100">
                <span className="text-charcoal-muted">Preferred Date:</span>
                <span className="font-bold text-forest-950">{submissionDetails.preferredDate}</span>
              </div>
              <div className="flex justify-between text-sm py-1 border-b border-gray-100">
                <span className="text-charcoal-muted">Schedule Plan:</span>
                <span className="font-bold text-forest-950">{submissionDetails.frequency}</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="text-charcoal-muted">Service Location:</span>
                <span className="font-bold text-forest-950">Dallas / Coppell Area</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 flex items-center justify-center shadow-md"
              >
                <Phone className="w-4 h-4 mr-2 text-amber-400" />
                <span>Call Sheila: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-mint-100 text-forest-900 font-bold text-sm hover:bg-mint-200 border border-mint-300"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-surface-light rounded-3xl p-6 sm:p-10 border border-mint-200/90 shadow-soft">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* 1. Contact Info */}
                <div>
                  <h3 className="font-display font-bold text-lg text-forest-950 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-forest-800 text-white text-xs flex items-center justify-center mr-2">1</span>
                    Your Information
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Customer Name *
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        placeholder="e.g. Candy Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.customerName
                            ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                            : 'border-mint-200 bg-white focus:border-forest-700'
                        }`}
                      />
                      {errors.customerName && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.customerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(214) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.phoneNumber
                            ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                            : 'border-mint-200 bg-white focus:border-forest-700'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="candy@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.emailAddress
                            ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                            : 'border-mint-200 bg-white focus:border-forest-700'
                        }`}
                      />
                      {errors.emailAddress && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.emailAddress}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Service & Property Details */}
                <div className="pt-4 border-t border-mint-200/60">
                  <h3 className="font-display font-bold text-lg text-forest-950 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-forest-800 text-white text-xs flex items-center justify-center mr-2">2</span>
                    Service & Home Details
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Cleaning Service *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white text-sm font-medium focus:outline-none focus:border-forest-700"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white text-sm font-medium focus:outline-none focus:border-forest-700"
                      >
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Apartment / Condo">Apartment / Condo</option>
                        <option value="Commercial Office">Commercial Office</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.preferredDate
                            ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                            : 'border-mint-200 bg-white focus:border-forest-700'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Approximate Sq Ft
                      </label>
                      <select
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white text-sm font-medium focus:outline-none focus:border-forest-700"
                      >
                        <option value="Under 1000 sq ft">Under 1,000 sq ft</option>
                        <option value="1000 - 1499 sq ft">1,000 – 1,499 sq ft</option>
                        <option value="1500 - 2499 sq ft">1,500 – 2,499 sq ft</option>
                        <option value="2500 - 3499 sq ft">2,500 – 3,499 sq ft</option>
                        <option value="3500+ sq ft">3,500+ sq ft</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Bedrooms / Bathrooms
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleInputChange}
                          className="px-2 py-3 rounded-xl border border-mint-200 bg-white text-xs font-medium"
                        >
                          <option value="1">1 Bed</option>
                          <option value="2">2 Beds</option>
                          <option value="3">3 Beds</option>
                          <option value="4">4 Beds</option>
                          <option value="5">5+ Beds</option>
                        </select>
                        <select
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleInputChange}
                          className="px-2 py-3 rounded-xl border border-mint-200 bg-white text-xs font-medium"
                        >
                          <option value="1">1 Bath</option>
                          <option value="2">2 Baths</option>
                          <option value="3">3 Baths</option>
                          <option value="4">4+ Baths</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Cleaning Schedule Frequency
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Bi-Weekly (15% Off)', 'Weekly (20% Off)', 'Monthly (10% Off)', 'One-Time Clean'].map((freq) => (
                        <button
                          type="button"
                          key={freq}
                          onClick={() => setFormData((prev) => ({ ...prev, frequency: freq }))}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                            formData.frequency === freq
                              ? 'bg-forest-800 text-white border-forest-800 shadow-sm'
                              : 'bg-white text-charcoal border-mint-200 hover:border-forest-400'
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Add-on Options */}
                <div className="pt-4 border-t border-mint-200/60">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Client Favorite Detail Add-Ons:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {addOnOptions.map((addon) => {
                      const isSelected = formData.addons.includes(addon.id);
                      return (
                        <button
                          type="button"
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center border ${
                            isSelected
                              ? 'bg-amber-100 text-forest-950 border-amber-400 shadow-2xs font-extrabold'
                              : 'bg-white text-charcoal border-mint-200 hover:border-mint-400'
                          }`}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 mr-1.5 ${isSelected ? 'text-forest-800' : 'text-gray-300'}`} />
                          {addon.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Additional Requirements */}
                <div className="pt-4 border-t border-mint-200/60">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Notes for Sheila & Lincoln (Pets, Wood floors, Gate Code, Focus Areas)
                  </label>
                  <textarea
                    name="additionalRequirements"
                    rows="3"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="Tell us what matters most (e.g. please make wood floors extra shiny, focus on baseboards, have a friendly golden retriever)..."
                    className="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white text-sm font-medium focus:outline-none focus:border-forest-700"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-forest-800 text-white font-extrabold text-base hover:bg-forest-900 shadow-elevated transition-all flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Calculating Estimate & Sending to Sheila...</span>
                    </div>
                  ) : (
                    <>
                      <span>Lock In Estimate & Submit to Sheila</span>
                      <ArrowRight className="w-5 h-5 ml-2 text-amber-300" />
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Right Column: Dynamic Price Box */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-elevated border border-forest-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-mint-300">
                    Estimated Price
                  </span>
                  <span className="text-[11px] font-semibold bg-forest-900 text-amber-300 px-2.5 py-1 rounded-full border border-forest-700">
                    Dallas & Coppell Local Rate
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                    ${calculateEstimate()}
                  </span>
                  <span className="text-sm text-mint-200 font-medium">
                    est. visit
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-forest-800 text-xs text-mint-100">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-bold text-white">{formData.serviceRequired}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rooms:</span>
                    <span className="font-bold text-white">{formData.bedrooms} Bed, {formData.bathrooms} Bath</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schedule:</span>
                    <span className="font-bold text-amber-300">{formData.frequency}</span>
                  </div>
                  {formData.addons.length > 0 && (
                    <div className="flex justify-between text-emerald-300">
                      <span>Add-ons selected:</span>
                      <span className="font-bold">+{formData.addons.length} items</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-forest-800/80">
                  <p className="text-[11px] text-mint-200/80 leading-relaxed">
                    *Reasonable, transparent rates with no surprise charges. Confirmed with you before visit.
                  </p>
                </div>
              </div>

              {/* Direct Booking Phone Callout */}
              <div className="bg-mint-100/70 rounded-3xl p-6 border border-mint-300 text-forest-950">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-forest-950">
                      Want to Talk to Sheila Now?
                    </h4>
                    <p className="text-xs text-charcoal-muted">
                      Direct mobile line for immediate scheduling.
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block w-full py-3 rounded-xl bg-forest-800 text-white font-bold text-sm text-center hover:bg-forest-900 transition-colors shadow-sm"
                >
                  Call Sheila: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-3xl p-6 border border-mint-200 space-y-3">
                <div className="flex items-center space-x-3 text-xs text-charcoal font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>10+ Years Trust in Dallas & Coppell</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-charcoal font-semibold">
                  <Heart className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>LGBTQ+ Friendly Family Business</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-charcoal font-semibold">
                  <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Supplies & Specialized Buffers Included</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
