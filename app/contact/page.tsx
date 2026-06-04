"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Corporate Cabs",
    inquiry: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Service Type: ${formData.serviceType}\n\n${formData.inquiry}`
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", serviceType: "Corporate Cabs", inquiry: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div className="ncm-container relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-2xl"
           >
             <p className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Connect With Us</p>
             <h1 className="text-white uppercase mb-8">Let&apos;s Discuss Your <br/> Mobility Needs</h1>
             <p className="text-white/60 leading-relaxed font-medium">
               Our dedicated concierge team is available 24/7 to assist with your corporate bookings, airport transfers, or fleet management inquiries.
             </p>
           </motion.div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="ncm-container">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-5">
                 <div className="space-y-12">
                    <div>
                       <h3 className="text-navy uppercase text-3xl font-serif italic tracking-tight mb-8">Our Headquarters</h3>
                       <div className="space-y-8">
                          <div className="flex gap-6 group">
                             <div className="w-12 h-12 shrink-0 bg-background border border-navy/5 rounded-[2px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500">
                                <MapPin size={20} strokeWidth={1.5} />
                             </div>
                             <div>
                                <h4 className="text-navy/40 font-bold uppercase text-[9px] tracking-wider mb-2">Office Address</h4>
                                <p className="text-navy font-light leading-relaxed text-sm">{SITE_CONFIG.address}</p>
                             </div>
                          </div>

                          <div className="flex gap-6 group">
                             <div className="w-12 h-12 shrink-0 bg-background border border-navy/5 rounded-[2px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500">
                                <Phone size={20} strokeWidth={1.5} />
                             </div>
                             <div>
                                <h4 className="text-navy/40 font-bold uppercase text-[9px] tracking-wider mb-2">Direct Enquiries</h4>
                                <div className="space-y-1">
                                   <p className="text-navy font-serif italic text-lg tracking-tight">{SITE_CONFIG.phones[0].number}</p>
                                   <p className="text-text-muted text-[10px] tracking-widest uppercase">{SITE_CONFIG.phones[1].number} (Fax/Alt)</p>
                                </div>
                             </div>
                          </div>

                          <div className="flex gap-6 group">
                             <div className="w-12 h-12 shrink-0 bg-background border border-navy/5 rounded-[2px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500">
                                <Mail size={20} strokeWidth={1.5} />
                             </div>
                             <div>
                                <h4 className="text-navy/40 font-bold uppercase text-[9px] tracking-wider mb-2">Email Channels</h4>
                                <p className="text-navy font-serif italic text-lg tracking-tight group-hover:text-accent transition-colors">{SITE_CONFIG.email}</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="p-8 bg-navy text-white relative overflow-hidden rounded-[2px] border border-white/5 shadow-elite">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Clock size={100} />
                       </div>
                       <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 italic leading-none">Operational Hours</h4>
                       <p className="text-2xl font-serif italic mb-2">24 / 7 / 365</p>
                       <p className="text-white/50 text-[11px] font-light leading-relaxed max-w-[200px]">Always available for your emergency travel and fleet requirements.</p>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                 <div className="bg-white p-10 md:p-14 border border-navy/5 shadow-elite rounded-[2px]">
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-12"
                      >
                         <div className="w-20 h-20 bg-accent text-navy rounded-[2px] border border-white/10 flex items-center justify-center mb-8 shadow-elite">
                            <Send size={32} strokeWidth={1.5} />
                         </div>
                         <h3 className="text-navy text-3xl font-serif italic tracking-tight mb-4">Message Received</h3>
                         <p className="text-text-secondary text-sm font-light leading-relaxed">Our concierge team will review your enquiry and get back to you within 60 minutes.</p>
                         <button 
                           onClick={() => setSubmitted(false)}
                           className="mt-10 text-accent font-bold uppercase tracking-[0.3em] text-[10px] border-b border-accent pb-1 hover:text-navy transition-colors"
                         >
                           Send Another Inquiry
                         </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/40">Full Name</label>
                              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-background border border-navy/10 p-4 text-xs font-light rounded-[2px] focus:border-accent focus:bg-white outline-none transition-all duration-300" placeholder="John Doe" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/40">Email Address</label>
                              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-background border border-navy/10 p-4 text-xs font-light rounded-[2px] focus:border-accent focus:bg-white outline-none transition-all duration-300" placeholder="john@company.com" />
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/40">Phone Number</label>
                              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-background border border-navy/10 p-4 text-xs font-light rounded-[2px] focus:border-accent focus:bg-white outline-none transition-all duration-300" placeholder="+91 000 000 0000" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/40">Service Type</label>
                              <div className="relative">
                                 <select value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value})} className="w-full bg-background border border-navy/10 p-4 text-xs font-light rounded-[2px] focus:border-accent focus:bg-white outline-none transition-all duration-300 appearance-none">
                                    <option>Corporate Cabs</option>
                                    <option>Employee Transportation</option>
                                    <option>Premium Rentals</option>
                                    <option>Tourist Transport</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/40">Your Inquiry</label>
                           <textarea required rows={5} value={formData.inquiry} onChange={e => setFormData({...formData, inquiry: e.target.value})} className="w-full bg-background border border-navy/10 p-4 text-xs font-light rounded-[2px] focus:border-accent focus:bg-white outline-none transition-all duration-300 resize-none" placeholder="Describe your travel or fleet requirements..."></textarea>
                        </div>
                        
                        {error && <p className="text-xs text-red-500 font-bold">{error}</p>}

                        <button disabled={isSubmitting} type="submit" className="btn-accent w-full flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98] transition-transform disabled:opacity-50">
                           {isSubmitting ? "Submitting..." : "Submit Inquiry"} <Send size={14} strokeWidth={1.5} />
                        </button>
                      </form>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-background border-t border-navy/5 relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center text-navy/20 flex-col gap-4">
            <MapPin size={64} strokeWidth={1} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Bangalore Center Operations MAP</span>
         </div>
         {/* Placeholder for real iframe */}
         <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.58,12.94,12,0/1280x500?access_token=pk.eyJ1IjoiYm90IiwiYSI6ImNrYmtvM2J0ZTAxYm0ycW10M2J0ZTAxYm0ifQ.5o5_7_0_0_0')] bg-cover opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer" />
      </section>

      {/* Direct WhatsApp Call */}
      <section className="py-20 bg-navy text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
         <div className="ncm-container flex flex-col items-center relative z-10">
            <MessageSquare size={48} strokeWidth={1} className="text-accent mb-6" />
            <h2 className="text-white uppercase mb-6 tracking-tighter font-serif text-4xl md:text-5xl">Immediate Assistance?</h2>
            <p className="text-white/40 mb-10 max-w-sm text-sm font-light leading-relaxed">Message our dispatch command center directly on WhatsApp for real-time rates and availability.</p>
            <a href={`https://wa.me/919845031627`} target="_blank" className="btn-accent !bg-[#25D366] !border-[#25D366] !shadow-[#25D366]/20 !text-white active:scale-[0.98] cursor-pointer inline-flex items-center justify-center">
               Click to WhatsApp
            </a>
         </div>
      </section>
    </main>
  );
};

export default ContactPage;
