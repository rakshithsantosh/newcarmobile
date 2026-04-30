"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase } from "lucide-react";

export type Car = {
  id: string;
  name: string;
  tier: string;
  specs: {
    pax: number;
    luggage: number;
    engine: string;
  };
  priceEstimate: string;
  image: string;
  badge?: string;
};

export function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-premium group min-w-[85vw] sm:min-w-0 overflow-hidden !rounded-sm !border-navy/5 shadow-none hover:shadow-elite bg-white"
    >
      <div className="relative aspect-[1.45] bg-neutral-100 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-1000 group-hover:scale-110"
        />
        {car.badge && (
          <span className="absolute left-6 top-6 glass-panel px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent rounded-lg z-10 border border-white/10">
            {car.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">{car.tier} Tier</p>
            <h3 className="text-2xl font-serif text-navy tracking-tight group-hover:text-gold transition-colors">{car.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-widest text-navy/30 mb-1">Starting</p>
            <p className="text-xl font-black text-navy">{car.priceEstimate}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-navy/5">
          <div className="flex items-center gap-3">
            <Users size={16} className="text-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/60">{car.specs.pax} Passengers</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase size={16} className="text-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/60">{car.specs.luggage} Luggage</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
