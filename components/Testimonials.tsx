"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = React.useCallback(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), []);
  const prev = React.useCallback(() => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="ncm-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Social Proof</p>
            <h2 className="text-navy uppercase">Trusted By Leaders</h2>
            <p className="text-muted mt-6 max-w-md">Hear from our corporate partners and elite travelers who choose NCM for their movement across Bangalore.</p>
          </div>
          <div className="hidden lg:flex gap-4">
             <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-medium flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <ChevronLeft size={20} />
             </button>
             <button onClick={next} className="w-12 h-12 rounded-full border border-gray-medium flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="p-10 md:p-16 bg-gray-light border-l-4 border-gold relative shadow-xl"
            >
              <Quote className="absolute top-10 right-10 text-gold/10" size={100} />
              <div className="relative z-10">
                <p className="text-navy text-xl md:text-2xl font-bold italic leading-relaxed mb-8">
                  &quot;{TESTIMONIALS[current].text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold flex-shrink-0 bg-white">
                    <img src={TESTIMONIALS[current].avatar} alt={TESTIMONIALS[current].name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-navy font-black uppercase text-sm md:text-base">{TESTIMONIALS[current].name}</h4>
                    <p className="text-gold text-xs font-black uppercase tracking-widest">{TESTIMONIALS[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
