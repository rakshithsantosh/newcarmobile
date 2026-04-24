"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const item = testimonials[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
      <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 glass-panel p-8 sm:p-12 shadow-lift">
        <AnimatePresence mode="wait">
          <motion.article
            key={item.name}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-full flex-col justify-between"
          >
            <div>
              <div className="mb-6 flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="max-w-3xl text-2xl font-black leading-tight tracking-tight sm:text-4xl text-white">
                &quot;{item.quote}&quot;
              </blockquote>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/30">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-black text-white">{item.name}</p>
                <p className="text-sm font-medium text-white/50">{item.role}</p>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="grid gap-3">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            onClick={() => setActive(index)}
            className={`focus-ring group relative flex items-center overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
              active === index
                ? "border-gold/50 bg-gold/10 text-white"
                : "border-white/5 bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {active === index && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute left-0 top-0 h-full w-1 bg-gold"
              />
            )}
            <span className="ml-2 block">
              <span className={`block text-sm font-black transition-colors ${active === index ? "text-gold" : ""}`}>
                {testimonial.name}
              </span>
              <span className="mt-1 block text-xs font-medium opacity-70">
                {testimonial.role}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
