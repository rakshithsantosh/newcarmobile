"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import FleetGrid from "@/components/FleetGrid";
import ProcessSection from "@/components/ProcessSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import { Smartphone, Download, ShieldCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden bg-background">
      <Hero />
      
      {/* Fleet Teaser - The Collection */}
      <section className="section-py bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        <div className="ncm-container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-3xl">
              <p className="text-gold font-black uppercase tracking-[0.5em] text-[10px] mb-8 italic">The Collection</p>
              <h2 className="text-navy uppercase tracking-tighter font-serif text-6xl md:text-8xl leading-[0.9]">Masterclass <br/>Fleet</h2>
              <p className="text-navy/40 mt-12 max-w-xl text-xl leading-relaxed font-light tracking-wide italic">Hand-picked executive flagships and bespoke coaches representing the pinnacle of Bangalore&apos;s executive mobility.</p>
            </div>
            <Link href="/fleet" className="btn-accent !rounded-sm !px-12 !py-6 !text-[10px] uppercase tracking-[0.4em] shadow-none hover:shadow-glow transition-all">
              EXPLORE SHOWROOM
            </Link>
          </div>
          <FleetGrid limit={4} />
        </div>
      </section>

      <ProcessSection />

      {/* Why Choose Us - The Legacy */}
      <section className="section-py bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="ncm-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
               <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elite group relative border border-navy/5">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
                  <Image 
                    src="/images/services/corporate.jpg" 
                    alt="Legacy of Excellence" 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  />
               </div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="absolute -bottom-16 -right-16 w-80 h-80 bg-navy p-16 hidden md:flex flex-col justify-center shadow-elite rounded-sm z-20 border border-white/5"
               >
                  <span className="text-gold text-7xl font-serif italic leading-none mb-6">30+</span>
                  <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em] leading-relaxed">Years of Engineering <br/> Mobility Excellence</p>
               </motion.div>
            </motion.div>

            <div>
              <p className="text-gold font-black uppercase tracking-[0.5em] text-[10px] mb-8 italic">The Philosophy</p>
              <h2 className="text-navy uppercase mb-16 tracking-tighter font-serif text-5xl md:text-7xl leading-none">Legacy of Trust <br/> Since 1994</h2>
              
              <div className="space-y-12">
                {[
                  { icon: ShieldCheck, title: "Elite Protocol", desc: "Rigorous vetting and real-time biometric tracking for absolute security." },
                  { icon: Clock, title: "Punctual DNA", desc: "A 99.8% on-time record that defines our corporate service standards." },
                  { icon: Users, title: "Command Center", desc: "24/7 dedicated executive desk for seamless global coordination." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-10 group"
                  >
                    <div className="w-20 h-20 shrink-0 bg-background rounded-sm flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700 shadow-none border border-navy/5 group-hover:border-gold">
                      <item.icon size={36} strokeWidth={1} />
                    </div>
                    <div className="flex flex-col justify-center border-b border-navy/5 pb-10 w-full">
                      <h4 className="text-navy font-serif italic text-2xl mb-3 tracking-tight group-hover:text-gold transition-colors">{item.title}</h4>
                      <p className="text-navy/50 text-base leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter - Navy Contrast */}
      <section className="bg-navy py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        <div className="ncm-container relative z-10">
          <StatsCounter />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-py bg-white relative">
        <div className="ncm-container">
          <div className="text-center mb-32">
            <p className="text-gold font-black uppercase tracking-[0.5em] text-[10px] mb-8 italic">Core Specializations</p>
            <h2 className="text-navy uppercase tracking-tighter font-serif text-6xl md:text-8xl leading-none">Mobility <br/>Ecosystem</h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <Testimonials />

      {/* Clients Logos */}
      <section className="py-32 bg-white border-y border-navy/5 overflow-hidden">
        <div className="ncm-container">
          <p className="text-center text-navy/30 text-[10px] font-black uppercase tracking-[0.6em] mb-20 italic">Pillars of Our Global Legacy</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
             <div className="text-3xl font-black text-navy tracking-tighter font-serif italic">INFOSYS</div>
             <div className="text-3xl font-black text-navy tracking-tighter font-serif italic">WIPRO</div>
             <div className="text-3xl font-black text-navy tracking-tighter font-serif italic">ACCENTURE</div>
             <div className="text-3xl font-black text-navy tracking-tighter font-serif italic">GOOGLE</div>
             <div className="text-3xl font-black text-navy tracking-tighter font-serif italic">PHILIPS</div>
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="section-py bg-navy relative overflow-hidden">
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none" />
         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
         
         <div className="ncm-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                 className="order-2 lg:order-1"
               >
                  <div className="flex items-center gap-4 mb-12">
                     <div className="w-14 h-14 bg-accent/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-accent border border-accent/30">
                        <Smartphone size={28} strokeWidth={1.5} />
                     </div>
                     <span className="text-accent font-black uppercase tracking-[0.4em] text-[11px]">Next-Gen Digital Suite</span>
                  </div>
                  <h2 className="text-white uppercase mb-12 leading-[0.9] tracking-tighter font-serif text-6xl md:text-8xl">Travel <br/>Reimagined</h2>
                  <p className="text-white/50 mb-16 max-w-xl text-xl leading-relaxed font-light tracking-wide italic">Experience absolute control. Our proprietary mobile platform allows seamless booking, real-time tracking, and automated corporate compliance.</p>
                  
                  <div className="flex flex-wrap gap-10 items-center">
                     <button className="flex items-center gap-6 bg-white text-navy px-12 py-6 rounded-sm font-black hover:bg-accent transition-all shadow-elite group">
                        <Download size={22} className="group-hover:translate-y-1 transition-transform" /> 
                        <span className="tracking-[0.3em] text-[10px] uppercase">App Store</span>
                     </button>
                     <button className="glass-panel flex items-center gap-6 text-white px-12 py-6 rounded-sm font-black hover:bg-white hover:text-navy transition-all border border-white/10 group">
                        <Download size={22} className="group-hover:translate-y-1 transition-transform" />
                        <span className="tracking-[0.3em] text-[10px] uppercase">Google Play</span>
                     </button>
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 className="order-1 lg:order-2 flex justify-center relative"
               >
                  <div className="relative w-full max-w-md">
                     <div className="absolute inset-x-0 bottom-0 top-1/4 bg-accent/20 blur-[150px] rounded-full" />
                     <motion.div
                       animate={{ y: [0, -30, 0] }}
                       transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                       className="relative z-10 w-full aspect-[4/5] rounded-sm shadow-elite border border-white/10 overflow-hidden"
                     >
                       <Image 
                         src="/images/hero-1.png" 
                         alt="Digital Ecosystem Preview" 
                         fill
                         className="object-cover" 
                       />
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default HomePage;
