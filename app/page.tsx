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
      <section className="section-py bg-white">
        <div className="ncm-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Our Showcase</p>
              <h2 className="text-navy uppercase">Experience The Elite Fleet</h2>
              <p className="text-muted mt-6 max-w-lg">From executive sedans to luxury coaches, explore our meticulously maintained fleet designed for every mission.</p>
            </div>
            <Link href="/fleet" className="btn-outline">
              View All Vehicles
            </Link>
          </div>
          <FleetGrid limit={4} />
        </div>
      </section>

      <ProcessSection />

      {/* Why Choose Us */}
      <section className="section-py bg-gray-light relative overflow-hidden">
        {/* Subtle background gradient blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="ncm-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(10,37,64,0.15)] group relative">
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <img src="/images/services/employee.jpg" alt="Why Choose NCM" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="absolute -bottom-10 -right-10 w-64 h-64 bg-navy/95 backdrop-blur-xl p-10 hidden md:flex flex-col justify-center border-t-8 border-gold shadow-glow rounded-xl z-20"
               >
                  <span className="text-gold text-5xl font-black mb-4 drop-shadow-md">30+</span>
                  <p className="text-white text-xs font-black uppercase tracking-widest leading-relaxed">Years of Unmatched Operational Excellence</p>
               </motion.div>
            </motion.div>

            <div>
              <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Core Values</p>
              <h2 className="text-navy uppercase mb-10">Why Bangalore <br/> Trusts NCM</h2>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: "Safety First Protocols", desc: "Rigorous background checks for all chauffeurs and Real-time GPS tracking on all trips." },
                  { icon: Clock, title: "Precision Punctuality", desc: "Our 99.8% on-time performance record makes us the #1 choice for corporate travel." },
                  { icon: Users, title: "Dedicated Support", desc: "24/7 Command Center based in Bangalore to handle every request and anomaly." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-6 group hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-glass -mx-6"
                  >
                    <div className="w-14 h-14 shrink-0 bg-white group-hover:bg-gold border border-gray-medium group-hover:border-gold flex items-center justify-center text-gold group-hover:text-white rounded-xl shadow-sm transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-navy font-bold text-lg mb-2 uppercase group-hover:text-gold transition-colors">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="mt-12 btn-gold">Read More About Us</button>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Services Overview */}
      <section className="section-py bg-gray-light">
        <div className="ncm-container">
          <div className="text-center mb-16">
            <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">Expertise</p>
            <h2 className="text-navy uppercase">Mobility Solutions</h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <Testimonials />

      {/* Clients Logos */}
      <section className="py-20 bg-white border-y border-gray-medium overflow-hidden">
        <div className="ncm-container">
          <p className="text-center text-muted text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic">Recognized By Industry Giants</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black text-navy tracking-tighter">INFOSYS</div>
             <div className="text-2xl font-black text-navy tracking-tighter">WIPRO</div>
             <div className="text-2xl font-black text-navy tracking-tighter">ACCENTURE</div>
             <div className="text-2xl font-black text-navy tracking-tighter">GOOGLE</div>
             <div className="text-2xl font-black text-navy tracking-tighter">PHILIPS</div>
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="section-py bg-gradient-to-br from-navy via-[#0A2E4B] to-[#04192B] relative overflow-hidden">
         {/* Decorative glowing orbs */}
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
         <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="ncm-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="order-2 lg:order-1"
               >
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-10 h-10 bg-gold/20 backdrop-blur-md rounded-full flex items-center justify-center text-gold border border-gold/30">
                        <Smartphone size={20} />
                     </div>
                     <span className="text-gold font-black uppercase tracking-widest text-xs">Drive Modern</span>
                  </div>
                  <h2 className="text-white uppercase mb-8 leading-tight drop-shadow-md">Manage Your Travel <br/> On The Go</h2>
                  <p className="text-white/70 mb-10 max-w-lg leading-relaxed">Download the NCM mobile app to book rides, track your chauffeur in real-time, and manage corporate invoices directly from your smartphone.</p>
                  
                  <div className="flex flex-wrap gap-6 items-center">
                     <button className="flex items-center gap-4 bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all shadow-xl group">
                        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> App Store
                     </button>
                     <button className="glass-panel flex items-center gap-4 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-navy transition-all border border-white/30 group">
                        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> Google Play
                     </button>
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="order-1 lg:order-2 flex justify-center relative"
               >
                  <div className="relative w-full max-w-sm">
                     <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gold/30 blur-3xl rounded-full" />
                     <motion.img 
                       animate={{ y: [0, -15, 0] }}
                       transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                       src="/images/hero-1.png" 
                       alt="App Preview" 
                       className="relative z-10 w-full rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-4 border-white/10" 
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
