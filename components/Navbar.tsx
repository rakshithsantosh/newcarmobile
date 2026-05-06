"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import BookingWizard from "./BookingWizard";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Fleet", href: "/fleet" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled 
            ? "surface-glass py-4 border-b border-navy/5 shadow-sm" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="ncm-container flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-4 relative z-[110]">
            <div className="relative w-40 h-10 md:w-48 md:h-12 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="New Car Mobile"
                fill
                priority
                className={`object-contain transition-all duration-700 ${scrolled ? 'invert' : 'invert brightness-0'}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-navy hover:text-accent transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
            
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary group"
            >
              <span>Book A Chauffeur</span>
              <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-navy relative z-[110]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Booking Wizard Modal */}
      <BookingWizard isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-white pt-32 p-8 lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif italic text-navy hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
              
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-10 border-t border-gray-100 mt-auto mb-10"
            >
              <button 
                onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
                className="btn-accent w-full py-6 text-sm"
              >
                Initiate Booking
              </button>
              <div className="mt-10 flex flex-col items-center text-center">
                <p className="caption mb-4">Concierge Desk</p>
                <p className="text-navy font-bold">{SITE_CONFIG.phones[0].number}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
