"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative h-[450px] overflow-hidden bg-navy"
        >
          <img 
            src={s.image} 
            alt={s.title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
             <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block italic">Professional</span>
             <h3 className="text-white text-3xl font-bold mb-4 uppercase">{s.title}</h3>
             <p className="text-white/70 text-sm mb-8 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               {s.description}
             </p>
             <Link 
               href={`/services/${s.id}`}
               className="btn-gold !py-3 !px-8 !text-[11px] uppercase tracking-widest gap-3"
             >
               Explore Service <ArrowRight size={14} />
             </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;
