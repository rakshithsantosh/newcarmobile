"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      {/* Main Bar - Floating Rounded Glossy Pill */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled 
            ? "bg-navy/90 backdrop-blur-xl py-4 border-white/5 shadow-elite" 
            : "bg-transparent py-8 border-transparent"
        }`}
      >
        <div className="ncm-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start">
            <span className="brand-text text-white text-2xl md:text-3xl transition-colors group-hover:text-gold">
              New Car Mobile
            </span>
            <span className="text-[8px] uppercase tracking-[0.7em] text-white/30 mt-1.5 font-black">
              Executive Chauffeur Excellence
            </span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
             <Link href="/fleet" className="text-white/60 hover:text-white font-black text-[11px] uppercase tracking-[0.3em] transition-all relative group">
                The Fleet
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
             </Link>
             <Link href="/about" className="text-white/60 hover:text-white font-black text-[11px] uppercase tracking-[0.3em] transition-all relative group">
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
             </Link>
             <button className="btn-accent !px-12 !py-4 !text-[10px] !rounded-sm uppercase tracking-[0.2em] shadow-none hover:shadow-glow transition-all">
                Book A Chauffeur
             </button>
          </div>

          {/* Action */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:inline-flex text-white/40 hover:text-gold font-bold text-[10px] uppercase tracking-[0.3em] transition-colors">
              Concierge
            </button>
            <button 
              className="lg:hidden text-white p-1"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-navy/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[110] transition-transform duration-500 ease-out shadow-2xl p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="text-navy font-extrabold tracking-tight">NCM TRAVEL</span>
          <button onClick={() => setIsOpen(false)}><X size={24} /></button>
        </div>

        <div className="flex flex-col gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">About Us</Link>
          
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-gold">Services</p>
            {SERVICES.map(s => (
              <Link key={s.id} href={`/services/${s.id}`} onClick={() => setIsOpen(false)} className="block font-medium text-navy/70">{s.title}</Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-gold">Our Fleet</p>
            <Link href="/fleet" onClick={() => setIsOpen(false)} className="block font-medium text-navy/70">View Showroom</Link>
          </div>
          
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">Contact</Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-light text-center">
            <button className="btn-gold w-full">Request A Quote</button>
            <p className="mt-6 text-xs text-muted font-medium">Quick Assistance: <br/> {SITE_CONFIG.phones[0].number}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
