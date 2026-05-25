import React, { useState } from 'react';
import { Shield, CheckCircle, GraduationCap, ChevronRight, MessageSquare, BookOpen, Clock, Calendar } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

interface CoursesSectionProps {
  onOpenEnquiry: () => void;
  hideHeader?: boolean;
}

export default function CoursesSection({ onOpenEnquiry, hideHeader = false }: CoursesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);

  return (
    <section className="py-20 bg-brand-navy text-white relative">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-brand-navy-light/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Block */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase font-mono tracking-widest font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FEATURED COURSES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Elite Training & Preparation Streams
            </h2>
            <p className="text-slate-300 text-sm font-sans">
              Explore our curated academic and physical training structures customized for specific defence entrance formats. Built around official syllabi and optimized by military experts.
            </p>
          </div>
        )}

        {/* Dynamic Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Left: Quick course cards grid / vertical tabs */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">Select a Preparation Track:</p>
            <div className="grid grid-cols-1 gap-3">
              {COURSES.map((course) => {
                const isSelected = selectedCourse.id === course.id;
                return (
                  <button
                    key={course.id}
                    id={`course-tab-${course.id}`}
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer ${
                      isSelected
                        ? 'bg-brand-navy-dark border-brand-gold shadow-lg shadow-brand-gold/5'
                        : 'bg-brand-navy bg-opacity-40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Active highlight bar */}
                    {isSelected && (
                      <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-gold" />
                    )}

                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/25">
                            {course.id.toUpperCase()}
                          </span>
                        </div>
                        <h3 className={`font-serif font-bold text-sm sm:text-base leading-snug ${isSelected ? 'text-brand-gold' : 'text-white'}`}>
                          {course.name}
                        </h3>
                      </div>
                      <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'text-brand-gold translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-gold" /> {course.duration.split('/')[0]}</span>
                      <span className="text-brand-gold hover:underline">View Syllabus →</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed syllabus, overview and CTA for the selected course */}
          <div className="lg:col-span-7 bg-brand-navy-dark rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            
            {/* Outline design features */}
            <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none">
              <Shield className="w-64 h-64 text-slate-300" />
            </div>

            <div className="space-y-6">
              {/* Header inside details */}
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[10px] uppercase font-bold text-brand-gold">
                  <span>Detailed Syllabus Profile</span>
                  <span className="text-slate-700">•</span>
                  <span className="text-slate-450">Jaipur Session 2026-27</span>
                </div>
                <h3 className="text-2.5xl font-serif font-bold text-white leading-tight">{selectedCourse.name}</h3>
                <p className="text-sm text-slate-400 mt-2 font-sans leading-relaxed">{selectedCourse.overview}</p>
              </div>

              {/* Eligibility & Duration metrics badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-brand-navy p-4 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-gold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>ELIGIBILITY STANDARD</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedCourse.eligibility}</p>
                </div>

                <div className="bg-brand-navy p-4 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-gold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>TIMEFRAME & DURATION</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedCourse.duration}</p>
                </div>
              </div>

              {/* Syllabus Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">Curriculum Focus Subjects</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCourse.syllabus.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300 bg-brand-navy/30 p-2.5 rounded border border-white/5">
                      <BookOpen className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Coaching Features */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Axiom Specialized Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCourse.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-slate-350">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span className="font-sans">{feature.substring(0, 50)}...</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <div className="text-left font-mono text-[10px] text-slate-400 leading-none">
                <span className="block text-brand-gold font-bold mb-0.5">BATCHES FILLING RAPIDLY</span>
                <span>Maximum 30 candidates per batch</span>
              </div>
              <div className="flex gap-2">
                <button
                  id={`course-cta-demo-${selectedCourse.id}`}
                  onClick={onOpenEnquiry}
                  className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold text-xs uppercase tracking-wider rounded font-mono transition-colors cursor-pointer"
                >
                  Book Demo Class
                </button>
                <a
                  href={`https://wa.me/919314533083?text=Jai%20Hind%21%20I%20am%20interested%20in%20enquiring%20about%20the%20${encodeURIComponent(selectedCourse.name)}%20curriculum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-650/10 hover:bg-emerald-650/20 text-emerald-400 border border-emerald-500/20 font-bold text-xs uppercase tracking-wider rounded flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Ask syllabus
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
