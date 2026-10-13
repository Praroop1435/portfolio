"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Map skill names to devicon/simpleicons slugs for logos
export const skillLogos: Record<string, string> = {
  // Languages & DB
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

  // GenAI & LLMs
  "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangGraph": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "RAG": "https://cdn.simpleicons.org/openai/412991",
  "OpenAI API": "https://cdn.simpleicons.org/openai/412991",
  "Anthropic Claude API": "https://cdn.simpleicons.org/anthropic/D97706",
  "Claude API": "https://cdn.simpleicons.org/anthropic/D97706",
  "Claude": "https://cdn.simpleicons.org/anthropic/D97706",
  "Gemini API": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "Gemini 2.5 Flash": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "Groq API": "https://cdn.simpleicons.org/groq/F55036",
  "FAISS": "https://cdn.simpleicons.org/meta/0081FB",
  "pgvector": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "ChromaDB": "https://cdn.simpleicons.org/chroma/FF6446",
  "RAGAS": "https://cdn.simpleicons.org/openai/412991",

  // Frameworks & Backend
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Django 5.1": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "Celery": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/celery/celery-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "JWT": "https://cdn.simpleicons.org/jsonwebtokens/000000",
  "REST APIs": "https://cdn.simpleicons.org/swagger/85EA2D",

  // Scraping & Automation
  "n8n": "https://cdn.simpleicons.org/n8n/EA4B71",
  "Playwright": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "Crawl4AI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Webhooks": "https://cdn.simpleicons.org/webhook/C73D61",
  "Airtable": "https://cdn.simpleicons.org/airtable/18BFFF",
  "Telethon": "https://cdn.simpleicons.org/telegram/26A5E4",
  "Baileys": "https://cdn.simpleicons.org/whatsapp/25D366",
  "BeautifulSoup": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

  // Deployment & DevOps
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "PM2": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pm2/pm2-original.svg",
  "Hetzner VPS": "https://cdn.simpleicons.org/hetzner/D50C2D",
  "Google Cloud Run": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",

  // Supplementary project tags
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "PayPal": "https://cdn.simpleicons.org/paypal/00457C",
  "WhatsApp": "https://cdn.simpleicons.org/whatsapp/25D366",
  "Telegram": "https://cdn.simpleicons.org/telegram/26A5E4",
  "ClickUp": "https://cdn.simpleicons.org/clickup/7B68EE",
  "Fillout": "https://cdn.simpleicons.org/formspree/FF5A5F",
  "SerpAPI": "https://cdn.simpleicons.org/google/4285F4",
  "GPT-4o-mini": "https://cdn.simpleicons.org/openai/412991",
  "Google Sheets API": "https://cdn.simpleicons.org/googlesheets/34A853",
  "OpenAI": "https://cdn.simpleicons.org/openai/412991",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Chrome CDP": "https://cdn.simpleicons.org/googlechrome/4285F4",
  "MCP": "https://cdn.simpleicons.org/anthropic/D97706",
  "npm": "https://cdn.simpleicons.org/npm/CB3837",
};

export interface SkillCategory {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillCategory[] = [
  {
    id: "genai",
    label: "GenAI & Agentic Systems",
    shortLabel: "GenAI & LLMs",
    icon: "sparkles",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "Groq API",
      "FAISS",
      "pgvector",
      "ChromaDB",
      "RAGAS",
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    shortLabel: "Backend & APIs",
    icon: "server",
    skills: [
      "FastAPI",
      "Django 5.1",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Celery",
      "REST APIs",
      "JWT",
    ],
  },
  {
    id: "automation",
    label: "Scraping & Automation",
    shortLabel: "Automation",
    icon: "workflow",
    skills: [
      "n8n",
      "Playwright",
      "Crawl4AI",
      "Webhooks",
      "Airtable",
      "Telethon",
      "Baileys",
      "BeautifulSoup",
    ],
  },
  {
    id: "devops",
    label: "Deployment & Cloud",
    shortLabel: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      "Docker",
      "Hetzner VPS",
      "Google Cloud Run",
      "GitHub Actions",
      "Nginx",
      "CI/CD",
    ],
  },
  {
    id: "languages",
    label: "Languages & Databases",
    shortLabel: "Languages",
    icon: "code",
    skills: [
      "Python",
      "TypeScript",
      "SQL",
      "C++",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

const CategoryIcons: Record<string, React.ReactNode> = {
  sparkles: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  ),
  server: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  workflow: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  cloud: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  code: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayedGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section className="skills-section" id="skills">
      {/* Category Filter Tabs */}
      <div className="skills-tabs-container">
        <button
          className={`skills-tab-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          <span>All Stack</span>
          <span className="skills-tab-count">34</span>
        </button>

        {skillGroups.map((group) => (
          <button
            key={group.id}
            className={`skills-tab-btn ${activeCategory === group.id ? "active" : ""}`}
            onClick={() => setActiveCategory(group.id)}
          >
            <span className="skills-tab-icon">{CategoryIcons[group.icon]}</span>
            <span>{group.shortLabel}</span>
            <span className="skills-tab-count">{group.skills.length}</span>
          </button>
        ))}
      </div>

      {/* Bento Grid Cards */}
      <div className="skills-bento-grid">
        <AnimatePresence mode="popLayout">
          {displayedGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              className="skills-bento-card"
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
            >
              <div className="skills-bento-header">
                <div className="skills-bento-title-row">
                  <span className="skills-bento-icon">
                    {CategoryIcons[group.icon]}
                  </span>
                  <h3 className="skills-bento-title">{group.label}</h3>
                </div>
                <span className="skills-bento-badge">
                  {group.skills.length} tools
                </span>
              </div>

              <div className="skills-tags-cluster">
                {group.skills.map((skill) => (
                  <span
                    key={`${group.id}-${skill}`}
                    className="tech-tag tech-tag-with-logo"
                  >
                    {skillLogos[skill] && (
                      <img
                        src={skillLogos[skill]}
                        alt={skill}
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
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
