"use client";

import React from "react";
import { HOW_IT_WORKS } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, Car, ShieldCheck } from "lucide-react";

const icons = [Calendar, Car, ShieldCheck];

const ProcessSection = () => {
  return (
    <section className="section-py bg-gray-light">
      <div className="ncm-container">
        <div className="text-center mb-24">
          <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 italic">The Philosophy</p>
          <h2 className="text-navy uppercase tracking-tight">The Journey Engineered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = icons[i] || icons[0];
            return (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <div className="bg-white rounded-[2.5rem] p-12 shadow-glass border border-gray-medium group-hover:border-accent transition-all duration-700 h-full flex flex-col items-center text-center group-hover:-translate-y-4 group-hover:shadow-lift">
                  <div className="w-24 h-24 rounded-3xl bg-background flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-navy transition-all duration-700 relative border border-gray-medium group-hover:border-accent">
                    <Icon size={40} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-navy text-white text-base font-black flex items-center justify-center border-4 border-background group-hover:border-accent transition-colors duration-700 font-serif italic">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-navy text-2xl font-black mb-6 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-muted text-base leading-relaxed">
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
