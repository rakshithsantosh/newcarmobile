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
          <div className="relative aspect-16-9 overflow-hidden bg-gray-light">
             <img 
               src={vehicle.image || "/images/fleet/mercedes-s.jpg"} 
               alt={vehicle.name}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
               {vehicle.tier} Class
             </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
             <div className="mb-4">
                <h3 className="text-navy text-xl font-bold mb-1 group-hover:text-gold transition-colors">{vehicle.name}</h3>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest italic mb-3">{vehicle.category}</p>
                <p className="text-muted text-xs leading-relaxed line-clamp-2">{vehicle.description}</p>
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

             <div className="mt-auto flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black text-muted uppercase">Starting at</p>
                  <p className="font-bold text-navy group-hover:text-gold transition-colors">{vehicle.priceEstimate}</p>
                </div>
                <Link 
                  href={`/fleet/${vehicle.id}`}
                  className="w-10 h-10 bg-gray-light rounded-full flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-all group-hover:shadow-glow"
                >
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FleetGrid;
