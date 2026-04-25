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
          {/* Connector Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gray-medium z-0" />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = icons[i] || icons[0];
            return (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-medium flex items-center justify-center text-gold mb-8 group hover:border-gold transition-colors duration-500 shadow-xl">
                  <Icon size={32} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-navy text-xl font-bold mb-4 uppercase">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
