"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[80] flex flex-col gap-6">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-navy text-white flex items-center justify-center rounded-2xl shadow-glass hover:bg-gold transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative flex flex-col gap-6"
      >
        {/* Primary WhatsApp */}
        <div className="relative group">
          <div className="absolute inset-[-12px] rounded-full bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <div className="absolute inset-0 rounded-full pulse-ring pointer-events-none" />
          <a 
            href="https://wa.me/919845031627" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-16 h-16 bg-gold text-white flex items-center justify-center rounded-2xl shadow-glow group/btn z-10 transition-all duration-500 hover:scale-110 hover:-rotate-3"
          >
            <MessageCircle size={32} className="transition-transform group-hover/btn:scale-110" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-navy/95 backdrop-blur-xl text-white text-[11px] font-black py-3 px-6 rounded-xl uppercase tracking-widest whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-2xl border border-white/10 translate-x-4 group-hover:translate-x-0">
              Direct Concierge
            </div>
          </a>
        </div>
        
        {/* Phone Call */}
        <div className="relative group">
          <a 
            href="tel:08026577886" 
            className="w-16 h-16 bg-white text-navy flex items-center justify-center rounded-2xl shadow-glass group/btn border border-gray-medium transition-all duration-500 hover:scale-110 hover:rotate-3"
          >
            <Phone size={32} className="transition-transform group-hover/btn:scale-110" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-navy/95 backdrop-blur-xl text-white text-[11px] font-black py-3 px-6 rounded-xl uppercase tracking-widest whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-2xl border border-white/10 translate-x-4 group-hover:translate-x-0">
              Instant Dispatch
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingActions;
