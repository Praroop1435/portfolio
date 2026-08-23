"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { skillLogos } from "@/components/Skills";

export const projectsData = [
  {
    name: "InsightFlow AI",
    desc: "Developed a full-stack platform delivering 5 AI modules (RAG chatbot, Policy Summarizer, Sales Assistant) for a US agency. Benchmarked retrieval quality with RAGAS, achieving a 92% accuracy score, and implemented semantic search using pgvector to reduce query latency by 40%.",
    tags: ["FastAPI", "React/Vite", "PostgreSQL", "pgvector", "Claude", "RAGAS"],
    year: "2025 – Present",
    link: "https://portal.e360insurance.com/",
  },
  {
    name: "AI Social Automate",
    desc: "Designed backend with 21 SQL tables, 7 NoSQL collections, Firebase JWT auth, and task queues. Integrated Stripe/Razorpay webhooks with 100% idempotency and implemented lead-scraping connectors for 5 major social platforms, acquiring 500+ daily leads.",
    tags: ["Django 5.1", "PostgreSQL", "MongoDB", "Celery", "Redis", "Stripe"],
    year: "2025 – Present",
    link: "https://aisocialautomate.com",
  },
  {
    name: "Lead Enrichment Pipeline",
    desc: "Engineered a nightly cron-triggered API that auto-enriches 100+ client leads from SOW documents and web scrapes. Summarized all data into structured JSON with Gemini, reducing manual research time by ~85%.",
    tags: ["Flask", "Gemini 2.5 Flash", "Crawl4AI", "SerpAPI", "Python"],
    year: "2025",
    link: "https://github.com/Praroop1435",
  },
  {
    name: "Inventory & Email Automation Systems",
    desc: "Architected a multi-channel watch offer system integrating messaging webhooks with intent extraction via GPT-4o-mini, successfully processing 200+ offers weekly. Configured 10+ workflows to classify freight inquiries, deduplicating leads by 30% and logging 100% of outcomes with AI-generated audit reasons.",
    tags: ["n8n", "GPT-4o-mini", "WhatsApp", "Telegram", "ClickUp", "Webhooks"],
    year: "2025",
    link: "https://github.com/Praroop1435",
  },
  {
    name: "AviationOps Dashboard",
    desc: "Redesigned schema for a US FBO to display 50+ live service orders daily, connecting check-in forms to auto-populate production records and saving 15 hours of manual entry per week.",
    tags: ["Airtable", "Fillout"],
    year: "2025",
    link: "https://github.com/Praroop1435",
  },
  {
    name: "Vinted Scout",
    desc: "Developed a Cloudflare-bypass scraper with a custom LFPI underpricing score to monitor 5,000+ items daily, automating Discord reports and like-tracking to secure deals 3x faster.",
    tags: ["Python", "curl-cffi", "Playwright", "MongoDB", "Discord API"],
    year: "2025",
    link: "https://github.com/Praroop1435",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      {projectsData.map((project, idx) => (
        <motion.a
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
          style={{ display: "block", textDecoration: "none" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={{ delay: idx * 0.05 }}
        >
          <div className="project-header">
            <h3 className="project-name">{project.name}</h3>
            <svg className="project-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-meta">
            <span className="project-year">{project.year}</span>
            <div className="experience-tags">
              {project.tags.map((tag) => {
                const hasLogo = !!skillLogos[tag];
                return (
                  <span key={tag} className={`tech-tag ${hasLogo ? "tech-tag-with-logo" : ""}`}>
                    {hasLogo && (
                      <img
                        src={skillLogos[tag]}
                        alt={tag}
                        width={18}
                        height={18}
                        className="tech-tag-logo"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.remove('tech-tag-with-logo');
                        }}
                      />
                    )}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.a>
      ))}
    </section>
  );
}
