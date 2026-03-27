"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const projectsData = [
  {
    type: "Generative AI",
    name: "YT RAG Chatbot",
    desc: "A Retrieval-Augmented Generation chatbot enabling context-aware Q&A over YouTube video transcripts. Combines semantic chunking and LLM responses.",
    tags: ["LangChain", "FastAPI", "Vector DB"],
    link: "https://github.com/Praroop-Anand"
  },
  {
    type: "AI / NLP",
    name: "LLM Resume Matcher",
    desc: "An LLM-powered system matching resumes to JDs via semantic similarity, generating actionable career recommendations optimized for low-latency.",
    tags: ["Transformers", "RAG", "FastAPI"],
    link: "https://github.com/Praroop-Anand"
  },
  {
    type: "Automation",
    name: "Workflow Engine",
    desc: "Designed modular n8n workflows automating job search and filtering using LLM APIs — drastically reducing manual effort through event-driven automation.",
    tags: ["n8n", "Webhooks", "APIs"],
    link: "https://github.com/Praroop-Anand"
  },
  {
    type: "Data Science",
    name: "Churn Prediction",
    desc: "End-to-end churn prediction framework with feature engineering and classification models. Generated actionable data-driven retention insights.",
    tags: ["Pandas", "Scikit", "EDA"],
    link: "https://github.com/Praroop-Anand"
  }
];

export default function Projects() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ 
        padding: "16px 24px", 
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>Selected Projects</div>
        <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)" }}>02 // WORK</div>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {projectsData.map((project, idx) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.name}
            className="bento-cell interactive"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUp}
            transition={{ delay: idx * 0.1 }}
            style={{ 
              display: "flex", 
              flexDirection: "column",
              textDecoration: "none",
              borderBottom: idx < projectsData.length - 2 ? "1px solid var(--border-color)" : "none",
              borderRight: idx % 2 === 0 ? "1px solid var(--border-color)" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <div className="mono" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
                {project.type}
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              {project.name}
            </h3>
            
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--text-tertiary)", flex: 1, marginBottom: "20px" }}>
              {project.desc}
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map(tag => (
                <span key={tag} className="mono" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
                  [{tag}]
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
