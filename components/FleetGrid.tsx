"use client";

import React from "react";
import Link from "next/link";
import { FLEET } from "@/lib/data";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FleetGrid = ({ limit }: { limit?: number }) => {
  const displayFleet = limit ? FLEET.slice(0, limit) : FLEET;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {displayFleet.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card-premium h-full flex flex-col group"
        >
          {/* Image */}
          <div className="relative aspect-video overflow-hidden bg-background">
             <img 
               src={vehicle.image || "/images/fleet/mercedes-s.jpg"} 
               alt={vehicle.name}
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             <div className="absolute top-6 left-6 glass-panel px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent rounded-lg z-10">
               {vehicle.tier} Class
             </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-1">
             <div className="mb-6">
                <h3 className="text-navy text-2xl font-black mb-2 group-hover:text-accent transition-colors tracking-tight">{vehicle.name}</h3>
                <p className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] italic mb-4">{vehicle.category}</p>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{vehicle.description}</p>
             </div>

             <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-lighter mb-6">
                <div className="flex items-center gap-2">
                   <Users size={14} className="text-muted" />
                   <span className="text-xs font-semibold text-navy/70">{vehicle.specs.pax} PAX</span>
                </div>
                <div className="flex items-center gap-2">
                   <Briefcase size={14} className="text-muted" />
                   <span className="text-xs font-semibold text-navy/70">{vehicle.specs.luggage || 2} Luggage</span>
                </div>
             </div>

              <div className="mt-auto flex items-center justify-between border-t border-gray-medium pt-8">
                 <div>
                   <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-1">Elite Rate</p>
                   <p className="font-bold text-xl text-navy group-hover:text-accent transition-colors">{vehicle.priceEstimate}</p>
                 </div>
                 <Link 
                   href={`/fleet/${vehicle.id}`}
                   className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-navy group-hover:bg-accent group-hover:rotate-12 transition-all duration-500 hover:shadow-glow border border-gray-medium group-hover:border-accent"
                 >
                   <ChevronRight size={24} />
                 </Link>
              </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FleetGrid;
