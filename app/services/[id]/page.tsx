"use client";

import React, { use } from "react";
import { SERVICES } from "@/lib/data";
import { ArrowLeft, ShieldCheck, Clock, MapPin, Briefcase, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const ServiceDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const service = SERVICES.find(s => s.id === id);

  if (!service) notFound();

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div className="ncm-container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest hover:translate-x-[-4px] transition-transform mb-12">
            <ArrowLeft size={16} /> Back to Overview
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 italic">The Service Standard</p>
              <h1 className="text-white uppercase mb-8">{service.title}</h1>
              <h4 className="text-white/60 text-xl font-medium mb-8 italic">&quot;{service.tagline}&quot;</h4>
              <p className="text-white/70 max-w-lg leading-relaxed mb-12 font-medium">
                {service.description} We combine three decades of operational knowledge with the latest fleet technology to deliver zero-stress transportation solutions in Bangalore.
              </p>
              <button className="btn-gold !px-10">Request Corporate Proposal</button>
            </motion.div>
            
            <div className="relative">
               <div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative">
                  <Image src={service.image} alt={service.title} fill className="object-cover grayscale brightness-50" />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <Zap size={64} className="text-gold animate-pulse mb-4" />
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] text-center">Operational Excellence</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-py bg-white">
        <div className="ncm-container">
           <div className="mb-20">
              <h2 className="text-navy uppercase mb-6">Service Benefits</h2>
              <div className="w-20 h-1 bg-gold rounded-full" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, t: "Fully Insured", d: "Comprehensive coverage for every passenger on every trip." },
                { icon: Clock, t: "Zero Latency", d: "Automatic backup vehicle dispatch if primary encounters any issue." },
                { icon: MapPin, t: "GPS Perimeter", d: "Geofencing and route optimization for maximum efficiency." },
                { icon: Briefcase, t: "Billing Accuracy", d: "Detailed travel logs and transparent distance reporting." }
              ].map((b, i) => (
                <div key={i} className="p-10 bg-gray-light border border-gray-medium group hover:border-gold transition-colors duration-500">
                   <div className="w-12 h-12 bg-white flex items-center justify-center text-gold mb-8 shadow-md">
                      <b.icon size={24} />
                   </div>
                   <h4 className="text-navy font-bold uppercase text-sm mb-4">{b.t}</h4>
                   <p className="text-muted text-xs leading-relaxed">{b.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Execution Plan */}
      <section className="section-py bg-gray-light">
         <div className="ncm-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <h2 className="text-navy uppercase">Operational Workflow</h2>
                  
                  <div className="space-y-10">
                     {[
                       { t: "Requirement Audit", d: "We analyze your specific travel patterns, employee density, or event requirements." },
                       { t: "Custom Fleet Allocation", d: "Selection of specific vehicle tiers and chauffeuring teams for your business." },
                       { t: "On-Ground Management", d: "Integration with our 24/7 command center for live dispatching and monitoring." },
                       { t: "Performance Reporting", d: "Monthly audits of on-time metrics, fuel efficiency, and user satisfaction." }
                     ].map((step, i) => (
                       <div key={i} className="flex gap-6">
                          <span className="text-gold font-serif italic text-4xl leading-none">0{i+1}</span>
                          <div>
                             <h4 className="text-navy font-black uppercase text-sm mb-2">{step.t}</h4>
                             <p className="text-muted text-xs leading-relaxed">{step.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-navy p-16 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                  <div className="relative z-10">
                     <h3 className="text-white text-3xl font-black mb-8">Ready to Optimize Your Fleet?</h3>
                     <p className="text-white/60 mb-12 text-sm leading-relaxed mx-auto max-w-sm">
                        Connect with our corporate mobility specialists for a customized transport audit of your Bangalore operations.
                     </p>
                     <button className="btn-gold w-full py-5 text-sm uppercase">Get Your Proposal</button>
                     <p className="mt-8 text-[10px] font-black uppercase text-white/30 tracking-widest">Average response time: 2 hours</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
