"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group min-w-[82vw] overflow-hidden rounded-lg border border-neutral-200 bg-white text-ink shadow-lift sm:min-w-0"
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
          <span className="absolute left-4 top-4 rounded bg-ink px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-gold">
            {car.badge}
          </span>
        )}
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-sm font-semibold text-neutral-500">{car.type}</p>
          <h3 className="mt-1 text-2xl font-black tracking-tight">{car.name}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-600">
          {car.specs.map((spec) => (
            <span key={spec} className="rounded bg-neutral-100 px-3 py-2">
              {spec}
            </span>
          ))}
        </div>
        <div className="grid gap-4 border-t border-neutral-200 pt-5">
          <p>
            <span className="text-2xl font-black">{car.price}</span>
            <span className="text-sm text-neutral-500"> / day</span>
          </p>
          <a
            href="#contact"
            className="focus-ring rounded bg-ink px-4 py-3 text-center text-sm font-black text-white transition hover:bg-neutral-800 active:scale-[0.98]"
          >
            Check availability
          </a>
        </div>
      </div>
    </motion.article>
  );
}
