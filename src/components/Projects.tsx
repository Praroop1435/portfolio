"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { skillLogos } from "@/components/Skills";

export interface ProjectItem {
  name: string;
  badge?: string;
  desc: string;
  tags: string[];
  year: string;
  link: string;
  previewImage?: string;
  domain?: string;
}

export const projectsData: ProjectItem[] = [
  {
    name: "InsightFlow AI",
    badge: "US Insurance AI SaaS",
    desc: "Enterprise AI SaaS platform engineered for a US insurance agency, delivering 5 production modules: RAG chatbot, policy summarizer, and sales intelligence. Benchmarked retrieval quality at 92% accuracy using RAGAS and implemented semantic vector search with pgvector to cut query latency by 40%.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Claude API", "RAGAS"],
    year: "2026 - Present",
    link: "https://portal.e360insurance.com",
    previewImage: "/projects/insightflow.png",
    domain: "portal.e360insurance.com",
  },
  {
    name: "AI Social Automate",
    badge: "Social Media Automation SaaS",
    desc: "Full-scale platform for automated social media lead acquisition and multi-platform content publishing across IG, Facebook, LinkedIn, TikTok, and X. Engineered the complete backend infrastructure: Firebase JWT auth, PayPal & Stripe billing webhooks, API-as-a-service with interactive documentation, rate limiting, and token refresh rotation using Django 5.1, Celery, Redis, PostgreSQL, and MongoDB.",
    tags: ["Django 5.1", "PostgreSQL", "MongoDB", "Celery", "Redis", "Stripe", "PayPal"],
    year: "2026 - Present",
    link: "https://aisocialautomate.com",
    previewImage: "/projects/aisocialautomate.png",
    domain: "aisocialautomate.com",
  },
  {
    name: "Nexus Outreach Engine",
    badge: "AI Cold Outreach & Activity Tracking",
    desc: "End-to-end cold outreach automation platform featuring two-way Google Sheets lead ingestion and LLM-driven hyper-personalized email generation. Developed an embeddable website tracking script with UTM magic links to monitor prospect sessions and conversions via webhooks, orchestrated with Celery background workers for multi-stage follow-up scheduling (+5, +10, +15 days), inbox reply classification, and anti-spam sending throttles.",
    tags: ["FastAPI", "React", "Celery", "Redis", "PostgreSQL", "Google Sheets API", "Webhooks", "OpenAI"],
    year: "2026 - Present",
    link: "https://outreach.reluconsultancy.in",
    previewImage: "/projects/outreach-engine.png",
    domain: "outreach.reluconsultancy.in",
  },
  {
    name: "Lead Enrichment Pipeline",
    badge: "AI Data Intelligence Pipeline",
    desc: "Automated cron-triggered pipeline that extracts and enriches 100+ client leads nightly from SOW documents and web scrapes into structured JSON via Gemini 2.5 Flash, reducing manual research effort by 85%.",
    tags: ["Flask", "Gemini 2.5 Flash", "Crawl4AI", "SerpAPI", "Python"],
    year: "2026",
    link: "https://github.com/Praroop1435",
  },
  {
    name: "Inventory & Email Automation Systems",
    badge: "Multi-Channel Orchestration",
    desc: "Architected a multi-channel watch offer system integrating messaging webhooks with intent extraction via GPT-4o-mini, successfully processing 200+ offers weekly. Configured 10+ workflows to classify freight inquiries, deduplicating leads by 30% and logging 100% of outcomes with AI-generated audit reasons.",
    tags: ["n8n", "GPT-4o-mini", "WhatsApp", "Telegram", "ClickUp", "Webhooks"],
    year: "2026",
    link: "https://github.com/Praroop1435",
  },
  {
    name: "Airtable Full-Stack MCP",
    badge: "Open-Source DevTool (npm & Glama A)",
    desc: "Architected the world's first dual-engine Model Context Protocol (MCP) server for Airtable published on npm. Pairs official REST and Metadata APIs with Chrome CDP browser automation, enabling AI agents in Claude, Cursor, and Antigravity to programmatically build live Airtable Interfaces, Kanbans, webhooks, and deploy in-base automation scripts. Rated 4.7/5 (Grade A) on Glama across 14 production tools.",
    tags: ["TypeScript", "Node.js", "Chrome CDP", "MCP", "Airtable", "npm"],
    year: "2026 - Present",
    link: "https://www.npmjs.com/package/airtable-fullstack-mcp",
    previewImage: "/projects/airtable-mcp.png",
    domain: "npmjs.com/package/airtable-fullstack-mcp",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const openProjectLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-list">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.name}
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            transition={{ delay: idx * 0.05 }}
            onClick={() => openProjectLink(project.link)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openProjectLink(project.link);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.name} in a new tab`}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              if (project.previewImage) setHoveredProject(project);
            }}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Header */}
            <div className="project-header">
              <div className="project-title-area">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-name-link"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => {
                    if (project.previewImage) setHoveredProject(project);
                  }}
                >
                  <h3 className="project-name">{project.name}</h3>
                  <svg
                    className="project-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                {project.badge && (
                  <span className="project-category-badge">{project.badge}</span>
                )}
              </div>
              <span className="project-year">{project.year}</span>
            </div>

            {/* Description */}
            <p
              className="project-desc"
              onMouseEnter={() => {
                if (project.previewImage) setHoveredProject(project);
              }}
            >
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="project-footer">
              <div className="experience-tags">
                {project.tags.map((tag) => {
                  const hasLogo = !!skillLogos[tag];
                  return (
                    <span
                      key={tag}
                      className={`tech-tag ${hasLogo ? "tech-tag-with-logo" : ""}`}
                    >
                      {hasLogo && (
                        <img
                          src={skillLogos[tag]}
                          alt={tag}
                          width={18}
                          height={18}
                          className="tech-tag-logo"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement?.classList.remove(
                              "tech-tag-with-logo"
                            );
                          }}
                        />
                      )}
                      <span>{tag}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Hover Preview Card (Clean, compact, and clickable in new tab) */}
      <AnimatePresence>
        {hoveredProject && hoveredProject.previewImage && (
          <motion.div
            className="floating-preview-card"
            initial={{ opacity: 0, scale: 0.94, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={() => openProjectLink(hoveredProject.link)}
            title={`Open ${hoveredProject.name} in a new tab`}
            style={{
              top: `${Math.min(
                Math.max(mousePos.y - 120, 16),
                (typeof window !== "undefined" ? window.innerHeight : 800) - 220
              )}px`,
              left: `${Math.min(
                mousePos.x + 20,
                (typeof window !== "undefined" ? window.innerWidth : 1200) - 305
              )}px`,
              cursor: "pointer",
            }}
          >
            {/* Browser Header Bar */}
            <div className="floating-preview-browser-bar">
              <div className="preview-traffic-dots">
                <span className="dot dot-close" />
                <span className="dot dot-minimize" />
                <span className="dot dot-expand" />
              </div>
              {hoveredProject.domain && (
                <div className="floating-preview-url">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>{hoveredProject.domain}</span>
                </div>
              )}
              <span className="floating-preview-live-tag">Live ↗</span>
            </div>

            {/* Screenshot image */}
            <div className="floating-preview-img-wrap">
              <img
                src={hoveredProject.previewImage}
                alt={`${hoveredProject.name} Live Interface`}
                className="floating-preview-img"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
