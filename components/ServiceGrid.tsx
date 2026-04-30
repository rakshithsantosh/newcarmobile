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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative h-[450px] overflow-hidden bg-navy"
        >
          <Image 
            src={s.image} 
            alt={s.title}
            fill
            className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
             <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-4 block italic">Exclusive Solution</span>
             <h3 className="text-white text-3xl font-medium mb-6 uppercase tracking-tight font-serif italic">{s.title}</h3>
             <p className="text-white/60 text-base mb-10 line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
               {s.description}
             </p>
             <Link 
               href={`/services/${s.id}`}
               className="btn-accent !py-4 !px-10 !text-[11px] uppercase tracking-[0.3em] gap-3 !rounded-xl"
             >
               View Details <ArrowRight size={16} />
             </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;
