"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const sections = [
  {
    title: "Bookings & Confirmed Reservation",
    body: "All chauffeured and fleet bookings are confirmed subject to vehicle availability, verification of corporate credentials or guest identification, and alignment with credit terms."
  },
  {
    title: "Financial Framework & Security Deposits",
    body: "Standard rates, specialized airport transfers, and customized multi-route dispatch pricing are presented transparently prior to confirmation. Security deposits or corporate authorizations are finalized before vehicle release and settled post-journey."
  },
  {
    title: "Chauffeur Standards & Guest Protocol",
    body: "Our chauffeurs adhere to absolute professional protocol (including professional suits, certified defensive driving, and bilingual communication). Guests are expected to respect safety guidelines, state vehicle norms, and speed mandates."
  },
  {
    title: "Cancellation & Dispatch Alteration Policy",
    body: "Cancellation policies vary based on vehicle tiers (Standard, Premium, Luxury, Elite). Confirmations cancelled within 4 hours of dispatch window will attract a standard protocol fee."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-navy text-white pb-32 pt-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="ncm-container relative z-10">
        
        {/* Header */}
        <section className="mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl"
           >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-accent/20 border border-accent/30 flex items-center justify-center text-accent rounded-[2px]">
                    <Scale size={18} strokeWidth={1.5} />
                 </div>
                 <p className="text-gold font-black uppercase tracking-[0.4em] text-[10px] italic leading-none">
                   Legal Protocol
                 </p>
              </div>
              <h1 className="text-white uppercase mb-8 leading-[0.9] tracking-tighter">
                Terms of <br/> Service
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                The framework governing our luxury fleet operations, corporate alliances, and chauffeured protocol in the Bangalore market.
              </p>
           </motion.div>
        </section>

        {/* Content list */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="rounded-[2px] border border-white/10 bg-white/5 p-8 hover:border-accent hover:bg-white/[0.07] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                 <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-4">Protocol Section 0{idx + 1}</span>
                 <h2 className="text-white text-xl font-serif italic mb-4 tracking-tight">{section.title}</h2>
                 <p className="text-white/60 text-sm font-light leading-relaxed">{section.body}</p>
              </div>
            </motion.article>
          ))}
        </section>
        
      </div>
    </main>
  );
}
