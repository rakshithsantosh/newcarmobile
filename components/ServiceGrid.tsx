"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceGrid = () => {
  // Define asymmetrical grid spans for 5 items (Bento Layout)
  const getColSpan = (index: number) => {
    switch(index) {
      case 0: return "col-span-1 lg:col-span-7";
      case 1: return "col-span-1 lg:col-span-5";
      case 2: return "col-span-1 lg:col-span-4";
      case 3: return "col-span-1 lg:col-span-4";
      case 4: return "col-span-1 lg:col-span-4";
      default: return "col-span-1 lg:col-span-4";
    }
  };

  const getHeight = (index: number) => {
    if (index < 2) return "h-[500px] md:h-[600px]";
    return "h-[450px] md:h-[500px]";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-16">
      {SERVICES.map((s, i) => {
        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 1.2, type: "spring", bounce: 0.2 }}
            className={`group relative overflow-hidden bg-[#111111] rounded-[8px] shadow-none hover:shadow-2xl border border-black/10 transition-all duration-700 hover:-translate-y-2 ${getColSpan(i)} ${getHeight(i)} flex flex-col justify-end`}
          >
            {/* Background Image with Parallax & Grayscale feel */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src={s.image} 
                 alt={s.title}
                 fill
                 className="object-cover opacity-60 group-hover:scale-[1.03] transition-transform duration-[2s] ease-out grayscale group-hover:grayscale-0"
               />
               {/* Enhanced Gradient for depth */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/10 z-10" />
               <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            </div>
            
            {/* Content pinned to bottom */}
            <div className="relative z-20 p-8 lg:p-12 h-full flex flex-col justify-end">
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 italic">
                Exclusive Specialist
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif italic text-white mb-4 tracking-tight leading-none group-hover:text-white transition-colors drop-shadow-md">
                {s.title}
              </h3>
              
              {/* Expandable description on hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out">
                <div className="overflow-hidden">
                  <p className="text-white/60 text-sm leading-relaxed font-light tracking-wide max-w-sm mb-6 pt-2">
                    {s.tagline}
                  </p>
                </div>
              </div>

              {/* Action area always at the bottom */}
              <div className="mt-2 border-t border-white/10 pt-6 flex items-center justify-between">
                <Link 
                  href={`/services/${s.id}`}
                  className="inline-flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-[0.3em] group/btn transition-all"
                >
                  Explore Details
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all">
                    <ArrowRight size={12} className="group-hover/btn:text-navy transition-colors text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
