"use client";

import React, { use } from "react";
import { FLEET } from "@/lib/data";
import Image from "next/image";
import { ArrowLeft, Users, Briefcase, ShieldCheck, Gauge, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const VehicleDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const vehicle = FLEET.find(v => v.id === id);

  if (!vehicle) notFound();

  return (
    <main className="w-full">
      {/* Header / Hero */}
      <section className="bg-navy pt-40 pb-20 relative overflow-hidden">
        <div className="ncm-container relative z-10">
          <Link href="/fleet" className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest hover:translate-x-[-4px] transition-transform mb-12">
            <ArrowLeft size={16} /> Back to Fleet
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Currently Available</span>
              <h1 className="text-white uppercase mb-6">{vehicle.name}</h1>
              <p className="text-white/60 mb-10 max-w-lg leading-relaxed">
                {vehicle.description || "The gold standard for premium corporate travel in Bangalore. Perfectly maintained and chauffeured by vetted professionals."}
              </p>
              <div className="flex flex-wrap gap-12 border-t border-white/10 pt-10">
                <div>
                   <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">Seating</p>
                   <p className="text-white text-2xl font-black">{vehicle.specs.pax} PAX</p>
                </div>
                <div>
                   <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">Category</p>
                   <p className="text-white text-2xl font-black uppercase">{vehicle.tier}</p>
                </div>
                <div>
                   <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">Engine</p>
                   <p className="text-white text-2xl font-black uppercase">{vehicle.specs.engine || "Turbo"}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative"
            >
               <div className="aspect-16-9 bg-white/5 rounded-sm overflow-hidden border border-white/10 shadow-2xl relative">
                  <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-gold p-6 shadow-2xl hidden md:block">
                  <p className="text-white text-[10px] font-black uppercase mb-1">Elite Standard</p>
                  <p className="text-white text-xl font-black uppercase">Verified Fleet</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Integration Section */}
      <section className="section-py bg-white">
        <div className="ncm-container">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Features */}
              <div className="lg:col-span-8">
                 <h2 className="text-navy uppercase text-2xl md:text-3xl font-bold mb-10 pb-4 border-b border-gray-lighter">Operational Features</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                      { icon: Users, title: "Uniformed Chauffeur", desc: "Professionally trained and police verified drivers." },
                      { icon: ShieldCheck, title: "GPS Tracking", desc: "Real-time trip monitoring for safety and reporting." },
                      { icon: Gauge, title: "Elite Maintenance", desc: "Weekly mechanical audits and daily fluid checks." },
                      { icon: Briefcase, title: "Corporate Billing", desc: "Simplified monthly invoicing for our corporate partners." }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 shrink-0 bg-gray-light flex items-center justify-center text-gold">
                          <f.icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-navy font-bold uppercase text-sm mb-2">{f.title}</h4>
                          <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="p-8 bg-gray-light border-l-4 border-gold">
                    <h4 className="text-navy font-black uppercase text-xs mb-6 italic">Vehicle Amenities</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       {["Mobile Charging", "Daily Newspaper", "Water Bottles", "Umbrella Suite", "Tissues & Sanitizer", "First Aid Kit"].map(a => (
                         <div key={a} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-gold" />
                            <span className="text-xs font-bold text-navy/70 uppercase tracking-widest">{a}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Quick Inquiry Card */}
              <div className="lg:col-span-4">
                 <div className="sticky top-32 bg-navy p-10 shadow-2xl">
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2 italic">Corporate Estimate</p>
                    <h3 className="text-white text-5xl font-black mb-8">{vehicle.priceEstimate}</h3>
                    
                    <div className="space-y-4 mb-10 pt-4 border-t border-white/10">
                       <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                          <span className="text-white/50">Base Duration</span>
                          <span className="text-white">4 Hrs / 40 KM</span>
                       </div>
                       <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                          <span className="text-white/50">Fuel Priority</span>
                          <span className="text-white">Included</span>
                       </div>
                    </div>

                    <button className="btn-gold w-full py-5 text-sm uppercase">Book This Fleet</button>
                    <p className="text-center mt-6 text-white/40 text-[9px] font-black uppercase tracking-widest">Pricing subject to actual usage</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Similar Fleet Section */}
      <section className="section-py bg-gray-light border-y border-gray-medium">
         <div className="ncm-container">
            <h2 className="text-navy uppercase text-2xl md:text-3xl font-bold mb-12">Comparable Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {FLEET.filter(v => v.id !== id).slice(0, 3).map(v => (
                 <Link key={v.id} href={`/fleet/${v.id}`} className="card-premium h-full group bg-white p-6 flex flex-col">
                    <div className="aspect-16-9 overflow-hidden mb-6 relative">
                       <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-navy font-bold uppercase mb-2 group-hover:text-gold transition-colors">{v.name}</h4>
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest italic mt-auto">{v.tier} Class</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
};

export default VehicleDetailPage;
