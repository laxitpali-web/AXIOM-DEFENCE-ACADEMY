import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Check, Send, ArrowRight } from 'lucide-react';

export default function ContactSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'NDA',
    address: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please fill out your Name and Phone number so our officer can reach back to you.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Block */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-navy/10 text-brand-navy text-xs font-mono font-bold tracking-widest uppercase border border-brand-navy/10">
              <Mail className="w-4 h-4 text-brand-gold shrink-0 fill-brand-gold/10" />
              <span>ADMISSION HELPDESK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-brand-navy tracking-tight">
              Connect With Admissions Desk
            </h2>
            <p className="text-slate-650 text-base font-sans leading-relaxed">
              Have questions about fees, timings, hostel availability, or standard medical eligibility? Leave your details below, or call our admissions lines directly.
            </p>
          </div>
        )}

        {/* Form and Contact Detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info and details panel */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-brand-navy">Axiom Defence Academy Jaipur</h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Our administrative team is available daily from 08:30 AM to 07:00 PM for campus tours and physical admissions counseling.
              </p>

              <div className="space-y-4 font-sans text-xs sm:text-sm">
                {/* Physical address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-brand-navy/5 text-brand-navy shrink-0 border border-brand-navy/10">
                    <MapPin className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-brand-gold-dark font-bold block">ACADEMY CAMPUS LOCATION</span>
                    <strong className="text-brand-navy block mt-0.5">24-A, Veer Vihar Colony, Queen’s Road,</strong>
                    <span className="text-slate-650 block text-xs">Vaishali Nagar, Jaipur, Rajasthan (302021)</span>
                  </div>
                </div>

                {/* Direct Phones list */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-brand-navy/5 text-brand-navy shrink-0 border border-brand-navy/10">
                    <Phone className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-brand-gold-dark font-bold block">DIRECT CALL HELPLINES:</span>
                    <div className="space-y-1 mt-0.5">
                      <a href="tel:+919314533083" className="block text-brand-navy font-bold hover:underline">+91-9314533083</a>
                      <a href="tel:+917023133083" className="block text-brand-navy font-bold hover:underline">+91-7023133083</a>
                      <a href="tel:+919414069455" className="block text-slate-650 text-xs hover:underline">Alternative Desk: +91-9414069455</a>
                    </div>
                  </div>
                </div>

                {/* Direct Email list */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-brand-navy/5 text-brand-navy shrink-0 border border-brand-navy/10">
                    <Mail className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-brand-gold-dark font-bold block">EMAIL CHANNELS:</span>
                    <div className="space-y-1 mt-0.5 text-xs">
                      <a href="mailto:axiomdefence@gmail.com" className="block text-brand-navy font-semibold hover:underline">axiomdefence@gmail.com</a>
                      <a href="mailto:bhabhravinay@gmail.com" className="block text-slate-500 text-xs hover:underline">Founder: bhabhravinay@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct links actions */}
              <div className="pt-6 border-t border-slate-100">
                <a 
                  href="https://wa.me/919314533083?text=Jai%20Hind%21%20I%20am%20seeking%20admissions%20at%20Axiom%20Jaipur%20campus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Custom Interactive Faux Google Map Frame */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm overflow-hidden space-y-3">
              <div className="flex justify-between items-center px-1 font-mono text-[10px] uppercase text-slate-400 font-bold">
                <span>Jaipur Route Directions</span>
                <span className="text-emerald-500 font-black">● Live Location</span>
              </div>
              <div className="bg-slate-200 w-full h-44 rounded-lg relative overflow-hidden flex flex-col items-center justify-center text-center p-4 border border-slate-300">
                {/* Visual Map Replica grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40 z-0" />
                
                {/* Visual coordinates flag */}
                <div className="relative z-10 space-y-2">
                  <div className="p-2.5 bg-brand-navy text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center mx-auto border border-white animate-bounce">
                    <MapPin className="w-5 h-5 text-brand-gold fill-brand-gold/10" />
                  </div>
                  <p className="font-bold text-slate-900 text-xs font-sans">Axiom Campus, Vaishali Nagar</p>
                  <span className="text-[10px] text-slate-500 font-mono">Near Queen’s Road Crossing, Veer Vihar Colony</span>
                </div>

                <a 
                  href="https://maps.google.com/?q=Axiom+Defence+Academy+Queen+Road+Vaishali+Nagar+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 bg-brand-navy text-brand-gold hover:bg-brand-navy-dark rounded-md text-[10px] font-mono tracking-wider shadow backdrop-blur border border-white/10 font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  Open in Maps <ArrowRight className="w-3 h-3 text-brand-gold" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Admission Inquiry form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto border border-emerald-300">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-brand-navy">Inquiry Received Successfully</h3>
                  <p className="text-xs text-slate-605 max-w-md mx-auto leading-relaxed font-sans">
                    Jai Hind! Thank you for contacting Axiom Defence Academy. Our senior admissions officer will call you back on <strong className="text-brand-navy font-mono font-bold">{formData.phone}</strong> within the next 2 hours to walk you through syllabus details, trial classes, and fee structures.
                  </p>
                </div>
                <button
                  id="contact-form-reset"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', course: 'NDA', address: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy">Secure Your Session 2026-27 Seat</h3>
                  <p className="text-xs text-slate-550 mt-1">Fill out your direct credentials. No payment or cards required to request syllabus.</p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-sans">
                    {errorMsg}
                  </div>
                )}

                {/* Input 1: Name */}
                <div className="space-y-1 text-left">
                  <label htmlFor="contact-name" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">YOUR NAME *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter candidate's full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                  />
                </div>

                {/* Input grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-phone" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">PHONE NUMBER *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-email" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">EMAIL ADDRESS</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. candidate@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                    />
                  </div>
                </div>

                {/* Course to join and address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-course" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">COURSE STREAM REQUIRED</label>
                    <select
                      id="contact-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                    >
                      <option value="NDA">NDA (XI-XII Foundation integrated)</option>
                      <option value="CDS">CDS (Graduate Exam Preparation)</option>
                      <option value="AFCAT">AFCAT (Air force entry)</option>
                      <option value="SSB">SSB Interview (14-Day Intensive)</option>
                    </select>
                  </div>

                  {/* Home city */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-address" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">Candidate Home City</label>
                    <input
                      id="contact-address"
                      type="text"
                      placeholder="e.g. Jaipur, Ajmer, Churu..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                    />
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1 text-left">
                  <label htmlFor="contact-message" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">Message (Optional)</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Mention custom prerequisites, e.g., hostel requirement, medical fitness query, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-brand-gold bg-slate-50 focus:bg-white outline-none text-slate-900"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  id="contact-form-submit"
                  type="submit"
                  className="w-full py-4 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-extrabold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-brand-navy" />
                  <span>Submit admission inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
