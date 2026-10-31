import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessInfo';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const categories = ['All', 'Living Room', 'Kitchen', 'Bathroom', 'Bedroom', 'Equipment'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Our Work in Action</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            Showcase Gallery
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed mb-6">
            Explore authentic cleaning results across living spaces, gourmet kitchens, luxury bathrooms, and commercial suites in Dallas.
          </p>

          {/* Sample images disclosure notice as requested */}
          <div className="inline-flex items-center space-x-2 text-xs bg-forest-50 border border-mint-200 text-forest-900 px-4 py-2 rounded-xl">
            <Info className="w-4 h-4 text-forest-600 flex-shrink-0" />
            <span>Curated portfolio preview of our Dallas residential & commercial cleaning standards.</span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === cat
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-surface-light text-charcoal hover:bg-forest-50 border border-mint-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated cursor-pointer bg-forest-900 aspect-[4/3] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Category pill */}
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-extrabold bg-white/90 text-forest-900 px-2.5 py-0.5 rounded-full shadow-xs">
                {item.category}
              </span>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-display font-bold text-sm leading-tight text-white line-clamp-1">
                  {item.title}
                </p>
                <p className="text-[11px] text-mint-200 font-medium">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModalImage.image}
              alt={activeModalImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-5 bg-forest-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-mint-400 block">
                  {activeModalImage.category}
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  {activeModalImage.title}
                </h4>
              </div>
              <span className="text-xs text-mint-100 font-medium bg-forest-800 px-3 py-1.5 rounded-xl border border-forest-700 w-fit">
                {activeModalImage.note}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
