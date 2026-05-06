"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTS = [
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", scale: 1.0 },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/2/a0/Wipro_Logo.svg", scale: 1.2 },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", scale: 1.0 },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", scale: 1.0 },
  { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Philips_logo_new.svg", scale: 1.0 },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", scale: 1.0 },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", scale: 1.0 },
  { name: "TATA", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg", scale: 1.0 },
];

const ClientMarquee = () => {
  // Triple the array to create a continuous, dense stream
  const doubledClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="ncm-container mb-24 relative z-20">
         <p className="text-center caption !text-text-muted">Pillars of Our Global Legacy</p>
      </div>

      <div className="relative flex overflow-x-hidden pt-12 pb-8">
        <motion.div
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-32 px-16"
        >
          {doubledClients.map((client, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-40 h-16 relative flex-none"
              style={{ transform: `scale(${client.scale})` }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default ClientMarquee;
