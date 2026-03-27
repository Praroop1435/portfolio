"use client";

import { motion } from "framer-motion";
import { revealFromBelow, viewportConfig } from "@/lib/animations";
import SectionHeader from "./SectionHeader";

export default function SectionHeaderComponent({
  number,
  eyebrow,
  title,
  showDivider = true,
}: {
  number: string;
  eyebrow: string;
  title: string;
  showDivider?: boolean;
}) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={revealFromBelow}
    >
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {showDivider && <div className="section-divider" />}
    </motion.div>
  );
}
