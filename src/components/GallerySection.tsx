import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, Play, Shield } from 'lucide-react';
import { PHOTO_GALLERY } from '../data';

export default function GallerySection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<typeof PHOTO_GALLERY[0] | null>(null);

  const categories = ['All', 'Physical', 'Academic', 'SSB Preparation', 'Discipline', 'Celebration'];

  const filteredPhotos = PHOTO_GALLERY.filter((photo) => {
    if (activeCategory === 'All') return true;
    return photo.category.toUpperCase().includes(activeCategory.toUpperCase());
  });

  return (
    <section className="py-20 bg-brand-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Block */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase font-mono tracking-widest font-bold">
              <Camera className="w-3.5 h-3.5 text-brand-gold" />
              <span>ACADEMY SNAPSHOTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white">
              Daily Life & Cadets Training Moments
            </h2>
            <p className="text-slate-300 text-sm font-sans">
              Watch our candidates undergo daily physical drills, math concepts learning sheets, GTO simulations, and celebratory selected gatherings inside the Axiom Jaipur campus.
            </p>
          </div>
        )}

        {/* Gallery filters */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 pb-6 max-w-md sm:max-w-none mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-mono font-medium transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-brand-gold text-brand-navy font-bold shadow-md' 
                    : 'bg-brand-navy-dark hover:bg-brand-navy-dark/90 text-slate-350 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Portfolio Grid with premium hover overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="bg-brand-navy-dark border border-white/5 rounded-xl overflow-hidden shadow-lg group cursor-pointer relative transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40"
            >
              <div className="relative aspect-video overflow-hidden bg-brand-navy-dark">
                <img 
                  src={photo.url} 
                  alt="Axiom Defence Academy Campus Roster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Premium Hover Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-brand-gold rounded-full text-brand-navy transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow">
                    <ZoomIn className="w-5 h-5 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Popup Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-dark/90 p-4 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />
            
            <div className="bg-brand-navy-dark border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full relative z-10 shadow-2xl">
              {/* Close Button top */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-navy-light border border-white/10 flex items-center justify-center text-slate-350 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
 
              <div className="relative aspect-video bg-black">
                <img 
                  src={selectedImage.url} 
                  alt="Axiom Defence Academy Campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain select-none"
                />
              </div>
 
              <div className="p-6 bg-brand-navy-dark border-t border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-brand-gold font-bold uppercase bg-brand-gold/10 px-2.5 py-0.5 rounded border border-brand-gold/25">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">• Campus & Training Snapshot</span>
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Real, verified photograph from our core training and instruction grounds in Jaipur, representing genuine cadet physical drills and written lecture preparation.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
