"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { skillLogos } from "@/components/Skills";

export const projectsData = [
  {
    name: "SiteSage",
    desc: "An AI-powered B2B prospect research pipeline that scrapes websites via Cheerio and utilizes Groq APIs to instantly extract targeting data and personalize outreach openers.",
    tags: ["React", "Next.js", "Groq API", "Cheerio", "Vanilla CSS"],
    year: "2026",
    link: "https://web.praroop.site",
  },
  {
    name: "YTransformer",
    desc: "Built a RAG system over 500+ YouTube transcripts using semantic chunking and FAISS vector retrieval, achieving sub-200ms query response time. Reduced LLM hallucinations by ~60% via grounded retrieval.",
    tags: ["Python", "LangChain", "FAISS", "FastAPI", "Streamlit"],
    year: "2026",
    link: "https://github.com/Praroop1435/YTransformer",
  },
  {
    name: "TRACE-ATS",
    desc: "Built an LLM-powered system achieving 85%+ match accuracy across 100+ resume-JD pairs using semantic similarity and embedding-based retrieval. Optimized inference pipeline for 200+ req/hr.",
    tags: ["Python", "RAG", "Embeddings", "Transformers", "FastAPI"],
    year: "2025",
    link: "https://github.com/Praroop1435/TRACE-ATS",
  },
  {
    name: "JobFlow Engine",
    desc: "Designed 5+ modular n8n workflows automating job search, filtering, and ranking using LLM APIs and event-driven webhook triggers. Reduced manual effort by ~80%.",
    tags: ["TypeScript", "Python", "JavaScript", "HTML", "CSS", "n8n", "LLM APIs", "Webhooks"],
    year: "2026",
    link: "https://github.com/praroop1435",
  },
  {
    name: "ChurnSense",
    desc: "End-to-end churn prediction framework on 10,000+ records. Benchmarked 4 models, achieving AUC-ROC of 0.91 with XGBoost. Surfaced top 5 churn drivers via SHAP analysis.",
    tags: ["Python", "Jupyter Notebook", "Scikit-learn", "XGBoost", "Pandas", "SHAP"],
    year: "2025",
    link: "https://github.com/praroop1435",
  },
  {
    name: "PriceVision",
    desc: "End-to-end deep learning pipeline across 1,000+ property records, R² of 0.88 and MAE within 3.5%. Deployed live on Render via FastAPI and Streamlit.",
    tags: ["Python", "Jupyter Notebook", "TensorFlow", "FastAPI", "Streamlit"],
    year: "2025",
    link: "https://house-price-prediction-1-bgmo.onrender.com/",
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
