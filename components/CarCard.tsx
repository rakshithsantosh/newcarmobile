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
      className="surface-premium group overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain p-8 transition duration-1000 group-hover:scale-110"
        />
        {car.badge && (
          <span className="absolute left-6 top-6 bg-accent text-navy text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm z-10">
            {car.badge}
          </span>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="caption mb-2">{car.tier}</p>
            <h3 className="text-2xl tracking-tight group-hover:text-accent transition-colors">{car.name}</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-navy/40">
               <Users size={14} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">{car.specs.pax} PAX</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-navy/40">
               <Briefcase size={14} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">{car.specs.luggage} Bags</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
           <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-text-muted mb-1">Starting at</p>
              <p className="text-xl font-black text-navy">{car.priceEstimate}</p>
           </div>
           <button 
             onClick={() => openBooking(car.id)}
             className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 group/btn"
           >
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </motion.article>
  );
}
