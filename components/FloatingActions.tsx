"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

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
    <div className="fixed bottom-8 right-8 z-[80] flex flex-col gap-4">
      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`w-12 h-12 bg-navy text-white flex items-center justify-center rounded-full floating-btn transition-all duration-500 shadow-2xl ${
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Primary WhatsApp */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full pulse-ring pointer-events-none"></div>
        <a 
          href="https://wa.me/919845031627" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full floating-btn group z-10"
        >
          <MessageCircle size={28} className="transition-transform group-hover:scale-110" />
          <div className="absolute right-full mr-4 bg-white text-navy text-[10px] font-black py-2 px-4 rounded-md uppercase tracking-tight whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl border border-gray-light">
            Chat with NCM Concierge
          </div>
        </a>
      </div>
      
      {/* Phone Call */}
      <a 
        href="tel:08026577886" 
        className="w-16 h-16 bg-gold text-white flex items-center justify-center rounded-full floating-btn group shadow-[0_10px_30px_rgba(212,175,119,0.4)]"
      >
        <Phone size={28} className="transition-transform group-hover:rotate-12" />
        <div className="absolute right-full mr-4 bg-white text-navy text-[10px] font-black py-2 px-4 rounded-md uppercase tracking-tight whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl border border-gray-light">
          Call Dispatch Office
        </div>
      </a>
    </div>
  );
};

export default FloatingActions;
