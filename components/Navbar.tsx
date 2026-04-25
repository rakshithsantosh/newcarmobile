"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG, SERVICES, FLEET_CATEGORIES } from "@/lib/data";

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
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-700 rounded-full border border-white/40 shadow-[0_20px_50px_rgba(10,37,64,0.15)] ${
          scrolled 
            ? "top-4 bg-white/70 backdrop-blur-3xl py-2.5" 
            : "top-8 bg-white/30 backdrop-blur-xl py-4"
        }`}
      >
        <div className="ncm-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center font-bold text-white shadow-lg">
              NCM
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-extrabold text-lg leading-none tracking-tight">NEW CAR MOBILE</span>
              <span className="text-[10px] text-muted font-semibold tracking-[0.2em] uppercase mt-0.5">Premium Chauffeur</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm font-bold text-navy hover:text-gold transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-bold text-navy hover:text-gold transition-colors">About Us</Link>
            
            <div className="group relative py-2">
              <button className="flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold transition-colors">
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl border-t-2 border-gold py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {SERVICES.map(s => (
                  <Link 
                    key={s.id} 
                    href={`/services/${s.id}`} 
                    className="block px-6 py-3 text-xs font-bold text-navy/70 hover:bg-gray-light hover:text-gold"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group relative py-2">
              <button className="flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold transition-colors">
                Our Fleet <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl border-t-2 border-gold py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/fleet" className="block px-6 py-3 text-xs font-bold text-navy/70 hover:bg-gray-light hover:text-gold border-b border-gray-lighter">
                  All Vehicles
                </Link>
                {FLEET_CATEGORIES.map(c => (
                  <Link 
                    key={c.id} 
                    href={`/fleet#${c.id}`} 
                    className="block px-6 py-3 text-xs font-bold text-navy/70 hover:bg-gray-light hover:text-gold"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-sm font-bold text-navy hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex btn-gold !py-2.5 !px-6 !text-xs">
              Book Now
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
