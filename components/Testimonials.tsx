"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 8000;

  const next = React.useCallback(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), []);
  const prev = React.useCallback(() => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, DURATION);
    return () => clearInterval(timer);
  }, [next, isPaused, current]);

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="section-py bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="ncm-container">
        
        {/* Header */}
        <div className="text-center mb-24">
          <p className="caption mb-6">Client Experience</p>
          <h2 className="text-navy uppercase tracking-tighter font-serif text-5xl md:text-7xl">Voices of <br/> Distinction</h2>
        </div>

        {/* Simplified Testimonial Pane */}
        <div 
          className="max-w-5xl mx-auto surface-premium p-12 md:p-24 relative flex flex-col group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex-1 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote className="text-accent/10 mb-12 w-20 h-20" strokeWidth={0.5} />
                <p className="text-navy text-2xl md:text-4xl lg:text-5xl font-medium italic leading-tight tracking-tight font-serif mb-16">
                  &quot;{TESTIMONIALS[current].text}&quot;
                </p>
                
                <div className="flex items-center gap-8">
                  <div className="relative w-20 h-20 rounded-full border-4 border-accent p-1 bg-white shadow-xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-navy flex items-center justify-center text-white font-black text-xl tracking-tighter">
                       {getInitials(TESTIMONIALS[current].name)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-navy font-black uppercase text-xl tracking-tight mb-1">{TESTIMONIALS[current].name}</h4>
                    <p className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">{TESTIMONIALS[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

           {/* Custom Navigation & Progress Bar */}
           <div className="mt-20 flex items-center justify-between border-t border-gray-100 pt-12">
              <div className="flex gap-4">
                <button onClick={prev} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                   <ChevronRight size={20} />
                </button>
              </div>
              
              <div className="flex-1 max-w-xs mx-12 h-[2px] bg-gray-100 rounded-full overflow-hidden hidden md:block">
                <motion.div 
                  key={current + (isPaused ? "-paused" : "")}
                  initial={{ width: isPaused ? undefined : "0%" }}
                  animate={{ width: isPaused ? undefined : "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                  className="h-full bg-accent"
                />
              </div>
             
             <p className="text-navy/20 font-black tracking-[0.4em] text-[10px] uppercase">
               0{current + 1} / 0{TESTIMONIALS.length}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
