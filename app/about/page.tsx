"use client";

import React from "react";
import { Shield, Target, History, Globe, Users, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div className="ncm-container relative z-10 text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <p className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Our Legacy</p>
             <h1 className="text-white uppercase mb-8">Pioneering Premium <br/> Mobility since 1994</h1>
             <p className="text-white/60 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
               New Car Mobile was founded with a singular vision: to bring world-class chauffeur standards to the streets of Bangalore. Over three decades, we have evolved from a small executive fleet to a massive multi-tiered transport ecosystem.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-py bg-white">
        <div className="ncm-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-navy uppercase mb-10 tracking-tighter font-serif text-5xl md:text-7xl leading-none">Driven by <br/> Excellence</h2>
                 <p className="text-text-secondary text-lg font-light leading-relaxed mb-12">
                   At NCM, we don&apos;t just provide cars; we provide peace of mind. Our entire operational philosophy is built on three unbreakable pillars: Safety, Punctuality, and Professionalism.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Shield, t: "Safety Culture", d: "Zero-compromise protocols on vehicle maintenance and driver vetting." },
                      { icon: Target, t: "Mission Focused", d: "Understanding that your time is the most valuable asset." },
                      { icon: History, t: "Deep Roots", d: "30 years of navigating Bangalore's complex geography." },
                      { icon: Trophy, t: "Elite Standards", d: "Consistently rated #1 for corporate transport benchmarks." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="w-12 h-12 shrink-0 bg-background border border-navy/5 rounded-[2px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500">
                            <item.icon size={20} strokeWidth={1.5} />
                         </div>
                         <div>
                            <h4 className="text-navy font-serif italic text-lg mb-2 tracking-tight group-hover:text-accent transition-colors">{item.t}</h4>
                            <p className="text-text-secondary text-[11px] leading-relaxed font-light">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="aspect-square bg-background rounded-[2px] overflow-hidden shadow-elite relative border border-navy/5">
                    <Image 
                      src="/images/hero-1.png" 
                      alt="Our Legacy" 
                      fill
                      className="object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[2s] ease-out" 
                    />
                    <div className="absolute inset-0 bg-navy/20" />
                 </div>
                 <div className="absolute -top-10 -right-10 bg-accent text-navy p-12 hidden xl:block shadow-elite rounded-[2px] skew-y-3 border border-white/10">
                    <p className="text-navy text-7xl font-serif italic mb-2 tracking-tighter leading-none text-center">30+</p>
                    <p className="text-navy/60 text-[10px] font-bold uppercase tracking-[0.4em] text-center mt-4">Years Of Trust</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Leadership / Culture Grid */}
      <section className="section-py bg-background border-y border-navy/5">
         <div className="ncm-container">
            <div className="text-center mb-20">
               <h2 className="text-navy uppercase tracking-tighter font-serif text-5xl md:text-7xl leading-none text-center">Our Core <br/> Strengths</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Corporate Governance", icon: Shield, desc: "Strict adherence to all transport regulations and labor laws for peace-of-mind partnership." },
                 { title: "24/7 Command Center", icon: Globe, desc: "Our HQ in Bangalore manages live dispatches, tracking, and recovery 365 days a year." },
                 { title: "Chauffeur Academy", icon: Users, desc: "Internal training program for etiquette, safety, and defensive driving maneuvers." }
               ].map((card, i) => (
                 <div key={i} className="bg-white p-12 text-center group border border-navy/5 rounded-[2px] hover:border-accent hover:shadow-elite transition-all duration-700">
                    <div className="w-16 h-16 bg-background rounded-[2px] border border-navy/5 mx-auto mb-8 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-700">
                       <card.icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-navy font-serif italic text-xl mb-4 group-hover:text-accent transition-colors tracking-tight">{card.title}</h3>
                    <p className="text-text-secondary text-sm font-light leading-relaxed">{card.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-navy text-center">
         <div className="ncm-container">
            <h2 className="text-white uppercase mb-8">Partner with Bangalore&apos;s Best</h2>
            <p className="text-white/60 mb-12 max-w-lg mx-auto">Discover why hundreds of corporate giants and thousands of private travelers choose NCM every day.</p>
            <div className="flex flex-wrap justify-center gap-8">
               <Link href="/contact" className="bg-white text-navy px-12 py-6 rounded-sm font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold hover:text-white transition-all shadow-xl">
                 Get A Custom Proposal
               </Link>
               <Link href="/fleet" className="border border-white/20 text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-navy transition-all">
                 Explore Our Fleet
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
};

export default AboutPage;
