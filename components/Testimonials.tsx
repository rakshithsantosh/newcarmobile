"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
        <div className="text-center mb-20">
          <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Voices of Excellence</p>
          <h2 className="text-navy uppercase tracking-tight">Trusted Partnerships</h2>
        </div>

        {/* Bespoke Carousel Layout */}
        <div 
          className="flex flex-col lg:flex-row bg-white shadow-lift border border-gray-medium rounded-3xl overflow-hidden group/carousel relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Anchored Logos */}
          <div className="w-full lg:w-1/3 bg-navy p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
            
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center lg:items-start gap-12 py-10">
              {CLIENTS.map((client, i) => (
                <div key={i} className="text-xl md:text-2xl font-black text-white/20 tracking-[0.3em] hover:text-accent hover:scale-110 hover:-translate-y-2 transition-all duration-700 cursor-pointer drop-shadow-sm font-serif italic">
                  {client}
                </div>
              ))}
            </div>
            
            <div className="absolute top-0 right-0 h-full w-48 bg-gradient-to-l from-navy to-transparent hidden lg:block" />
          </div>

          {/* Active Testimonial Pane */}
          <div className="w-full lg:w-2/3 p-10 md:p-16 relative flex flex-col">
            
            <div className="flex-1 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={current}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                >
                  <Quote className="text-accent/20 mb-10 w-20 h-20" strokeWidth={0.5} />
                  <p className="text-navy text-2xl md:text-4xl lg:text-5xl font-medium italic leading-[1.3] tracking-tight font-serif">
                    &quot;{TESTIMONIALS[current].text}&quot;
                  </p>
                  
                  <div className="mt-12 flex items-center gap-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-[3px] border-gold p-1 bg-white shadow-xl">
                      <Image 
                        src={TESTIMONIALS[current].avatar} 
                        alt={TESTIMONIALS[current].name} 
                        fill
                        className="object-cover rounded-full" 
                      />
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
             <div className="mt-12 flex items-center justify-between border-t border-gray-lighter pt-12">
                <div className="flex gap-6">
                  <button onClick={prev} className="w-16 h-16 rounded-xl bg-gray-light flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:shadow-2xl transition-all hover:scale-110">
                     <ChevronLeft size={28} className="hover:-translate-x-2 transition-transform" />
                  </button>
                  <button onClick={next} className="w-16 h-16 rounded-xl bg-gray-light flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:shadow-2xl transition-all hover:scale-110">
                     <ChevronRight size={28} className="hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                <div className="flex-1 max-w-sm ml-12 h-[1px] bg-gray-medium rounded-full overflow-hidden">
                  <motion.div 
                    key={current + (isPaused ? "-paused" : "")}
                    initial={{ width: isPaused ? undefined : "0%" }}
                    animate={{ width: isPaused ? undefined : "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                    className="h-full bg-accent shadow-[0_0_20px_rgba(0,212,165,0.8)]"
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
