"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import QuickQuoteBar from "./QuickQuoteBar";
import { ArrowRight } from "lucide-react";

const carSlides = [
  {
    image: "/images/fleet/mercedes-glc.png",
    name: "Mercedes GLC",
    tier: "Elite Tier"
  },
  {
    image: "/images/fleet/bmw-sedan.png",
    name: "BMW 7 Series",
    tier: "Prestige Tier"
  },
  {
    image: "/images/fleet/audi-q7.png",
    name: "Audi Q7",
    tier: "Luxury Tier"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center pt-24">
      {/* Editorial Background Element */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-10 lg:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white z-10" />
        <Image
          src="/images/cityscape-bg.png"
          alt="Luxury Cityscape"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="ncm-container relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Content Left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="caption mb-6">Established 1994</p>
              <h1 className="mb-8 max-w-2xl">
                The Art of <br/>
                <span className="text-accent italic font-serif">Executive</span> Mobility.
              </h1>
              <p className="body text-text-secondary mb-12 max-w-lg">
                Experience Bangalore&apos;s premier chauffeur-driven fleet. Where every kilometer is engineered for absolute comfort and corporate precision.
              </p>
              
              {/* Integrated Search */}
              <div className="w-full max-w-xl mb-12">
                <QuickQuoteBar />
              </div>

              <div className="flex items-center gap-8 mt-4">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                         <Image src={`/images/testimonials/avatar-${i}.jpg`} alt="Client" width={48} height={48} className="object-cover" />
                      </div>
                    ))}
                 </div>
                 <div className="text-sm">
                    <p className="font-bold text-navy">3.6M+ Successful Trips</p>
                    <p className="text-text-muted">Trusted by Global Tech Leaders</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Car Slider Right */}
          <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <div className="absolute top-0 left-0 lg:left-20">
                  <p className="caption text-accent/40">{carSlides[current].tier}</p>
                  <h3 className="text-navy/20 font-serif italic text-4xl lg:text-6xl">{carSlides[current].name}</h3>
                </div>
                
                <Image
                  src={carSlides[current].image}
                  alt={carSlides[current].name}
                  width={900}
                  height={600}
                  priority
                  className="object-contain drop-shadow-[0_32px_64px_rgba(0,31,63,0.15)] mt-12"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Slide Navigation */}
            <div className="absolute bottom-0 right-0 flex gap-4">
               {carSlides.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrent(idx)}
                   className={`h-1 transition-all duration-700 ${current === idx ? "w-12 bg-accent" : "w-6 bg-gray-200"}`}
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
