"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FLEET } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ShowroomSlider = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % FLEET.length);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev - 1 + FLEET.length) % FLEET.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5000); // Rotate every 5 seconds
    return () => clearInterval(timer);
  }, [next, isHovered]);

  return (
    <section 
      id="showroom" 
      className="py-32 bg-[#F5F5F5] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ncm-container mb-20 text-center">
        <p className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6 italic">The Collection</p>
        <h2 className="text-navy uppercase tracking-tighter font-serif text-5xl md:text-7xl leading-none">Curation <br/> Excellence</h2>
      </div>

      <div className="relative flex items-center justify-center min-h-[650px]">
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 ncm-container flex justify-between z-30 pointer-events-none px-4 md:px-12">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-all pointer-events-auto"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-all pointer-events-auto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full max-w-7xl flex items-center justify-center h-[600px]">
          {FLEET.map((vehicle, i) => {
            // Logic for visible cards
            let position = i - index;
            if (position < -Math.floor(FLEET.length / 2)) position += FLEET.length;
            if (position > Math.floor(FLEET.length / 2)) position -= FLEET.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            if (!isVisible) return null;

            return (
              <motion.div
                key={vehicle.id}
                initial={false}
                animate={{
                  x: position * 420, // Increased spacing for 3-card layout
                  scale: isActive ? 1.2 : 0.8, // Focal center scaling
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 20 : 10,
                  filter: isActive ? "blur(0px)" : "blur(4px)",
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[300px] md:w-[450px] aspect-[3/4]"
              >
                <div className={`relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl bg-white group transition-all duration-700 ${isActive ? 'ring-1 ring-white/20' : ''}`}>
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-black/20' : 'bg-black/40'}`} />
                  
                  {/* Elegant Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <motion.h3 
                      animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0.4 }}
                      className="text-white font-light text-5xl md:text-8xl tracking-tighter lowercase font-serif"
                    >
                      {vehicle.name.split(' ')[0]}
                    </motion.h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.4 }}
                          className="mt-12 flex flex-col items-center"
                        >
                          <p className="text-white/80 text-[10px] uppercase font-black tracking-[0.4em] mb-10">{vehicle.tier} Class</p>
                          <Link 
                            href={`/fleet/${vehicle.id}`}
                            className="px-10 py-4 border border-white/40 rounded-full text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-glow"
                          >
                            Explore Curation
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-center items-center gap-4 mt-20">
        <div className="h-[2px] w-32 bg-navy/5 relative overflow-hidden">
           <motion.div 
             animate={{ x: `${(index / (FLEET.length - 1)) * 100}%` }}
             className="absolute inset-0 w-1/4 bg-accent rounded-full"
           />
        </div>
        <span className="text-[10px] font-black text-navy/40 uppercase tracking-widest">
          {String(index + 1).padStart(2, '0')} / {String(FLEET.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default ShowroomSlider;
