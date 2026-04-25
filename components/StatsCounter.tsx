"use client";

import React, { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/data";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="bg-navy py-24 text-white relative overflow-hidden">
      {/* Cinematic Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </motion.div>

      <div className="ncm-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 border-t border-b border-white/10 py-16">
          {SITE_CONFIG.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-center group border-r last:border-r-0 border-white/10"
            >
              <div className="mb-6 flex justify-center">
                 <div className="w-8 h-[2px] bg-gold group-hover:w-16 transition-all duration-500 ease-out" />
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter w-full block drop-shadow-2xl">
                <AnimatedNumber value={stat.value} />
              </h3>
              <p className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-sans">
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
