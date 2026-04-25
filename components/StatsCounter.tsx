"use client";

import React, { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/data";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const isMillion = value.includes("M");
      const numStr = value.replace(/[^0-9.]/g, "");
      const finalNum = parseFloat(numStr);
      const isFloat = !Number.isInteger(finalNum);

      let start = 0;
      const duration = 2000;
      const frames = 60;
      const increment = finalNum / frames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= finalNum) {
          clearInterval(timer);
          setDisplayValue(value); // final exact string
        } else {
          const formatted = isFloat ? start.toFixed(1) : Math.floor(start).toString();
          setDisplayValue(formatted + (isMillion ? "M+" : "+"));
        }
      }, duration / frames);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatsCounter = () => {
  return (
    <section className="bg-navy py-20 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="ncm-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {SITE_CONFIG.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                 <div className="w-12 h-1 bg-gold rounded-full group-hover:w-20 transition-all duration-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter w-full block">
                <AnimatedNumber value={stat.value} />
              </h3>
              <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em] italic">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
