"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="section-py bg-white">
      <div className="ncm-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Social Proof</p>
            <h2 className="text-navy uppercase">Trusted By Leaders</h2>
            <p className="text-muted mt-6 max-w-md">Hear from our corporate partners and elite travelers who choose NCM for their movement across Bangalore.</p>
          </div>
          <div className="hidden lg:flex gap-4">
             <div className="w-12 h-1 bg-gold rounded-full" />
             <div className="w-4 h-1 bg-gray-medium rounded-full" />
             <div className="w-4 h-1 bg-gray-medium rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-gray-light border-l-4 border-gold relative"
            >
              <Quote className="absolute top-10 right-10 text-gold/10" size={80} />
              <div className="relative z-10">
                <p className="text-navy text-lg font-bold italic leading-relaxed mb-8">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-navy font-black uppercase text-sm">{t.name}</h4>
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
