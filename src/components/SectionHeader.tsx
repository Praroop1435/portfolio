"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function SectionStripe({ label }: { label: string }) {
  return (
    <motion.div
      className="section-stripe"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
    >
      <div className="section-stripe-inner">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span>{label}</span>
      </div>
    </motion.div>
  );
}
