import React from 'react';
import { ArrowRight, CheckCircle, GraduationCap, Users } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data';

interface FacultySectionProps {
  onOpenEnquiry: () => void;
  hideHeader?: boolean;
}

export default function FacultySection({ onOpenEnquiry, hideHeader = false }: FacultySectionProps) {
  return (
    <section className="py-20 bg-brand-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Header Block */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4 font-sans">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs uppercase font-mono tracking-widest font-bold">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>THE MENTORSHIP TEAM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              Trained By True Military Legends
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Meet the actual executive commanders and academic architects who design and lead daily training lectures at Axiom. Deeply rooted in honor, discipline, and high success strategies.
            </p>
          </div>
        )}

        {/* Faculty Grid - Showcase of key members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((faculty, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-brand-navy-dark border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-brand-gold/40 transition-all duration-300"
              >
                {/* Decorative Cadet Background Stripes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors pointer-events-none" />

                <div className="space-y-6">
                  {/* Faculty Portrait Image */}
                  {faculty.image ? (
                    <div className="w-full h-72 rounded-xl overflow-hidden border border-white/10 relative shadow-lg bg-brand-navy shrink-0">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-gold p-[1.5px] shrink-0 text-white flex items-center justify-center font-black text-xl shadow-lg">
                      <div className="w-full h-full bg-brand-navy-dark rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-brand-gold" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                    <div>
                      <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-wider block mb-1">{faculty.role}</span>
                      <h3 className="text-lg font-serif font-bold text-white leading-tight">{faculty.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{faculty.title}</p>
                    </div>
                  </div>

                  {/* Faculty Bio Paragraph */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{faculty.bio}</p>

                  {/* Academic Credentials lists */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-widest">Key Credentials & Achievements:</h4>
                    <div className="grid grid-cols-1 gap-1.5 pt-1 font-sans text-xs">
                      {faculty.qualifications.map((qual, qIdx) => (
                        <div key={qIdx} className="flex items-start gap-2 text-slate-100">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance stats bar of each faculty */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold">Experience Level</span>
                    <strong className="text-slate-100 font-bold">{faculty.experience}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold">Historical Selections</span>
                    <strong className="text-brand-gold font-bold">{faculty.achievementsCount}</strong>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Professional summary banner with demo class invitation */}
        <div className="bg-brand-navy-dark border border-white/5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif font-bold text-sm text-white">Want to experience their lecture before physical admission?</h4>
            <p className="text-xs text-slate-400 max-w-xl font-sans leading-relaxed">
              We arrange direct 2-day free interactive trial classrooms in Jaipur so you can evaluate the teaching standards of Vinay Sir, Col. Chouhan, and Col. Mukherjee before finalizing.
            </p>
          </div>
          <button
            id="faculty-btn-demo"
            onClick={onOpenEnquiry}
            className="px-6 py-3 bg-brand-gold text-brand-navy hover:bg-brand-gold-light text-xs font-extrabold uppercase tracking-widest rounded flex items-center gap-1.5 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer font-sans"
          >
            <span>Book demo seat now</span>
            <ArrowRight className="w-4 h-4 text-brand-navy" />
          </button>
        </div>

      </div>
    </section>
  );
}
