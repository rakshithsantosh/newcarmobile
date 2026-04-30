"use client";

import React from "react";
import Hero from "@/components/Hero";
import FleetGrid from "@/components/FleetGrid";
import ProcessSection from "@/components/ProcessSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import { CheckCircle2, Smartphone, Download, ShieldCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />

      {/* Fleet Teaser */}
      <section className="section-py bg-background">
        <div className="ncm-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Exquisite Selection</p>
              <h2 className="text-navy uppercase tracking-tight">The Masterclass Fleet</h2>
              <p className="text-muted mt-8 max-w-xl text-lg leading-relaxed">From hand-picked executive sedans to custom luxury coaches, our fleet represents the pinnacle of Bangalore's premium mobility.</p>
            </div>
            <Link href="/fleet" className="btn-accent !rounded-xl !px-10">
              Explore All
            </Link>
          </div>
          <FleetGrid limit={4} />
        </div>
      </section>

      <ProcessSection />

      {/* Why Choose Us */}
      <section className="section-py bg-white relative overflow-hidden">
        {/* Subtle background gradient blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="ncm-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
               <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift group relative">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
                  <img src="/images/services/employee.jpg" alt="Why Choose NCM" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" />
               </div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="absolute -bottom-12 -right-12 w-72 h-72 bg-navy p-12 hidden md:flex flex-col justify-center shadow-2xl rounded-3xl z-20 border border-white/10"
               >
                  <span className="text-accent text-6xl font-medium mb-4 font-serif">30+</span>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">Years of Engineering <br/> Mobility Excellence</p>
               </motion.div>
            </motion.div>

            <div>
              <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 italic">The Standard</p>
              <h2 className="text-navy uppercase mb-12 tracking-tight">Legacy of Trust <br/> Since 1994</h2>
              
              <div className="space-y-10">
                {[
                  { icon: ShieldCheck, title: "Elite Protocols", desc: "Rigorous vetting and real-time tracking for absolute security." },
                  { icon: Clock, title: "Punctual DNA", desc: "A 99.8% on-time record that defines our corporate service." },
                  { icon: Users, title: "24/7 Command Center", desc: "Bangalore-based support for seamless coordination." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 shrink-0 bg-background rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500 shadow-sm border border-gray-medium group-hover:border-accent">
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-navy font-bold text-xl mb-2 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-muted text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Services Overview */}
      <section className="section-py bg-background">
        <div className="ncm-container">
          <div className="text-center mb-20">
            <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Core Expertise</p>
            <h2 className="text-navy uppercase tracking-tight">Mobility Ecosystem</h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <Testimonials />

      {/* Clients Logos */}
      <section className="py-24 bg-white border-y border-gray-medium overflow-hidden">
        <div className="ncm-container">
          <p className="text-center text-muted text-[11px] font-black uppercase tracking-[0.5em] mb-16 italic">Pillars of Our Legacy</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
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
         {/* Decorative Glowing Elements */}
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="ncm-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="order-2 lg:order-1"
               >
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 bg-accent/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-accent border border-accent/30">
                        <Smartphone size={24} />
                     </div>
                     <span className="text-accent font-black uppercase tracking-[0.3em] text-[11px]">Next-Gen Mobility</span>
                  </div>
                  <h2 className="text-white uppercase mb-10 leading-[1.1] tracking-tight drop-shadow-2xl">Travel Management <br/> Reimagined</h2>
                  <p className="text-white/60 mb-12 max-w-xl text-lg leading-relaxed">Experience absolute control. Our proprietary mobile platform allows seamless booking, real-time tracking, and automated corporate compliance.</p>
                  
                  <div className="flex flex-wrap gap-8 items-center">
                     <button className="flex items-center gap-5 bg-white text-navy px-10 py-5 rounded-2xl font-bold hover:bg-accent transition-all shadow-2xl group">
                        <Download size={22} className="group-hover:translate-y-1 transition-transform" /> 
                        <span className="tracking-widest text-xs uppercase">App Store</span>
                     </button>
                     <button className="glass-panel flex items-center gap-5 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-navy transition-all border border-white/10 group">
                        <Download size={22} className="group-hover:translate-y-1 transition-transform" />
                        <span className="tracking-widest text-xs uppercase">Google Play</span>
                     </button>
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="order-1 lg:order-2 flex justify-center relative"
               >
                  <div className="relative w-full max-w-md">
                     <div className="absolute inset-x-0 bottom-0 top-1/4 bg-accent/20 blur-[120px] rounded-full" />
                     <motion.img 
                       animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
                       transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                       src="/images/hero-1.png" 
                       alt="App Preview" 
                       className="relative z-10 w-full rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border border-white/10" 
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default HomePage;
