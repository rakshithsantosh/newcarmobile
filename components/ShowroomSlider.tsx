"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FLEET } from "@/lib/data";
import { useBooking } from "./BookingProvider";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ShowroomSlider = () => {
  const containerRef = useRef(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-ink">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="section-shell absolute top-24 left-0 right-0 z-20">
          <div className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.4em] font-black text-xs mb-4">Elite Collection</p>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              VIRTUAL <br /> <span className="text-muted">SHOWROOM</span>
            </h2>
          </div>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-12 pl-[10%]">
          {FLEET.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group relative flex-shrink-0 w-[400px] md:w-[600px] h-[500px] glass overflow-hidden border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent z-10" />
              <Image 
                src={vehicle.image} 
                alt={vehicle.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                <p className="text-gold text-xs font-black uppercase tracking-widest mb-2">{vehicle.tier} Class</p>
                <h3 className="text-4xl font-black mb-4 group-hover:text-gold transition-colors">{vehicle.name}</h3>
                <div className="flex items-center gap-6 text-xs text-muted font-bold tracking-widest uppercase mb-8">
                   <span>{vehicle.specs.pax} PAX</span>
                   <div className="w-1 h-1 rounded-full bg-white/20" />
                   <span>{vehicle.specs.engine}</span>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => openBooking(vehicle.id)}
                    className="btn-premium !px-6 !py-3 flex-1"
                  >
                    <span>Instant Reserve</span>
                  </button>
                  <Link 
                    href={`/fleet/${vehicle.id}`}
                    className="w-14 h-14 glass flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-500"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final Card */}
          <div className="flex-shrink-0 w-[400px] md:w-[600px] h-[500px] flex flex-col items-center justify-center border-2 border-dashed border-gold/20 p-12 text-center">
             <h3 className="text-3xl font-black mb-6">Discovery Limitless <br/> Fleet Solutions</h3>
             <Link href="/fleet" className="btn-premium"><span>View Full Catalogue</span></Link>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="section-shell absolute bottom-12 left-0 right-0 flex items-center justify-between pointer-events-none">
           <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
              <span>Scroll to navigate</span>
              <div className="w-24 h-[1px] bg-white/10" />
              <span>Elite Fleet v2.0</span>
           </div>
           <div className="hidden md:block text-[10px] font-black uppercase tracking-widest text-gold opacity-50">
              Precision Guaranteed
           </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSlider;
