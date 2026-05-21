"use client";

import React from "react";
import FleetGrid from "@/components/FleetGrid";
import { FLEET_CATEGORIES } from "@/lib/data";
import { motion } from "framer-motion";

const FleetPage = () => {
  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
        <div className="ncm-container relative z-10 text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <p className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 italic">The Showroom</p>
             <h1 className="text-white uppercase mb-8">Our Elite Fleet</h1>
             <p className="text-white/60 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
               A meticulously curated collection of luxury sedans, corporate MPVs, and premium group carriers. Every vehicle in our fleet is subject to 48-point safety checks and daily sanitization protocols.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Filter Intro / Quick Links */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="ncm-container">
           <div className="flex flex-wrap items-center justify-center gap-10 text-[9px] font-bold uppercase tracking-[0.25em] text-navy">
              <span className="text-gold italic font-serif tracking-[0.1em]">Protocol Filters:</span>
              <a href="#corporate" className="hover:text-accent transition-colors">Corporate Cabs</a>
              <a href="#tourist" className="hover:text-accent transition-colors">Tourist Transport</a>
              <a href="#premium" className="hover:text-accent transition-colors">Premium Fleet</a>
           </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section-py bg-background">
        <div className="ncm-container">
          {FLEET_CATEGORIES.map((cat, i) => (
            <div key={cat.id} id={cat.id} className={i > 0 ? "mt-32" : ""}>
               <div className="flex items-center gap-6 mb-16">
                  <h2 className="text-navy uppercase text-xl lg:text-2xl font-serif italic tracking-tight">{cat.title}</h2>
                  <div className="flex-1 h-[1px] bg-gray-200/50" />
               </div>
               <FleetGrid category={cat.id} />
            </div>
          ))}
        </div>
      </section>

      {/* Policy Section */}
      <section className="section-py bg-white border-t border-gray-100">
        <div className="ncm-container">
           <div className="bg-background p-12 lg:p-16 border border-gray-100/60 rounded-[2px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                 <div>
                    <h4 className="text-navy font-serif italic text-xl mb-4">Sanitization Protocol</h4>
                    <p className="text-text-secondary font-light text-sm leading-relaxed">Every vehicle undergoes a meticulous deep-cleaning cycle after every single journey with hospital-grade sanitization agents.</p>
                 </div>
                 <div>
                    <h4 className="text-navy font-serif italic text-xl mb-4">Professional Chauffeur standards</h4>
                    <p className="text-text-secondary font-light text-sm leading-relaxed">Rigorous background checking, professional suit protocol, and certified elite customer coordination training.</p>
                 </div>
                 <div>
                    <h4 className="text-navy font-serif italic text-xl mb-4">Punctuality DNA</h4>
                    <p className="text-text-secondary font-light text-sm leading-relaxed">A strict standard of arriving 15 minutes prior to scheduled flight or transit, ensuring complete peace of mind.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default FleetPage;
