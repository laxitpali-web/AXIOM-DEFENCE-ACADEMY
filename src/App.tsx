import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ResultsSection from './components/ResultsSection';
import FacultySection from './components/FacultySection';
import SsbSection from './components/SsbSection';
import CadetJourneyScroll from './components/CadetJourneyScroll';
import GallerySection from './components/GallerySection';
import RoadmapAndExperience from './components/RoadmapAndExperience';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import EnquiryPopup from './components/EnquiryPopup';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);

  // Auto trigger the timed enquiry popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Direct pop up trigger for parent confidence
      setIsEnquiryOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnquiry = () => {
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-navy-dark text-white font-sans selection:bg-brand-gold selection:text-brand-navy flex flex-col justify-between">
      
      {/* Dynamic Sticky Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo(0, 0);
        }} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Main Content Layout Engine */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="space-y-0 relative">
            {/* Cinematic Hero Block */}
            <Hero onOpenEnquiry={handleOpenEnquiry} setActiveTab={setActiveTab} />
            
            {/* Core About & Why Choose Axiom */}
            <AboutSection />
            
            {/* Dynamic Interactive Courses */}
            <CoursesSection onOpenEnquiry={handleOpenEnquiry} />

            {/* Officer mindset & SSB Quality check */}
            <SsbSection />

            {/* Pinned GSAP Cadet Journey Experience */}
            <CadetJourneyScroll />

            {/* Real Factual Cadet Results validation */}
            <ResultsSection />

            {/* Timelines, Schedule Clock & Parents testimonials */}
            <RoadmapAndExperience />

            {/* Military Officers team */}
            <FacultySection onOpenEnquiry={handleOpenEnquiry} />

            {/* Frequently asked answers */}
            <FaqSection />

            {/* Conversion form and directions map */}
            <ContactSection />
          </div>
        )}

        {/* Dedicated Individual full views for deep explore navigation */}
        {activeTab === 'about' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Military legacy established in Jaipur
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">The Founding Pillars Of Axiom</h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Read our origin story, core guiding rules, and student honor codes.</p>
            </div>
            <AboutSection hideHeader={true} />
            <RoadmapAndExperience />
          </div>
        )}

        {activeTab === 'courses' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                UPSC curriculum aligned training
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Featured Preparation Streams</h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Check eligibility standards, syllabi breakdowns, and custom classroom features.</p>
            </div>
            <CoursesSection onOpenEnquiry={handleOpenEnquiry} hideHeader={true} />
            <FaqSection hideHeader={true} />
          </div>
        )}

        {activeTab === 'results' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Selections That Make Us Proud
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Commissioned Cadet Ledger</h1>
              <p className="text-slate-305 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Absolute realistic success metrics. Explore parent and candidate testimonials.</p>
            </div>
            <ResultsSection hideHeader={true} />
          </div>
        )}

        {activeTab === 'ssb' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Ex-GTO Services Selection Board coaching
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Elite SSB Interview Prep</h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Explore psychological tools, mock selection boards and 15 Officer Like Qualities.</p>
            </div>
            <SsbSection hideHeader={true} />
          </div>
        )}

        {activeTab === 'faculty' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Instructed by retired officers & graduates
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Meet Our Commanding Faculty</h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Taught daily by Ex-Commandants, Ex-GTO officers and written exam graduates.</p>
            </div>
            <FacultySection onOpenEnquiry={handleOpenEnquiry} hideHeader={true} />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Axiom physical arena and classrooms
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Campus Photo Portfolios</h1>
              <p className="text-slate-305 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Visual overview of GTO replica grounds and student mock setups.</p>
            </div>
            <GallerySection hideHeader={true} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <div className="relative py-20 bg-gradient-to-b from-brand-navy-dark to-brand-navy border-b border-white/5 text-center space-y-3">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 border border-brand-gold/25 rounded">
                Jaipur admissions session 2026-27
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">Connect With Admissions Desk</h1>
              <p className="text-slate-305 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">Call directly, trigger WhatsApp chats or register mock demo requests.</p>
            </div>
            <ContactSection hideHeader={true} />
            <FaqSection hideHeader={true} />
          </div>
        )}
      </main>

      {/* Floating Call & WhatsApp Helpdesks */}
      <WhatsAppCTA />

      {/* Structured timed admissions modal */}
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />

      {/* Footer link directories & taglines */}
      <Footer setActiveTab={setActiveTab} onOpenEnquiry={handleOpenEnquiry} />

    </div>
  );
}
