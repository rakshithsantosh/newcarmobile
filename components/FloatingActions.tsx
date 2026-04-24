"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";
const callNumber = process.env.NEXT_PUBLIC_CALL_NUMBER ?? "+919876543210";

export function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
      className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-[1fr_auto] gap-3 rounded-2xl border border-white/10 p-3 shadow-glow glass-panel sm:hidden"
    >
      <motion.a
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20a%20premium%20rental.`}
        aria-label="Contact on WhatsApp"
        className="focus-ring relative flex h-14 items-center justify-center space-x-2 rounded-xl bg-gold px-4 text-sm font-black text-ink shadow-lg overflow-hidden group"
      >
        <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <MessageCircle size={20} className="animate-pulse" />
        <span>Chat on WhatsApp</span>
      </motion.a>
      
      <motion.a
        whileTap={{ scale: 0.95 }}
        href={`tel:${callNumber}`}
        aria-label="Call AstraDrive"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10"
      >
        <Phone size={20} />
      </motion.a>
    </motion.div>
  );
}
