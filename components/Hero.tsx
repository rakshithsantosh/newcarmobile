"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const carSlides = [
  {
    image: "/images/fleet/mercedes-glc.png",
    name: "Mercedes GLC"
  },
  {
    image: "/images/fleet/bmw-sedan.png",
    name: "BMW Sedan"
  },
  {
    image: "/images/fleet/audi-q7.png",
    name: "Audi Q7"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center">
      {/* Background Image (Right Side Cityscape) */}
      <div className="absolute right-0 top-0 w-3/4 h-full z-0">
        <Image
          src="/images/cityscape-bg.png"
          alt="Cityscape Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Curved Divider Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full preserve-aspect-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H600C750 0 850 400 950 800H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="ncm-container relative z-20 w-full flex flex-col md:flex-row items-center pt-20">
        {/* Left Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <motion.span
            variants={itemVariants}
            className="text-accent font-semibold text-lg md:text-xl mb-4"
          >
            Plan your trip now
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-navy text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-lg"
          >
            Explore the world with comfortable car
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted text-base md:text-lg mb-10 max-w-md leading-relaxed"
          >
            Experience premium mobility tailored to your needs. From executive travel to airport transfers, we ensure your journey is seamless and comfortable.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              Choose a Car
            </button>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div variants={itemVariants} className="flex gap-2 mt-16">
            {carSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-accent scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Slider Area (Car) */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={carSlides[current].image}
                alt={carSlides[current].name}
                width={800}
                height={500}
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .preserve-aspect-none {
          preserveAspectRatio: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
