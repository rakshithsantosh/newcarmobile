"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Car } from "./CarCard";

export function FeaturedCars({ cars }: { cars: Car[] }) {
  return (
    <section id="featured" className="bg-ink py-24 sm:py-32 text-white">
      <div className="section-shell">
        <div className="mb-12 md:mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">
              The Collection
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Curated for the bold.
            </h2>
          </div>
          <p className="mt-4 max-w-sm text-base text-white/60 md:mt-0">
            A meticulous selection of the finest vehicles, ready to be driven. 
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:px-0 sm:pb-0">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative min-w-[85vw] snap-center sm:min-w-0"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-graphite shadow-lift sm:aspect-[3/4]">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 85vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {car.badge && (
                  <div className="absolute left-6 top-6 z-20 rounded-full glass-panel px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold text-shadow-sm">
                    {car.badge}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-300 z-10" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
                  <h3 className="text-2xl font-black tracking-tight text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                    {car.name}
                  </h3>
                  <p className="text-sm font-medium text-white/50 mb-6 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    {car.type}
                  </p>

                  <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div>
                      <span className="text-xl font-black text-white">{car.price}</span>
                      <span className="text-xs text-white/50">/day</span>
                    </div>
                    <a
                      href={`https://wa.me/919876543210?text=Booking%20enquiry%20for%20${encodeURIComponent(car.name)}`}
                      className="rounded-full bg-gold/90 px-5 py-2 text-xs font-black uppercase tracking-wider text-ink backdrop-blur shadow-glow hover:bg-gold transition-colors"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
