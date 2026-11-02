import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, ArrowLeftRight, CheckCircle2, Award } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/businessInfo';

export default function BeforeAfterSection() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 sm:py-28 bg-white border-y border-mint-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Interactive Transformations</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            See the Orellana Cleaning Transformation
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Drag the slider to compare untouched surfaces with our finished work—including rental move-in rescues, deep bathtub descaling, and spotless kitchens.
          </p>

          {/* Transformation Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeItemIndex === idx
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-surface-light text-charcoal hover:bg-forest-50 border border-mint-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[360px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-4 border-white"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <img
              src={currentItem.after}
              alt="After Orellana's Cleaning"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-forest-900/90 text-amber-300 font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md backdrop-blur-sm flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              After (Cleaned & Shining)
            </div>

            {/* Before Image (Clipped Layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentItem.before}
                alt="Before cleaning"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-black/80 text-white font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md backdrop-blur-sm">
                Before
              </div>
            </div>

            {/* Drag Handle Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-forest-800 text-white shadow-xl border-2 border-white flex items-center justify-center transform -translate-x-1/2">
                <ArrowLeftRight className="w-4 h-4 text-amber-300" />
              </div>
            </div>
          </div>

          {/* Subtitle & Slider Guidance Note */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-charcoal-muted px-2 gap-2">
            <span className="font-semibold text-forest-950 flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5 text-forest-700" />
              {currentItem.subtitle}
            </span>
            <span className="flex items-center text-charcoal-light font-medium">
              <MoveHorizontal className="w-4 h-4 mr-1 text-mint-500" />
              Drag slider left / right to compare
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
