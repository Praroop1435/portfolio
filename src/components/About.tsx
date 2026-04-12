"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function Overview() {
  return (
    <section className="overview-section" id="about">
      <motion.div
        className="overview-card"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
      >
        <div className="overview-item">
          <div className="overview-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <div className="overview-text">
            <span className="overview-label">Location</span>
            <span className="overview-value">Kolkata, West Bengal</span>
          </div>
        </div>

        <div className="overview-item">
          <div className="overview-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" /></svg>
          </div>
          <div className="overview-text">
            <span className="overview-label">Education</span>
            <span className="overview-value">B.Tech, Information Technology</span>
          </div>
        </div>

        <div className="overview-item">
          <div className="overview-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
          </div>
          <div className="overview-text">
            <span className="overview-label">Focus</span>
            <span className="overview-value">AI/ML, LLMs, RAG Pipelines</span>
          </div>
        </div>

        <div className="overview-item">
          <div className="overview-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <div className="overview-text">
            <span className="overview-label">Timezone</span>
            <span className="overview-value">IST (UTC+5:30)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
