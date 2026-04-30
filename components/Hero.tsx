"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Award, Users, ShieldCheck } from "lucide-react";

const images = [
  "https://newcarmobile.in/wp-content/uploads/2024/04/2017-Mercedes-Benz-GLC-Class-2016-Mercedes-Benz-GLC.png",
  "https://newcarmobile.in/wp-content/uploads/2024/04/Toyota-Fortuner-SUV-Toyota-Fortuner-Toyota-Hilux-Car-Toyota-Corolla-tuning-vehicle-transport-metal.png",
  "https://newcarmobile.in/wp-content/uploads/2024/12/9600_15m_sleeper_FR_01a_hires-nbg-e1736088203435.avif"
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/30 via-transparent to-navy/40" />
      <div className="absolute inset-0 z-10 bg-navy/20" />

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
            className="text-white tracking-tight leading-[1.05] drop-shadow-2xl text-6xl md:text-8xl lg:text-[7rem]"
          >
            Arrive On Time.<br/>
            In Style.<br/>
            <span className="text-accent italic font-normal">Every Time.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-24 h-[2px] bg-accent my-10" />

          {/* Subheading - Inter (Sans-Serif) */}
          <motion.p variants={itemVariants} className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl font-sans drop-shadow-md">
            Premium chauffeur experiences engineered for execution. Seamless airport transfers, dedicated corporate travel, and elite event transportation across Bangalore.
          </motion.p>

          {/* Action Area */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4">
            <button className="btn-accent group flex items-center gap-4 !px-10 !py-5 text-sm tracking-[0.2em] uppercase shadow-glow hover:shadow-[0_20px_50px_rgba(0,212,165,0.4)]">
              Reserve Now
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="glass-panel text-white hover:bg-white hover:text-navy px-10 py-5 text-sm tracking-[0.2em] uppercase font-bold transition-all rounded-xl border border-white/20 hover:shadow-2xl">
              The Fleet
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
