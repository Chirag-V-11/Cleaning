import React, { useState } from 'react';
import { Star, ExternalLink, Sparkles, CheckCircle2, MapPin, Heart, ThumbsUp, MessageSquare } from 'lucide-react';
import { GOOGLE_REVIEWS_ALL, REVIEW_TOPICS, BUSINESS_INFO } from '../data/businessInfo';
import Card3DTilt from './Card3DTilt';

export default function ReviewsSection() {
  const [activeTopic, setActiveTopic] = useState('All Reviews');

  const filteredReviews = activeTopic === 'All Reviews'
    ? GOOGLE_REVIEWS_ALL
    : GOOGLE_REVIEWS_ALL.filter((rev) => rev.topic && rev.topic.includes(activeTopic));

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google 4.8 Trust Scorecard Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-mint-200 shadow-elevated mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Official Google Business Reviews</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            Rated 4.8 Stars (12 Google Reviews)
          </h2>

          {/* Rating Stars & Metrics */}
          <div className="flex flex-col items-center justify-center my-6">
            <div className="flex items-center space-x-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-300 text-amber-300'}`} />
              ))}
            </div>
            
            <div className="flex items-center space-x-3 text-forest-950">
              <span className="font-display font-extrabold text-5xl">4.8</span>
              <div className="text-left">
                <span className="block text-sm font-extrabold text-forest-900">Highly Recommended</span>
                <span className="text-xs text-charcoal-muted">12 Verified Reviews on Google</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-soft mt-3 flex items-center font-medium">
              <MapPin className="w-4 h-4 text-forest-700 mr-1" />
              Orellana’s Cleaning LLC • 3621 Frankford Rd, Dallas, TX 75287
            </p>
          </div>

          {/* Review Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl bg-forest-50 border border-mint-200 text-xs text-forest-950 font-semibold italic">
              "I highly recommend this service."
            </div>
            <div className="p-3 rounded-xl bg-forest-50 border border-mint-200 text-xs text-forest-950 font-semibold italic">
              "Great communication, great prices, prompt and professional."
            </div>
            <div className="p-3 rounded-xl bg-forest-50 border border-mint-200 text-xs text-forest-950 font-semibold italic">
              "Highly worth the money!"
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 shadow-elevated transition-all transform hover:-translate-y-0.5 group"
            >
              <span>View All 12 Reviews on Google</span>
              <ExternalLink className="w-4 h-4 ml-2.5 text-mint-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-2xl bg-mint-100 text-forest-950 font-bold text-sm hover:bg-mint-200 border border-mint-300 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-forest-800" />
              <span>Write a Review on Google</span>
            </a>
          </div>
        </div>

        {/* Filter Reviews by Real Google Topics */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
              Filter by Review Topics:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {REVIEW_TOPICS.map((topic) => (
              <button
                key={topic.label}
                onClick={() => setActiveTopic(topic.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTopic === topic.label
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-white text-charcoal hover:bg-forest-50 border border-mint-200'
                }`}
              >
                <span>{topic.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTopic === topic.label ? 'bg-forest-700 text-white' : 'bg-mint-100 text-forest-900'
                }`}>
                  {topic.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid with 3D Tilt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <Card3DTilt
              key={review.id}
              maxTilt={10}
              scale={1.02}
              className="h-full"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-mint-200 shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Header: Author + Star Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-base text-forest-950 flex items-center">
                        {review.author}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-1.5" />
                      </h3>
                      <span className="text-[11px] text-charcoal-muted block">
                        {review.badge}
                      </span>
                    </div>

                    <span className="text-[11px] text-charcoal-light font-medium bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                      {review.date}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-charcoal text-sm leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>

                  {/* Owner Response Box if available */}
                  {review.ownerResponse && (
                    <div className="p-3 bg-mint-50/80 rounded-xl border border-mint-200 mb-4 text-xs">
                      <span className="font-bold text-forest-900 block mb-0.5">
                        Response from owner Rebecca:
                      </span>
                      <p className="text-charcoal-soft italic">
                        "{review.ownerResponse}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Tag Cloud for this Review */}
                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {review.topic && review.topic.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-forest-50 text-forest-900 border border-mint-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
