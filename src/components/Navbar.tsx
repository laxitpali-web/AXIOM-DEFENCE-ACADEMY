import React from 'react';
import { Shield, Phone, MessageSquare, Menu, X, GraduationCap, Award, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEnquiry: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenEnquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'results', label: 'Results' },
    { id: 'ssb', label: 'SSB training' },
    { id: 'faculty', label: 'Our Academy Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-navy border-b-2 border-brand-gold text-white shadow-lg">
      {/* Top Bar for Urgent Admissions */}
      <div className="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark py-2.5 px-4 text-center text-xs font-semibold tracking-wide border-b border-white/10 flex flex-wrap justify-between items-center max-w-7xl mx-auto md:px-8">
        <div className="flex items-center gap-2 text-brand-gold">
          <Shield className="w-4 h-4 text-brand-gold animate-pulse" />
          <span className="text-white">Session 2026-27 Registrations Open for NDA, CDS, AFCAT, SSB & XI-XII Foundation!</span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-slate-350 text-[11px] font-mono">
          <div className="flex items-center gap-2 border-r border-slate-800 pr-4">
            <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <a href="tel:+919314533083" className="hover:text-brand-gold transition-colors">+91-9314533083</a>
            <span className="text-slate-700">•</span>
            <a href="tel:+917023133083" className="hover:text-brand-gold transition-colors">+91-7023133083</a>
            <span className="text-slate-700">•</span>
            <a href="tel:+919414069455" className="hover:text-brand-gold transition-colors">+91-9414069455</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:axiomdefence@gmail.com" className="hover:text-brand-gold transition-colors">axiomdefence@gmail.com</a>
            <span className="text-slate-700">•</span>
            <a href="mailto:bhabhravinay@gmail.com" className="hover:text-brand-gold transition-colors">bhabhravinay@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Identity */}
          <button 
            id="brand-logo"
            onClick={() => { setActiveTab('home'); setIsOpen(false); }}
            className="flex items-center gap-3 py-1 scale-100 hover:scale-[1.02] cursor-pointer transition-all duration-300 text-left"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded bg-white overflow-hidden border-2 border-brand-gold shadow-lg">
              <img 
                src="https://static.wixstatic.com/media/14d0b9_3b8916359c0a4af08077cf4539b8c14c~mv2.png" 
                alt="Axiom Defence Academy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tighter uppercase leading-none text-white">AXIOM</span>
                <span className="font-bold text-[10px] tracking-[0.2em] bg-brand-gold/10 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/20">DEFENCE</span>
              </div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-semibold">Academy Jaipur</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium tracking-wide">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2.5 rounded transition-all duration-200 cursor-pointer text-xs uppercase tracking-widest relative ${
                    isActive 
                      ? 'text-brand-gold font-bold bg-white/5' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to Actions on Header */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/919314533083?text=Jai%20Hind%21%20I%20am%20interested%20in%20seeking%20admissions%20for%20Axiom%20Defence%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20"
              title="WhatsApp Inquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              id="header-btn-apply"
              onClick={onOpenEnquiry}
              className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded shadow transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center justify-center w-11 h-11 rounded border border-slate-700 bg-slate-800/10 text-slate-350 hover:text-white hover:bg-slate-800/50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-brand-navy-dark">
          <div className="px-4 py-6 space-y-2 max-w-md mx-auto">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-mobile-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 rounded-lg text-sm uppercase tracking-wider font-semibold flex items-center justify-between ${
                    isActive 
                      ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Shield className="w-4 h-4 text-brand-gold" />}
                </button>
              );
            })}
            <div className="pt-6 grid grid-cols-2 gap-3">
              <a
                href="tel:+919314533083"
                className="flex items-center justify-center gap-2 py-3 bg-brand-navy border border-white/10 rounded-lg text-xs font-bold text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-brand-gold" /> Call Direct
              </a>
              <button
                id="mobile-btn-enquiry"
                onClick={() => {
                  onOpenEnquiry();
                  setIsOpen(false);
                }}
                className="py-3 bg-brand-gold text-brand-navy font-bold rounded-lg text-xs uppercase tracking-wider text-center"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
