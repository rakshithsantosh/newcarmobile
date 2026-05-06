"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/data";
import BookingWizard from "./BookingWizard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl py-4 border-b border-navy/5 shadow-sm text-navy" 
            : "bg-white/10 backdrop-blur-sm py-6 border-b border-white/5 text-navy"
        }`}
      >
        <div className="ncm-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative w-48 h-12 md:w-52 md:h-14">
            <Image
              src="/images/logo.png"
              alt="New Car Mobile Logo"
              fill
              priority
              className="object-contain invert brightness-0 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
             <Link href="/fleet" className="hover:text-accent font-bold text-[11px] uppercase tracking-[0.3em] transition-all relative group text-navy">
                The Fleet
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
             </Link>
             <Link href="/about" className="hover:text-accent font-bold text-[11px] uppercase tracking-[0.3em] transition-all relative group text-navy">
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
             </Link>
             <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-navy text-white !px-10 !py-3.5 !text-[10px] rounded-lg uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all shadow-lg shadow-navy/20"
              >
                Book A Chauffeur
             </button>
          </div>

          {/* Action */}
          <div className="flex items-center gap-6">
            <button 
              className="lg:hidden p-1 text-navy"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Wizard Modal */}
      <BookingWizard isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

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
          <div className="relative w-32 h-10">
            <Image
              src="/images/logo.png"
              alt="NCM Logo"
              fill
              className="object-contain invert brightness-0"
            />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-navy"><X size={24} /></button>
        </div>

        <div className="flex flex-col gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">About Us</Link>
          
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-accent">Services</p>
            {SERVICES.map(s => (
              <Link key={s.id} href={`/services/${s.id}`} onClick={() => setIsOpen(false)} className="block font-medium text-navy/70">{s.title}</Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-accent">Our Fleet</p>
            <Link href="/fleet" onClick={() => setIsOpen(false)} className="block font-medium text-navy/70">View Showroom</Link>
          </div>
          
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-navy border-b border-gray-light pb-2">Contact</Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-light text-center">
            <button 
              onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
              className="bg-accent text-white w-full py-4 rounded-lg font-bold shadow-lg shadow-accent/20"
            >
              Request A Quote
            </button>
            <p className="mt-6 text-xs text-muted font-medium">Quick Assistance: <br/> {SITE_CONFIG.phones[0].number}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
