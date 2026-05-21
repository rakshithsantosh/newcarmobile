"use client";

import React from "react";
import { HOW_IT_WORKS } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, Car, ShieldCheck } from "lucide-react";

const icons = [Calendar, Car, ShieldCheck];

const ProcessSection = () => {
  return (
    <section className="section-py bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="ncm-container relative z-10">
        <div className="text-center mb-32">
          <p className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-8 italic">The Philosophy</p>
          <h2 className="text-navy uppercase tracking-tighter font-serif text-5xl md:text-7xl leading-none">The Journey Engineered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = icons[i] || icons[0];
            return (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between"
              >
                <div className="relative bg-background border border-gray-100 p-12 hover:border-accent transition-all duration-700 h-full flex flex-col items-start rounded-[2px] group-hover:-translate-y-2 group-hover:shadow-elite">
                  {/* Decorative Number Overlay */}
                  <span className="absolute right-8 top-4 text-9xl font-serif italic text-navy/[0.03] select-none group-hover:text-accent/[0.08] transition-colors duration-700 pointer-events-none">
                    0{step.step}
                  </span>

                  <div className="w-16 h-16 bg-white border border-navy/5 flex items-center justify-center text-accent mb-12 group-hover:bg-navy group-hover:text-white transition-all duration-700 rounded-[2px]">
                    <Icon size={28} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-navy text-2xl font-serif italic tracking-tight mb-6 group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-text-secondary font-light text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
