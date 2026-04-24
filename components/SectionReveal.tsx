"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionReveal({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-96px" }}
      transition={{ duration: 0.56, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
