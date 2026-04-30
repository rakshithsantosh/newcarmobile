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
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100] transition-all duration-700 rounded-2xl border border-white/20 shadow-glass ${
          scrolled 
            ? "top-6 bg-white/80 backdrop-blur-2xl py-3 px-10" 
            : "top-8 bg-navy/10 backdrop-blur-md py-6 px-8"
        }`}
      >
        <div className="ncm-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center font-bold text-white shadow-2xl group-hover:bg-accent group-hover:rotate-6 transition-all duration-500 border border-white/10">
              <span className="text-2xl tracking-tighter font-serif italic">NC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-black text-2xl leading-none tracking-tight group-hover:text-accent transition-colors font-serif italic">New Car Mobile</span>
              <span className="text-[10px] text-muted font-black tracking-[0.4em] uppercase mt-1">Heritage Mobility</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
             <Link href="/fleet" className="text-navy/70 hover:text-accent font-black text-[11px] uppercase tracking-[0.3em] transition-all">
                The Fleet
             </Link>
             <Link href="/about" className="text-navy/70 hover:text-accent font-black text-[11px] uppercase tracking-[0.3em] transition-all">
                Our Story
             </Link>
             <button className="btn-accent !px-10 !py-4 !text-[11px] !rounded-xl uppercase tracking-[0.2em]">
                Secure Booking
             </button>
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex btn-gold !py-3 !px-8 !text-[10px] uppercase tracking-[0.3em] !rounded-xl">
              Concierge
            </button>
            <button 
              className="lg:hidden text-navy p-1"
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
