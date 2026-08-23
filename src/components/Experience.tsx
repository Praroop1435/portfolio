"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface ExperienceEntry {
  date: string;
  title: string;
  subtitle: string;
  points: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    date: "May 2025 – Present",
    title: "AI Automation Developer (Intern)",
    subtitle: "Relu Consultancy — Remote",
    points: [
      "Spearheaded the development of 6+ production-grade AI automation systems and full-stack SaaS platforms (including InsightFlow AI and AI Social Automate), driving significant operational efficiency for international clients.",
      "Architected and deployed scalable backend APIs, RAG chatbot engines, and multi-channel orchestration pipelines utilizing Python frameworks (FastAPI, Django, Flask) and LLMs (Claude, GPT-4o, Gemini) to process over 1,000 queries weekly.",
      "Engineered automated workflows for lead enrichment, social media scraping, and inventory management using n8n, Crawl4AI, and Celery, reducing manual processing time by up to 85%.",
      "Managed end-to-end deployment of 5+ applications on Hetzner VPS and Google Cloud Run using Docker, ensuring 99.9% uptime and reliable integrations with 4+ external APIs (Stripe, WhatsApp) and databases (PostgreSQL, MongoDB).",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      {experienceData.map((item, idx) => (
        <motion.div
          key={item.title}
          className="experience-item"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={{ delay: idx * 0.05 }}
        >
          <div className="experience-date">{item.date}</div>
          <div className="experience-content">
            <h3 className="experience-title">{item.title}</h3>
            <div className="experience-subtitle">{item.subtitle}</div>
            <ul className="experience-list">
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} className="experience-list-item">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

