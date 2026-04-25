"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowDown } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "PREMIUM CHAUFFEUR SERVICES",
    subtitle: "Experience luxury, punctuality, and professionalism in Bangalore's most elite fleet.",
    cta: "Explore Our Fleet"
  },
  {
    image: "/images/fleet/toyota-crysta.jpg",
    title: "CORPORATE FLEET MANAGEMENT",
    subtitle: "Dedicated travel solutions for global businesses and employee transportation.",
    cta: "Manage My Fleet"
  },
  {
    image: "/images/fleet/mercedes-s.jpg",
    title: "ELITE TRAVEL REDEFINED",
    subtitle: "Luxury sedans and premium MPVs for executive missions and airport concierge.",
    cta: "Book Elite Class"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent z-10" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title}
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Container (Contained) */}
      <div className="relative z-20 h-full ncm-container flex flex-col justify-center">
        <motion.div
          key={current + "content"}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1.5 px-4 bg-gold text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-sm shadow-xl">
            Established 1994
          </span>
          <h1 className="text-white mb-6 uppercase tracking-tight">
            {slides[current].title}
          </h1>
          <p className="text-white/80 max-w-xl mb-10 leading-relaxed">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-gold">
              {slides[current].cta}
            </button>
            <button className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy">
              Contact Concierge
            </button>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </div>

      {/* Progress Dots */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
         {slides.map((_, i) => (
           <div 
             key={i} 
             onClick={() => setCurrent(i)}
             className={`w-1.5 h-12 rounded-full transition-all cursor-pointer ${i === current ? 'bg-gold' : 'bg-white/20 hover:bg-white/40'}`} 
           />
         ))}
      </div>
    </section>
  );
};

export default Hero;
