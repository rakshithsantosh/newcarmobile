"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
                       <h3 className="text-navy uppercase text-2xl font-bold mb-8">Our Headquarters</h3>
                       <div className="space-y-8">
                          <div className="flex gap-6">
                             <div className="w-12 h-12 shrink-0 bg-gray-light flex items-center justify-center text-gold">
                                <MapPin size={24} />
                             </div>
                             <div>
                                <h4 className="text-navy font-bold uppercase text-xs mb-2">Office Address</h4>
                                <p className="text-muted text-sm leading-relaxed">{SITE_CONFIG.address}</p>
                             </div>
                          </div>

                          <div className="flex gap-6">
                             <div className="w-12 h-12 shrink-0 bg-gray-light flex items-center justify-center text-gold">
                                <Phone size={24} />
                             </div>
                             <div>
                                <h4 className="text-navy font-bold uppercase text-xs mb-2">Direct Enquiries</h4>
                                <div className="space-y-1">
                                   <p className="text-navy font-bold text-lg">{SITE_CONFIG.phones[0].number}</p>
                                   <p className="text-muted text-xs tracking-widest">{SITE_CONFIG.phones[1].number} (Fax/Alt)</p>
                                </div>
                             </div>
                          </div>

                          <div className="flex gap-6">
                             <div className="w-12 h-12 shrink-0 bg-gray-light flex items-center justify-center text-gold">
                                <Mail size={24} />
                             </div>
                             <div>
                                <h4 className="text-navy font-bold uppercase text-xs mb-2">Email Channels</h4>
                                <p className="text-navy font-bold">{SITE_CONFIG.email}</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="p-8 bg-navy text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Clock size={100} />
                       </div>
                       <h4 className="text-gold font-black uppercase text-xs mb-4 italic leading-none">Operational Hours</h4>
                       <p className="text-xl font-bold mb-2">24 / 7 / 365</p>
                       <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">Always available for your emergency travel and fleet requirements.</p>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                 <div className="bg-gray-light p-10 md:p-14 shadow-xl border-t-4 border-gold">
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-12"
                      >
                         <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
                            <Send size={32} />
                         </div>
                         <h3 className="text-navy text-3xl font-bold uppercase mb-4">Message Received</h3>
                         <p className="text-muted leading-relaxed">Our concierge team will review your enquiry and get back to you within 60 minutes.</p>
                         <button 
                           onClick={() => setSubmitted(false)}
                           className="mt-10 text-gold font-black uppercase tracking-widest text-xs border-b border-gold pb-1"
                         >
                           Send Another Inquiry
                         </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Full Name</label>
                              <input required type="text" className="w-full bg-white border border-gray-medium p-4 text-xs font-bold focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Email Address</label>
                              <input required type="email" className="w-full bg-white border border-gray-medium p-4 text-xs font-bold focus:border-gold outline-none transition-colors" placeholder="john@company.com" />
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Phone Number</label>
                              <input required type="tel" className="w-full bg-white border border-gray-medium p-4 text-xs font-bold focus:border-gold outline-none transition-colors" placeholder="+91 000 000 0000" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Service Type</label>
                              <select className="w-full bg-white border border-gray-medium p-4 text-xs font-bold focus:border-gold outline-none transition-colors appearance-none">
                                 <option>Corporate Cabs</option>
                                 <option>Employee Transportation</option>
                                 <option>Premium Rentals</option>
                                 <option>Tourist Transport</option>
                              </select>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Your Inquiry</label>
                           <textarea required rows={5} className="w-full bg-white border border-gray-medium p-4 text-xs font-bold focus:border-gold outline-none transition-colors resize-none" placeholder="Describe your travel or fleet requirements..."></textarea>
                        </div>

                        <button type="submit" className="btn-gold w-full flex items-center justify-center gap-3">
                           Submit Inquiry <Send size={16} />
                        </button>
                      </form>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-medium relative">
         <div className="absolute inset-0 flex items-center justify-center text-navy/20 flex-col gap-4">
            <MapPin size={64} />
            <span className="text-xs font-black uppercase tracking-[0.5em]">Bangalore Center Operations MAP</span>
         </div>
         {/* Placeholder for real iframe */}
         <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.58,12.94,12,0/1280x500?access_token=pk.eyJ1IjoiYm90IiwiYSI6ImNrYmtvM2J0ZTAxYm0ycW10M2J0ZTAxYm0ifQ.5o5_7_0_0_0')] bg-cover opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer" />
      </section>

      {/* Direct WhatsApp Call */}
      <section className="py-20 bg-navy text-center">
         <div className="ncm-container flex flex-col items-center">
            <MessageSquare size={48} className="text-gold mb-6" />
            <h2 className="text-white uppercase mb-6">Immediate Assistance?</h2>
            <p className="text-white/60 mb-10 max-w-sm font-medium">Message our dispatch command center directly on WhatsApp for real-time rates and availability.</p>
            <a href={`https://wa.me/919845031627`} target="_blank" className="btn-gold !bg-[#25D366] !border-[#25D366] !shadow-[#25D366]/20">
               Click to WhatsApp
            </a>
         </div>
      </section>
    </main>
  );
};

export default ContactPage;
