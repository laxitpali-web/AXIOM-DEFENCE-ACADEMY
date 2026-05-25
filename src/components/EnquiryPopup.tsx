import React, { useState } from 'react';
import { X, Send, Shield, CheckCircle } from 'lucide-react';

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryPopup({ isOpen, onClose }: EnquiryPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'NDA',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [popupError, setPopupError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setPopupError('Kindly fill in both your Name and active Mobile number.');
      return;
    }
    setPopupError('');
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-brand-navy-dark/80 p-4 backdrop-blur-sm">
      {/* Background shade closer */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-white rounded-2xl overflow-hidden max-w-md w-full relative z-10 border border-slate-200 shadow-2xl">
        <button 
          id="pop-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-brand-navy">Seat Reserved Successfully</h3>
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                Jai Hind! We have successfully registered your inquiry. Our senior instructor will call you on <strong className="text-brand-navy font-mono font-bold">{formData.phone}</strong> shortly to answer your questions and confirm your trial seats.
              </p>
            </div>
            <button
              id="pop-reset-btn"
              onClick={() => {
                setSuccess(false);
                setFormData({ name: '', phone: '', course: 'NDA', message: '' });
                onClose();
              }}
              className="w-full py-3 bg-brand-navy hover:bg-brand-navy-dark text-brand-gold font-bold text-xs rounded uppercase tracking-wider font-mono shadow border border-brand-gold/30 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="text-center border-b border-slate-105 pb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-brand-navy text-[10px] font-mono font-bold uppercase tracking-wider mb-2 border border-brand-navy/10">
                <Shield className="w-3 h-3 text-brand-gold fill-brand-gold/15" />
                <span>ADMISSION SESSION 2026-27</span>
              </div>
              <h3 className="text-xl font-serif font-black text-brand-navy">Book Free 2-Day Trial Seat</h3>
              <p className="text-xs text-slate-500 mt-1 font-sans">Experience senior lectures directly in Vaishali Nagar, Jaipur.</p>
            </div>

            {popupError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-sans">
                {popupError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input name */}
              <div className="space-y-1">
                <label htmlFor="pop-name" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">STUDENT'S FULL NAME *</label>
                <input
                   id="pop-name"
                  type="text"
                  required
                  placeholder="Enter candidate's name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-brand-gold outline-none bg-slate-50 focus:bg-white text-slate-900 font-sans"
                />
              </div>

              {/* Input Phone */}
              <div className="space-y-1">
                <label htmlFor="pop-phone" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">MOBILE PHONE NUMBER *</label>
                <input
                  id="pop-phone"
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-brand-gold outline-none bg-slate-50 focus:bg-white text-slate-900 font-sans"
                />
              </div>

              {/* Input Course selection */}
              <div className="space-y-1">
                <label htmlFor="pop-course" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">TARGET EXAM STREAM</label>
                <select
                  id="pop-course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-brand-gold outline-none bg-slate-50 focus:bg-white text-slate-900 font-sans"
                >
                  <option value="NDA">NDA (National Defence Academy, UPSC)</option>
                  <option value="CDS">CDS (IMA, OTA, NA, AFA)</option>
                  <option value="AFCAT">AFCAT (Air force Common Entry)</option>
                  <option value="SSB">SSB Coaching (14-Day Intensive Boot-camp)</option>
                </select>
              </div>

              {/* Msg optional */}
              <div className="space-y-1">
                <label htmlFor="pop-message" className="text-[10px] font-mono text-slate-400 font-bold uppercase block">Notes (Optional)</label>
                <input
                  id="pop-message"
                  type="text"
                  placeholder="e.g. need hostel info, medical checklist"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-brand-gold outline-none bg-slate-50 focus:bg-white text-slate-900 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  id="pop-submit"
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Book 2-Day Free Trial
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
