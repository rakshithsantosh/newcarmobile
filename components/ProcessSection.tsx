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
        <div className="text-center mb-16">
          <p className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 italic">The Journey</p>
          <h2 className="text-navy uppercase">How It Works</h2>
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
                <div className="bg-white rounded-3xl p-10 shadow-glass border border-gray-medium group-hover:border-gold transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2 group-hover:shadow-glow">
                  <div className="w-20 h-20 rounded-2xl bg-gray-light flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all duration-500 relative">
                    <Icon size={36} className="group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-navy text-white text-sm font-black flex items-center justify-center border-4 border-gray-light group-hover:border-gold transition-colors duration-500">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-navy text-2xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
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
