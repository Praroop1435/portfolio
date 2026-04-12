"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const certs = [
  { provider: "Google", name: "Generative AI Fundamentals (Google Cloud Skills Boost)" },
  { provider: "DeepLearning.AI", name: "LangChain for LLM Application Development (Coursera)" },
  { provider: "DeepLearning.AI", name: "Building Agentic RAG with LlamaIndex (Coursera)" },
  { provider: "Databricks", name: "Generative AI Fundamentals" },
  { provider: "Self-Paced", name: "100 Days of ML, 100 Days of DL" },
];

export default function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      {certs.map((cert, idx) => (
        <motion.div
          key={cert.name}
          className="cert-item"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={{ delay: idx * 0.03 }}
        >
          <div className="cert-bullet" />
          <div className="cert-text">
            <span className="cert-provider">{cert.provider}</span> — {cert.name}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
