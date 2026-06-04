"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { useBooking } from "./BookingProvider";

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
  const { openBooking } = useBooking();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="surface-premium group overflow-hidden flex flex-col h-full bg-white border border-gray-100/60 rounded-[2px]"
    >
      <div className="relative aspect-[16/10] bg-white border-b border-gray-100/30 overflow-hidden flex items-center justify-center p-8">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain p-6 transition duration-1000 ease-out group-hover:scale-105"
        />
        {car.badge && (
          <span className="absolute left-6 top-6 bg-accent text-navy text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-[2px] z-10 shadow-sm border border-white/10">
            {car.badge}
          </span>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="caption mb-2 text-gold">{car.tier}</p>
            <h3 className="text-xl font-serif italic text-navy tracking-tight group-hover:text-accent transition-colors">{car.name}</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-5 border-y border-gray-100/60 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-navy/40">
               <Users size={12} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-secondary">{car.specs.pax} Passengers</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-navy/40">
               <Briefcase size={12} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-secondary">{car.specs.luggage} Luggages</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
           <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-text-muted mb-0.5">Rate Estimate</p>
              <p className="text-lg font-bold text-navy">{car.priceEstimate}</p>
           </div>
           <button 
             onClick={() => openBooking(car.id)}
             className="group/btn flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy hover:text-accent transition-colors py-2 cursor-pointer"
           >
              <span>Request Quote</span>
              <ArrowRight size={13} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
           </button>
        </div>
      </div>
    </motion.article>
  );
}
