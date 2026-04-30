"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Award, Users, ShieldCheck } from "lucide-react";

const images = [
  "/images/fleet/mercedes-glc.png",
  "/images/fleet/toyota-fortuner.png",
  "/images/fleet/volvo-bus.avif"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // 7 seconds per slide
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen w-full bg-navy overflow-hidden flex items-center pt-32 pb-48">
      
      {/* Background Images Crossfade with Parallax Zoom */}
      <AnimatePresence mode="popLayout">
        <motion.div
           key={current}
           initial={{ opacity: 0, scale: 1.1, x: 20 }}
           animate={{ opacity: 1, scale: 1.05, x: 0 }}
           exit={{ opacity: 0, scale: 1, x: -20 }}
           transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
           className="absolute inset-0 z-0"
        >
          <Image 
            src={images[current]} 
            alt="Luxury Chauffeur"
            fill
            priority
            className="object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Advanced Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      <div className="absolute inset-0 z-10 bg-navy/30" />

      {/* Content Container (Left-aligned, Vertically Centered) */}
      <div className="ncm-container relative z-20 h-full flex flex-col justify-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl transform translate-y-8"
        >
          {/* Headline - Playfair Display (Serif) */}
          <motion.h1 
            variants={itemVariants}
            className="text-white tracking-tighter leading-[0.85] drop-shadow-2xl text-7xl md:text-9xl lg:text-[11rem] font-serif uppercase"
          >
            Heritage <br/>
            Mobility.<br/>
            <span className="text-gold italic font-normal text-4xl md:text-6xl lg:text-[5rem] tracking-tight block mt-8 lowercase first-letter:uppercase font-serif">Redefined for the elite.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-24 h-[2px] bg-accent my-10" />

          {/* Subheading - Inter (Sans-Serif) */}
          <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-xl font-sans drop-shadow-md tracking-wide">
            30 years of precision-engineered chauffeur experiences. Seamless executive travel, airport transfers, and elite fleet management for the discerning professional.
          </motion.p>

          {/* Action Area */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
            <button className="btn-accent group flex items-center gap-6 !px-12 !py-6 text-[10px] tracking-[0.4em] uppercase shadow-[0_20px_50px_rgba(0,212,165,0.3)] hover:shadow-[0_30px_70px_rgba(0,212,165,0.5)] !rounded-sm transition-all duration-500">
              SECURE YOUR JOURNEY
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="text-white/60 hover:text-gold px-4 py-2 text-[10px] tracking-[0.5em] uppercase font-black transition-all border-b border-white/10 hover:border-gold">
              VIEW THE SHOWROOM
            </button>
          </motion.div>
          
          {/* Microcopy under CTAs */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-16 text-white/60">
            <Clock size={16} className="text-accent" />
            <p className="text-[11px] font-black tracking-[0.3em] uppercase mt-0.5">
              Bangalore&apos;s Finest &bull; Reliable &bull; Professional
            </p>
          </motion.div>

          {/* Trust Signals Horizontal Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-white/10 mt-16">
            
            <div className="flex items-center gap-4 group/stat">
              <Award size={28} strokeWidth={1} className="text-accent group-hover/stat:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Excellence Since</span>
                <span className="text-white text-lg font-medium tracking-tight">1994</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group/stat">
              <Users size={28} strokeWidth={1} className="text-accent group-hover/stat:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Trusted by</span>
                <span className="text-white text-lg font-medium tracking-tight">5,000+ Partners</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group/stat">
              <ShieldCheck size={28} strokeWidth={1} className="text-accent group-hover/stat:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Professional</span>
                <span className="text-white text-lg font-medium tracking-tight">Vetted Staff</span>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>

      {/* Seamless blend to the background section below */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
