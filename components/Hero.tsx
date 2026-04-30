"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Award, Users, UserCheck, ShieldCheck } from "lucide-react";

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
    <section className="relative min-h-[100svh] w-full bg-navy overflow-hidden flex items-center pt-32 pb-48">
      
      {/* Background Images Crossfade only */}
      <AnimatePresence mode="popLayout">
        <motion.div
           key={current}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0 z-0"
        >
          <img 
            src={images[current]} 
            alt="Luxury Chauffeur"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
      <div className="absolute inset-0 z-10 bg-black/30" />

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
            className="text-white tracking-tight leading-[1.1] drop-shadow-2xl text-5xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Arrive On Time.<br/>
            In Style.<br/>
            <span className="text-gold italic font-normal">Every Time.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-gold my-8" />

          {/* Subheading - Inter (Sans-Serif) */}
          <motion.p variants={itemVariants} className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl font-sans drop-shadow-md">
            Premium chauffeur experiences engineered for execution. Seamless airport transfers, dedicated corporate travel, and elite event transportation across Bangalore.
          </motion.p>

          {/* Action Area */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4">
            <button className="btn-gold group flex items-center gap-3 !px-8 !py-4 text-sm tracking-widest uppercase shadow-[0_0_40px_rgba(0,200,83,0.3)] hover:shadow-[0_0_60px_rgba(0,200,83,0.5)]">
              Reserve Your Chauffeur
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="glass-panel text-white hover:bg-white hover:text-navy px-8 py-4 text-sm tracking-widest uppercase font-bold transition-all rounded-full border border-white/30">
              View Fleet
            </button>
          </motion.div>
          
          {/* Microcopy under CTAs */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-16 text-white/50">
            <Clock size={14} className="text-gold" />
            <p className="text-[10px] font-black tracking-[0.2em] uppercase mt-0.5">
              Available 24/7 &bull; Instant Confirmation
            </p>
          </motion.div>

          {/* Trust Signals Horizontal Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-8 border-t border-white/10 glass-panel mt-12 p-6 rounded-2xl">
            
            <div className="flex items-center gap-3">
              <Award size={24} strokeWidth={1.5} className="text-gold" />
              <div className="flex flex-col">
                <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest">Serving Since</span>
                <span className="text-white text-sm font-semibold tracking-wide">1994</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users size={24} strokeWidth={1.5} className="text-gold" />
              <div className="flex flex-col">
                <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest">Trusted by</span>
                <span className="text-white text-sm font-semibold tracking-wide">5000+ Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <UserCheck size={24} strokeWidth={1.5} className="text-gold" />
              <div className="flex flex-col">
                <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest">Professional</span>
                <span className="text-white text-sm font-semibold tracking-wide">Chauffeurs</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck size={24} strokeWidth={1.5} className="text-gold" />
              <div className="flex flex-col">
                <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest">On-time</span>
                <span className="text-white text-sm font-semibold tracking-wide">Guarantee</span>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>

      {/* Seamless blend to the white section below - positioned lower to stay off text */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
