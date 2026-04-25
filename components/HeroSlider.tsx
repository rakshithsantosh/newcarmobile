"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBooking } from "./BookingProvider";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    title: "Maximizing Every Mile",
    subtitle: "Ensuring Excellence in Transportation",
    image: "/images/hero-1.png",
    cta: "Book a Ride"
  },
  {
    title: "Corporate Excellence",
    subtitle: "Reliable and Safe Employee Transportation",
    image: "/images/services/corporate.jpg",
    cta: "Request Quote"
  },
  {
    title: "Unforgettable Journeys",
    subtitle: "Premium Tourist Services Across India",
    image: "/images/fleet/mercedes-e.jpg",
    cta: "Explore Fleet"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const { openBooking } = useBooking();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className={styles.hero}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div 
            className={styles.bgImage} 
            style={{ backgroundImage: `linear-gradient(to right, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.2) 100%), url(${slides[current].image})` }}
          />
          
          <div className={`${styles.content} container`}>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.subtitle}
            >
              {slides[current].subtitle}
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={styles.title}
            >
              {slides[current].title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={styles.actions}
            >
              <button onClick={() => openBooking()} className="btn btn-primary btn-lg">
                {slides[current].cta}
              </button>
              <Link href="/fleet" className="btn btn-outline btn-lg">
                View Fleet
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.controlBtn}><ChevronLeft size={24} /></button>
        <button onClick={next} className={styles.controlBtn}><ChevronRight size={24} /></button>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span 
            key={i} 
            className={`${styles.dot} ${i === current ? styles.activeDot : ""}`} 
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
