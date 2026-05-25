import React, { useState } from 'react';
import { Shield, Search, Star, Trophy } from 'lucide-react';
import { ACHIEVERS } from '../data';

export default function ResultsSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [filter, setFilter] = useState<'ALL' | 'NDA' | 'CDS_AFCAT' | 'SCHOOL_ENTRY'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAchievers = ACHIEVERS.filter((achiever) => {
    // Search filter
    const matchesSearch = 
      achiever.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achiever.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (achiever.school && achiever.school.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    // Tab filter
    if (filter === 'ALL') return true;
    if (filter === 'NDA') {
      return achiever.exam.toUpperCase().includes('NDA');
    }
    if (filter === 'CDS_AFCAT') {
      return achiever.exam.toUpperCase().includes('CDS') || achiever.exam.toUpperCase().includes('AFCAT') || achiever.exam.toUpperCase().includes('INET');
    }
    if (filter === 'SCHOOL_ENTRY') {
      return !!achiever.school;
    }
    return true;
  });

  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header content with trusted values */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-brand-navy/10 text-brand-navy text-xs font-mono font-bold tracking-widest uppercase border border-brand-navy/15">
              <Trophy className="w-4 h-4 text-brand-gold shrink-0 fill-brand-gold/20" />
              <span>COMMISSIONED OFFICER LOG</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-brand-navy tracking-tight">
              Selections That Make Us Proud
            </h2>
            <p className="text-slate-650 text-sm font-sans leading-relaxed">
              We list real, factual student results. No fabricated names or duplicate metrics. Verified entries of Jaipur’s proud cadets who cleared both written UPSC exams and prestigious SSB selection boards.
            </p>
          </div>
        )}

        {/* Real-time filters and search index */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            <button
              id="filter-all"
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                filter === 'ALL'
                  ? 'bg-brand-navy text-brand-gold font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              All Selections ({ACHIEVERS.length})
            </button>
            <button
              id="filter-nda"
              onClick={() => setFilter('NDA')}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                filter === 'NDA'
                  ? 'bg-brand-navy text-brand-gold font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              NDA Selected
            </button>
            <button
              id="filter-cds-afcat"
              onClick={() => setFilter('CDS_AFCAT')}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                filter === 'CDS_AFCAT'
                  ? 'bg-brand-navy text-brand-gold font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              CDS / AFCAT
            </button>
            <button
              id="filter-school"
              onClick={() => setFilter('SCHOOL_ENTRY')}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                filter === 'SCHOOL_ENTRY'
                  ? 'bg-brand-navy text-brand-gold font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              Sainik & RMS Alumni
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative w-full lg:w-80">
            <input
              id="result-search-input"
              type="text"
              placeholder="Search by candidate name or school..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:ring-1 focus:ring-brand-gold outline-none text-slate-800"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Dynamic Selections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievers.map((achiever, index) => {
            const initials = achiever.name.split(' ').map(n => n[0]).join('');
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-slate-200 hover:border-brand-gold/40 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Visual Accent Badge */}
                <span className={`absolute top-0 right-0 px-3 py-1 text-[9px] font-mono font-bold uppercase rounded-bl-lg tracking-wider ${
                  achiever.status === 'SELECTED' 
                    ? 'bg-brand-gold text-brand-navy'
                    : 'bg-brand-navy text-white'
                }`}>
                  {achiever.status}
                </span>

                <div className="space-y-4">
                  {/* Avatar / Cadet visual frame */}
                  <div className="flex items-center gap-3">
                    {achiever.image ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden border border-white ring-2 ring-brand-navy/15 group-hover:ring-brand-gold/55 shadow-sm shrink-0 transition-all duration-300">
                        <img 
                          src={achiever.image} 
                          alt={achiever.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-navy to-brand-gold flex items-center justify-center text-white text-sm font-black tracking-wide border border-white shrink-0">
                        {initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-extrabold text-brand-navy text-sm group-hover:text-brand-gold-dark transition-colors">{achiever.name}</h3>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <span>Batch Year:</span>
                        <span className="text-slate-700 font-semibold">{achiever.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Exam detail text overlay */}
                  <div className="space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-brand-navy font-bold">
                      <Shield className="w-3.5 h-3.5 text-brand-navy fill-brand-navy/15" />
                      <span>{achiever.exam}</span>
                    </div>
                    
                    {achiever.details ? (
                      <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{achiever.details}</p>
                    ) : (
                      <p className="text-[11px] text-slate-400 italic">Official recommendation registered successfully under Axiom board.</p>
                    )}
                  </div>
                </div>

                {/* Optional School Origin Flag */}
                {achiever.school && (
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                    <span>School: {achiever.school}</span>
                  </div>
                )}
              </div>
            );
          })}

          {filteredAchievers.length === 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500 text-sm font-mono">No matching cadets found in this search parameters.</p>
            </div>
          )}
        </div>

        {/* Factual selection certification card */}
        <div className="bg-gradient-to-r from-brand-navy-dark to-brand-navy text-white rounded-2xl p-6 sm:p-8 border border-brand-gold/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-brand-gold">Can I verify these success metrics?</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Yes, absolutely. We pride ourselves on the rigorous authenticity of our results ledger. Unlike large-brand aggregators that double-count written exam clearances as complete SSB selections, we clearly separate written cleared cadets from final selected candidates. Our registers and photos are available for inspection at our Queen’s Road, Vaishali Nagar campus in Jaipur.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 shrink-0 font-mono text-center">
            <span className="text-2xl font-black text-brand-gold">100% Genuine</span>
            <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">Honor Bound Academy</span>
          </div>
        </div>

      </div>
    </section>
  );
}
