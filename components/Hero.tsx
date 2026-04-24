"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );
    }

    if (subtextRef.current) {
      tl.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Cinematic luxury car"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%] opacity-80"
          quality={100}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="section-shell relative z-10 flex h-full flex-col justify-end pb-24 sm:pb-32 lg:pb-40 text-white">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-[2px] w-8 bg-gold"></span>
            <span>Premium Fleet</span>
          </motion.p>

          <h1
            ref={headlineRef}
            className="text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="block overflow-hidden"><span className="inline-block">Drive Luxury.</span></span>
            <span className="block overflow-hidden"><span className="inline-block text-gold">Instantly.</span></span>
          </h1>

          <p
            ref={subtextRef}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/70 sm:text-xl"
          >
            Arrive in style. Our verified luxury fleet is ready for immediate booking, seamless delivery, and unmatched comfort.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20rent%20a%20luxury%20car"
              className="focus-ring group relative flex items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 font-black tracking-wide text-ink transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-24 bg-white/30" />
              </div>
              Book via WhatsApp
            </a>
            <a
              href="#featured"
              className="focus-ring rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              View Fleet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
