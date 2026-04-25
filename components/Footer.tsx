"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG, SERVICES, FLEET_CATEGORIES } from "@/lib/data";
import { Globe, Mail, Smartphone, Shield, Download, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 overflow-hidden">
      <div className="ncm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Address */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center font-bold text-navy text-xl">
                N
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">NEW CAR MOBILE</span>
            </Link>
            <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-xs">
              Bangalore&apos;s premier fleet management partner providing high-end mobility solutions for businesses and individuals since 1994.
            </p>
            <div className="flex gap-4">
               {[Globe, Mail, Smartphone, Shield].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-all">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-black uppercase text-xs tracking-[0.2em] mb-10 italic">Quick Links</h4>
            <ul className="space-y-4 text-white/70 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Safety Protocols</Link></li>
              <li><Link href="/fleet" className="hover:text-gold transition-colors">Our Showroom</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Get A Quote</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-black uppercase text-xs tracking-[0.2em] mb-10 italic">Our Services</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              {SERVICES.map(s => (
                <li key={s.id}><Link href={`/services/${s.id}`} className="hover:text-gold transition-colors">{s.title}</Link></li>
              ))}
              {FLEET_CATEGORIES.map(c => (
                <li key={c.id}><Link href={`/fleet#${c.id}`} className="hover:text-gold transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-black uppercase text-xs tracking-[0.2em] mb-10 italic">Contact NCM</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                 <MapPin size={24} className="text-gold shrink-0" />
                 <p className="text-white/70 text-sm leading-relaxed">{SITE_CONFIG.address}</p>
              </div>
              <div className="flex gap-4">
                 <Phone size={18} className="text-gold shrink-0" />
                 <p className="text-white/70 text-sm font-bold tracking-widest">{SITE_CONFIG.phones[0].number}</p>
              </div>
              <div className="flex gap-4">
                 <Mail size={18} className="text-gold shrink-0" />
                 <p className="text-white/70 text-sm font-bold">{SITE_CONFIG.email}</p>
              </div>
              <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all w-full justify-center">
                 <Download size={14} /> Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
             © {new Date().getFullYear()} New Car Mobile. All rights reserved. Designed for Excellence.
           </p>
           <div className="flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <span>Sitemap</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
