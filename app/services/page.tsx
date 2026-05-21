"use client";

import React from "react";
import ServiceGrid from "@/components/ServiceGrid";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Star } from "lucide-react";

const ServicesPage = () => {
  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
        <div className="ncm-container relative z-10 text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <p className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 italic">Core Offerings</p>
             <h1 className="text-white uppercase mb-8">Our Elite Services</h1>
             <p className="text-white/60 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
               Comprehensive fleet management and chauffeured solutions tailored meticulously for Bangalore&apos;s corporate tech sector and premium private travelers.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-py bg-background">
        <div className="ncm-container">
          <ServiceGrid />
        </div>
      </section>

      {/* Why Choose Us Detail Section */}
      <section className="section-py bg-white border-t border-navy/5">
         <div className="ncm-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
               >
                  <h2 className="text-navy uppercase tracking-tighter font-serif text-4xl md:text-5xl mb-8">Why Choose <br/> Our Services?</h2>
                  <p className="text-text-secondary font-light leading-relaxed mb-12 max-w-xl">
                     At New Car Mobile, we don&apos;t just provide cars; we provide peace of mind. Our services are built on the pillars of safety, reliability, and premium comfort.
                  </p>
                  
                  <ul className="space-y-8">
                     {[
                       { icon: ShieldCheck, t: 'Customized Solutions', d: 'We tailor our fleet and routes to match your specific corporate requirements.' },
                       { icon: Cpu, t: 'Advanced Technology', d: 'Real-time GPS tracking and dedicated dashboard for corporate clients.' },
                       { icon: Star, t: 'Expert Chauffeurs', d: 'Highly trained, background-verified, and professional drivers.' }
                     ].map((item, i) => (
                       <li key={i} className="flex gap-6 group">
                          <div className="w-12 h-12 shrink-0 bg-background border border-navy/5 rounded-[2px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-navy transition-all duration-500">
                             <item.icon size={20} strokeWidth={1.5} />
                          </div>
                          <div>
                             <h4 className="text-navy font-serif italic text-lg mb-2 tracking-tight group-hover:text-accent transition-colors">{item.t}</h4>
                             <p className="text-text-secondary text-sm font-light leading-relaxed">{item.d}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="relative flex justify-center"
               >
                  <div className="w-full max-w-md aspect-[4/3] bg-navy p-16 flex flex-col justify-center text-center shadow-elite rounded-[2px] border border-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                     <div className="relative z-10">
                        <span className="text-accent text-7xl font-serif italic leading-none mb-6 block">30+ Years</span>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed">of Chauffeur Expertise <br/> in Bangalore Market</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default ServicesPage;
