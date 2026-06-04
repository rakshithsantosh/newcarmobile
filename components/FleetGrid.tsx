"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FLEET } from "@/lib/data";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

interface FleetGridProps {
  limit?: number;
  category?: string;
}

const FleetGrid = ({ limit, category }: FleetGridProps) => {
  const { openBooking } = useBooking();
  let displayFleet = FLEET;
  if (category) {
    displayFleet = displayFleet.filter(vehicle => vehicle.category === category);
  }
  if (limit) {
    displayFleet = displayFleet.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {displayFleet.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-gray-100/60 rounded-[2px] shadow-none hover:shadow-elite h-full flex flex-col group transition-all duration-700"
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-white border-b border-gray-100/30 flex items-center justify-center p-6">
             <Image 
               src={vehicle.image || "/images/fleet/mercedes-s.jpg"} 
               alt={vehicle.name}
               fill
               className="object-contain p-6 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
             />
             <div className="absolute top-6 left-6 surface-glass px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-navy border border-accent/15 rounded-[2px] z-10 shadow-sm">
               {vehicle.tier} Tier
             </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-1">
             <div className="mb-6">
                <h3 className="text-navy text-lg font-serif italic mb-1.5 group-hover:text-accent transition-colors tracking-tight leading-tight">{vehicle.name}</h3>
                <p className="text-accent text-[9px] font-bold uppercase tracking-[0.25em] italic mb-3">{vehicle.category} Collection</p>
                <p className="text-text-secondary text-sm font-light leading-relaxed line-clamp-2">{vehicle.description}</p>
             </div>

             <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100/60 mb-6">
                <div className="flex items-center gap-2.5">
                   <Users size={12} strokeWidth={1.5} className="text-navy/40" />
                   <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-text-secondary">{vehicle.specs.pax} PAX</span>
                </div>
                <div className="flex items-center gap-2.5">
                   <Briefcase size={12} strokeWidth={1.5} className="text-navy/40" />
                   <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-text-secondary">{vehicle.specs.luggage || 2} Bags</span>
                </div>
             </div>

              <div className="mt-auto flex items-center justify-between border-t border-gray-100/30 pt-6">
                 <div>
                   <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-0.5">Rate Estimate</p>
                   <p className="font-bold text-lg text-navy group-hover:text-accent transition-colors">Request Quote</p>
                 </div>
                 <button 
                   onClick={() => openBooking(vehicle.id)}
                   className="w-12 h-12 rounded-[2px] bg-background border border-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white cursor-pointer transition-all duration-500"
                 >
                   <ChevronRight size={18} />
                 </button>
              </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FleetGrid;
