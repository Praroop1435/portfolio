"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function Overview() {
  return (
    <section className="overview-section" id="about">
      <motion.div
        className="overview-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
      >
        <div className="overview-card">
          {/* Mastery & Core Focus Header */}
          <div className="overview-mastery-header">
            <h2 className="overview-mastery-title">
              Mastery in n8n &amp; Automations
            </h2>
            <p className="overview-mastery-desc">
              Architecting enterprise orchestration pipelines, webhook systems, autonomous AI agents, and end-to-end data workflows engineered for 99.9% reliability.
            </p>
          </div>

          <div className="overview-card-divider" />

          {/* Details Grid */}
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="overview-text">
                <span className="overview-label">Location</span>
                <span className="overview-value">India</span>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <div className="overview-text">
                <span className="overview-label">Experience</span>
                <span className="overview-value">15+ Production Projects Delivered</span>
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              </div>
              <div className="overview-text">
                <span className="overview-label">Focus</span>
                <span className="overview-value">Backend Architectures, Automating Manual Tasks &amp; Agentic AI</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
