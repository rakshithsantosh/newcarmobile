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
    <section className="bg-navy py-32 text-white relative overflow-hidden">
      {/* Premium Ambient Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />
      </motion.div>

      <div className="ncm-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {SITE_CONFIG.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center group md:border-r last:border-r-0 border-white/10 px-8"
            >
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-4 tracking-tighter drop-shadow-2xl group-hover:text-accent transition-colors duration-500 font-serif">
                <AnimatedNumber value={stat.value} />
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-accent mb-6 rounded-full group-hover:w-20 transition-all duration-700" />
                <p className="text-white/40 text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
