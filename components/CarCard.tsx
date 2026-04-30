"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type Car = {
  name: string;
  type: string;
  price: string;
  image: string;
  specs: string[];
  badge?: string;
};

export function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="card-premium group min-w-[85vw] sm:min-w-0 overflow-hidden"
    >
      <div className="relative aspect-[1.45] bg-neutral-100">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {car.badge && (
          <span className="absolute left-6 top-6 glass-panel px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent rounded-lg z-10">
            {car.badge}
          </span>
        )}
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-[11px] font-bold text-muted uppercase tracking-widest">{car.type}</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight group-hover:text-navy transition-colors">{car.name}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] font-bold text-muted uppercase tracking-wider">
          {car.specs.map((spec) => (
            <span key={spec} className="rounded-lg bg-background px-4 py-2 border border-gray-medium group-hover:border-accent/30 transition-colors">
              {spec}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-gray-medium pt-6">
          <p className="flex flex-col">
            <span className="text-2xl font-black text-navy">{car.price}</span>
            <span className="text-[10px] text-muted uppercase font-bold tracking-widest">Base Rate</span>
          </p>
          <a
            href="#contact"
            className="w-12 h-12 bg-navy text-white flex items-center justify-center rounded-xl transition-all duration-500 group-hover:bg-accent group-hover:rotate-12 group-hover:shadow-glow"
          >
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
