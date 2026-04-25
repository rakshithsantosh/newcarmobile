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
      <section className="py-8 bg-gray-light border-b border-gray-medium">
        <div className="ncm-container">
           <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-navy">
              <span className="text-gold italic">Quick Filter:</span>
              <a href="#corporate" className="hover:text-gold transition-colors">Corporate Cabs</a>
              <a href="#tourist" className="hover:text-gold transition-colors">Tourist Transport</a>
              <a href="#premium" className="hover:text-gold transition-colors">Premium Fleet</a>
           </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section-py bg-white">
        <div className="ncm-container">
          {FLEET_CATEGORIES.map((cat, i) => (
            <div key={cat.id} id={cat.id} className={i > 0 ? "mt-24" : ""}>
               <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-navy uppercase text-2xl md:text-3xl font-bold">{cat.title}</h2>
                  <div className="flex-1 h-[1px] bg-gray-medium" />
               </div>
               <FleetGrid />
            </div>
          ))}
        </div>
      </section>

      {/* Policy Section */}
      <section className="section-py bg-gray-light border-t border-gray-medium">
        <div className="ncm-container">
           <div className="bg-white p-12 shadow-xl border-t-4 border-gold">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 <div>
                    <h4 className="text-navy font-bold uppercase mb-4">Sanitization Policy</h4>
                    <p className="text-muted text-sm leading-relaxed">Every vehicle is deep-cleaned after every single trip with hospital-grade disinfectants.</p>
                 </div>
                 <div>
                    <h4 className="text-navy font-bold uppercase mb-4">Chauffeur Standards</h4>
                    <p className="text-muted text-sm leading-relaxed">Police-verified, uniformed professionals with mandatory alcohol-testing before every shift.</p>
                 </div>
                 <div>
                    <h4 className="text-navy font-bold uppercase mb-4">Punctuality Promise</h4>
                    <p className="text-muted text-sm leading-relaxed">Chauffeur arrives 15 minutes prior to scheduled pickup for a zero-stress experience.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default FleetPage;
