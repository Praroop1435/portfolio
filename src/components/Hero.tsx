"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-top"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="hero-info">
          <h1 className="hero-name">
            Praroop Anand
            <span className="verified-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </h1>
          <p className="hero-role">AI Engineer | Agentic Workflows, LLM SaaS &amp; Production Systems</p>
        </div>

        {/* GitHub Avatar */}
        <a
          href="https://github.com/praroop1435"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Praroop Anand GitHub Profile"
          className="hero-avatar"
        >
          <img
            src="https://github.com/praroop1435.png"
            alt="Praroop Anand"
            width={100}
            height={100}
          />
        </a>
      </motion.div>
    </section>
  );
}
