"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock } from "lucide-react";

const factors = [
  {
    icon: ShieldCheck,
    title: "Verified Fleet",
    body: "Impeccably maintained luxury vehicles. Photographed and audited before every single handover.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    body: "No long forms. A bespoke concierge experience directly via WhatsApp, guaranteeing your vehicle.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    body: "Immediate assistance. Whether it's a late airport arrival or a route query, we're always online.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="trust" className="bg-graphite py-24 sm:py-32 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">
            The Difference
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Beyond standard rental.
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-16">
          {factors.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group flex flex-col items-center text-center px-4"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl glass-panel text-gold shadow-glow transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{item.title}</h3>
                <p className="text-base leading-relaxed text-white/60">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
