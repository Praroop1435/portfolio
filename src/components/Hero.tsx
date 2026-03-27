"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Metadata Labels (Monospace) */}
      <motion.div
        className="mono"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ color: "var(--text-secondary)", fontSize: "11px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Available for work</span>
          <span style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
            Online
          </span>
        </div>
      </motion.div>

      {/* Main Identity */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
          Praroop Anand
        </h1>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>
          AI Engineer / Data Scientist
        </p>
      </motion.div>

      {/* Description */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-primary)" }}
      >
        Crafting scalable ML pipelines, LLM-powered applications, and data-driven products engineered with precision.
      </motion.div>

      {/* System Status / Quick Info Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.3 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "16px",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "24px"
        }}
      >
        <div>
          <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)", marginBottom: "4px" }}>Location</div>
          <div style={{ fontSize: "13px", color: "var(--text-primary)" }}>Kolkata, WB</div>
        </div>
        <div>
          <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)", marginBottom: "4px" }}>Timezone</div>
          <div style={{ fontSize: "13px", color: "var(--text-primary)" }}>IST (UTC+5:30)</div>
        </div>
      </motion.div>
    </div>
  );
}
