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
                 <h2 className="text-navy uppercase mb-10">Driven by <br/> Excellence.</h2>
                 <p className="text-muted text-lg mb-12">
                   At NCM, we don&apos;t just provide cars; we provide peace of mind. Our entire operational philosophy is built on three unbreakable pillars: Safety, Punctuality, and Professionalism.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Shield, t: "Safety Culture", d: "Zero-compromise protocols on vehicle maintenance and driver vetting." },
                      { icon: Target, t: "Mission Focused", d: "Understanding that your time is the most valuable asset." },
                      { icon: History, t: "Deep Roots", d: "30 years of navigating Bangalore's complex geography." },
                      { icon: Trophy, t: "Elite Standards", d: "Consistently rated #1 for corporate transport benchmarks." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-10 h-10 shrink-0 bg-gray-light flex items-center justify-center text-gold">
                            <item.icon size={20} />
                         </div>
                         <div>
                            <h4 className="text-navy font-bold uppercase text-xs mb-2">{item.t}</h4>
                            <p className="text-muted text-[10px] leading-relaxed uppercase">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="aspect-square bg-gray-light rounded-sm overflow-hidden shadow-2xl relative">
                    <Image 
                      src="/images/hero-1.png" 
                      alt="Our Legacy" 
                      fill
                      className="object-cover grayscale brightness-75" 
                    />
                    <div className="absolute inset-0 bg-navy/20" />
                 </div>
                 <div className="absolute -top-10 -right-10 bg-gold p-12 hidden xl:block shadow-2xl skew-y-3">
                    <p className="text-white text-7xl font-sans font-black italic mb-2 tracking-tighter">30+</p>
                    <p className="text-white text-[10px] font-black uppercase tracking-widest text-center mt-4">Years Of Trust</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Leadership / Culture Grid */}
      <section className="section-py bg-gray-light border-y border-gray-medium">
         <div className="ncm-container">
            <div className="text-center mb-20">
               <h2 className="text-navy uppercase">Our Core Strengths</h2>
               <div className="w-20 h-1 bg-gold mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Corporate Governance", icon: Shield, desc: "Strict adherence to all transport regulations and labor laws for peace-of-mind partnership." },
                 { title: "24/7 Command Center", icon: Globe, desc: "Our HQ in Bangalore manages live dispatches, tracking, and recovery 365 days a year." },
                 { title: "Chauffeur Academy", icon: Users, desc: "Internal training program for etiquette, safety, and defensive driving maneuvers." }
               ].map((card, i) => (
                 <div key={i} className="bg-white p-12 text-center group border-t-4 border-white hover:border-gold transition-all duration-500 shadow-sm">
                    <div className="w-20 h-20 bg-gray-light mx-auto mb-10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                       <card.icon size={36} />
                    </div>
                    <h3 className="text-lg text-navy font-bold mb-4 uppercase">{card.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
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
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/contact" className="btn-gold">Get A Custom Proposal</Link>
               <Link href="/fleet" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy">Explore Our Fleet</Link>
            </div>
         </div>
      </section>
    </main>
  );
};

export default AboutPage;
