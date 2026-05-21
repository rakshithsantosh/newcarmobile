"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceGrid = () => {
  const layoutStyles = [
    "h-[560px]",
    "h-[620px] lg:-mt-10",
    "h-[580px]",
    "h-[640px] lg:-mt-16",
    "h-[560px]"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-16">
      {SERVICES.map((s, i) => {
        const layoutStyle = layoutStyles[i % layoutStyles.length];
        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative ${layoutStyle} overflow-hidden bg-navy rounded-[2px] shadow-none hover:shadow-elite border border-white/5`}
          >
            <Image 
              src={s.image} 
              alt={s.title}
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2.5s] ease-out grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-10" />
            
            <div className="absolute inset-0 z-20 p-10 lg:p-12 flex flex-col justify-end">
              <p className="text-accent text-[9px] font-bold uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 italic">Exclusive Specialist</p>
              <h3 className="text-2xl lg:text-3xl font-serif italic text-white mb-4 tracking-tight leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2 font-light tracking-wide group-hover:text-white/60 transition-colors">
                {s.tagline}
              </p>
              
              <Link 
                href={`/services/${s.id}`}
                className="inline-flex items-center gap-4 text-white font-bold text-[9px] uppercase tracking-[0.4em] border-b border-white/10 pb-3 w-fit group/btn hover:border-accent transition-all"
              >
                Explore Details
                <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform text-accent" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
