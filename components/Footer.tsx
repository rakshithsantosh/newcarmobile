"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, SERVICES, FLEET_CATEGORIES } from "@/lib/data";
import { Mail, MapPin, Phone, Download, Globe, Share2, Users } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="ncm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block relative w-48 mb-8 opacity-80 hover:opacity-100 transition-opacity">
               <Logo className="w-full h-auto text-white" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xs">
              Engineering Bangalore&apos;s executive mobility landscape since 1994. A legacy built on punctuality, safety, and elite professional protocol.
            </p>
            <div className="flex gap-4">
               {[Globe, Share2, Users].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all duration-500">
                    <Icon size={16} />
                 </a>
               ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="caption text-accent mb-10">Solutions</p>
            <ul className="space-y-4">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-white/60 hover:text-white text-sm transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-3" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleet */}
          <div>
            <p className="caption text-accent mb-10">The Fleet</p>
            <ul className="space-y-4">
              {FLEET_CATEGORIES.map(c => (
                <li key={c.id}>
                  <Link href={`/fleet#${c.id}`} className="text-white/60 hover:text-white text-sm transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-3" />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Experience */}
          <div>
            <p className="caption text-accent mb-10">Company</p>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">Our Story</Link></li>
              <li><Link href="/safety" className="text-white/60 hover:text-white text-sm transition-colors">Safety Protocol</Link></li>
              <li><Link href="/corporate" className="text-white/60 hover:text-white text-sm transition-colors">Corporate Alliances</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white text-sm transition-colors">Join the Fleet</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact Concierge</Link></li>
            </ul>
          </div>

          {/* Column 5: Global Desk */}
          <div>
            <p className="caption text-accent mb-10">Global Desk</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                 <MapPin size={18} className="text-accent shrink-0 mt-1" />
                 <p className="text-white/50 text-sm leading-relaxed">{SITE_CONFIG.address}</p>
              </div>
              <div className="flex gap-4">
                 <Phone size={18} className="text-accent shrink-0" />
                 <p className="text-white font-bold text-sm">{SITE_CONFIG.phones[0].number}</p>
              </div>
              <div className="flex gap-4">
                 <Mail size={18} className="text-accent shrink-0" />
                 <p className="text-white/50 text-sm truncate">{SITE_CONFIG.email}</p>
              </div>
              <button className="border border-white/10 hover:bg-white hover:text-navy text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-[2px] py-5 w-full flex items-center justify-center transition-all duration-500 group">
                 <Download size={14} className="mr-3 group-hover:-translate-y-0.5 transition-transform" />
                 <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
             © {new Date().getFullYear()} New Car Mobile. Refined Mobility.
           </p>
           <div className="flex gap-10">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map(link => (
                <Link key={link} href="#" className="text-white/30 hover:text-accent text-[10px] font-black uppercase tracking-[0.2em] transition-colors">{link}</Link>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
