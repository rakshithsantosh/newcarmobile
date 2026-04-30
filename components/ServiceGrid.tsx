"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative h-[600px] overflow-hidden bg-navy !rounded-sm shadow-none hover:shadow-elite"
        >
          <Image 
            src={s.image} 
            alt={s.title}
            fill
            className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-[2s] grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-10" />
          
          <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
            <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 italic">Established Mobility</p>
            <h3 className="text-3xl font-serif text-white mb-6 tracking-tight leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-10 line-clamp-2 font-light tracking-wide group-hover:text-white/60 transition-colors">
              {s.tagline}
            </p>
            
            <Link 
              href={`/services/${s.id}`}
              className="inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] border-b border-white/10 pb-4 w-fit group/btn hover:border-accent transition-all"
            >
              Explore Details
              <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform text-accent" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;
