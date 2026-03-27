"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "40px" }}>
      {/* Left: Section Info */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)", marginBottom: "12px" }}>
          03 // BACKGROUND
        </div>
        <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
          Education & History
        </div>
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            Currently pursuing my B.Tech in Information Technology at the Institute of Engineering & Management, Kolkata.
          </p>
          <p>
            I specialize at the intersection of Machine Learning, NLP, and production AI systems. My work revolves around building robust architectures for data extraction, semantic processing, and serving high-performance inference APIs.
          </p>
        </div>

        {/* Education Log */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "100px 1fr", 
            padding: "16px 0", 
            borderTop: "1px solid var(--border-color)",
            alignItems: "center"
          }}>
            <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)" }}>2023 - 2027</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>B.Tech — Information Tech</div>
              <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>Institute of Engineering & Management, Kolkata</div>
            </div>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "100px 1fr", 
            padding: "16px 0", 
            borderTop: "1px solid var(--border-color)",
            alignItems: "center"
          }}>
            <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)" }}>2021 - 2023</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>12th Standard — Computer Science</div>
              <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>Chinmaya Vidyalaya, Bokaro</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
