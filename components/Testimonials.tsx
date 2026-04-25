"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CLIENTS = ["INFOSYS", "WIPRO", "ACCENTURE", "GOOGLE", "PHILIPS"];

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

  return (
    <section className="section-py bg-gray-light border-t border-gray-medium overflow-hidden">
      <div className="ncm-container">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Social Proof</p>
          <h2 className="text-navy uppercase">Trusted By Leaders</h2>
        </div>

        {/* Bespoke Carousel Layout */}
        <div 
          className="flex flex-col lg:flex-row gap-12 bg-white shadow-[0_30px_60px_rgba(10,37,64,0.05)] border border-gray-medium rounded-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Anchored Logos */}
          <div className="w-full lg:w-1/3 bg-navy p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
            <div className="relative z-10 flex flex-col items-center lg:items-start gap-12 py-10 opacity-40">
              {CLIENTS.map((client, i) => (
                <div key={i} className="text-xl md:text-2xl font-black text-white/50 tracking-widest hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                  {client}
                </div>
              ))}
            </div>
            
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-navy to-transparent hidden lg:block" />
          </div>

          {/* Active Testimonial Pane */}
          <div className="w-full lg:w-2/3 p-10 md:p-16 relative flex flex-col">
            <Quote className="absolute top-10 right-10 text-gray-medium/50" size={120} />
            
            <div className="flex-1 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={current}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                  className="mb-12"
                >
                  <p className="text-navy text-2xl md:text-3xl lg:text-4xl font-bold italic leading-[1.6] tracking-tight">
                    &quot;{TESTIMONIALS[current].text}&quot;
                  </p>
                  
                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-gold p-1 bg-white shadow-xl">
                      <img src={TESTIMONIALS[current].avatar} alt={TESTIMONIALS[current].name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-navy font-black uppercase text-lg tracking-tight mb-1">{TESTIMONIALS[current].name}</h4>
                      <p className="text-gold text-xs font-black uppercase tracking-widest">{TESTIMONIALS[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Custom Navigation & Progress Bar */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-medium pt-8">
               <div className="flex gap-4">
                 <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-medium flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all hover:scale-105 shadow-sm">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={next} className="w-12 h-12 rounded-full border border-gray-medium flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all hover:scale-105 shadow-sm">
                    <ChevronRight size={20} />
                 </button>
               </div>
               
               <div className="flex-1 max-w-sm ml-8 h-1 bg-gray-medium rounded-full overflow-hidden">
                 <motion.div 
                   key={current + (isPaused ? "-paused" : "")}
                   initial={{ width: isPaused ? undefined : "0%" }}
                   animate={{ width: isPaused ? undefined : "100%" }}
                   transition={{ duration: DURATION / 1000, ease: "linear" }}
                   className="h-full bg-gold rounded-full"
                 />
               </div>
               
               <p className="ml-6 text-navy/50 font-black tracking-widest text-xs hidden sm:block">
                 0{current + 1} / 0{TESTIMONIALS.length}
               </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
