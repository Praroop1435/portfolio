"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

// Map skill names to devicon/simpleicons slugs for logos
export const skillLogos: Record<string, string> = {
  // Languages & DB
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

  // ML / DL
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Transformers": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "XGBoost": "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
  "BERT": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "ANN": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "CNN": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Prompt Engineering": "https://cdn.simpleicons.org/openai/412991",

  // GenAI / LLMs
  "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangGraph": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "RAG": "https://cdn.simpleicons.org/openai/412991",
  "OpenAI API": "https://cdn.simpleicons.org/openai/412991",
  "Anthropic Claude API": "https://cdn.simpleicons.org/anthropic/D97706",
  "Claude": "https://cdn.simpleicons.org/anthropic/D97706",
  "Gemini API": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "Gemini 2.5 Flash": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "Groq API": "https://cdn.simpleicons.org/groq/F55036",
  "Hugging Face": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "FAISS": "https://cdn.simpleicons.org/meta/0081FB",
  "pgvector": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "ChromaDB": "https://cdn.simpleicons.org/chroma/FF6446",
  "Sentence-Transformers": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "RAGAS": "https://cdn.simpleicons.org/openai/412991",

  // Frameworks & Backend
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "Django 5.1": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "DRF": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Celery": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/celery/celery-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Firebase Auth": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "JWT": "https://cdn.simpleicons.org/jsonwebtokens/000000",
  "REST APIs": "https://cdn.simpleicons.org/swagger/85EA2D",

  // Scraping & Automation
  "Playwright": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "curl-cffi": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Crawl4AI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "BeautifulSoup": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Telethon": "https://cdn.simpleicons.org/telegram/26A5E4",
  "Baileys": "https://cdn.simpleicons.org/whatsapp/25D366",
  "WhatsApp": "https://cdn.simpleicons.org/whatsapp/25D366",
  "Telegram": "https://cdn.simpleicons.org/telegram/26A5E4",
  "ClickUp": "https://cdn.simpleicons.org/clickup/7B68EE",
  "n8n": "https://cdn.simpleicons.org/n8n/EA4B71",
  "Webhooks": "https://cdn.simpleicons.org/webhook/C73D61",
  "Airtable": "https://cdn.simpleicons.org/airtable/18BFFF",
  "Fillout": "https://cdn.simpleicons.org/formspree/FF5A5F",

  // Deployment & DevOps
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "PM2": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pm2/pm2-original.svg",
  "Hetzner VPS": "https://cdn.simpleicons.org/hetzner/D50C2D",
  "Google Cloud Run": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",

  // Data & Tools
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  "Seaborn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "MLflow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mlflow/mlflow-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Google Sheets API": "https://cdn.simpleicons.org/googlesheets/34A853",
  "SerpAPI": "https://cdn.simpleicons.org/google/4285F4",

  // Additional project tags
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React/Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "Stripe": "https://cdn.simpleicons.org/stripe/635BFF",
  "Discord API": "https://cdn.simpleicons.org/discord/5865F2",
  "GPT-4o-mini": "https://cdn.simpleicons.org/openai/412991",
};

export const skillGroups = [
  {
    label: "Languages & Databases",
    skills: ["Python", "C++", "TypeScript", "SQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "AI / ML / DL",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "XGBoost", "ANN", "CNN", "BERT", "Prompt Engineering"],
  },
  {
    label: "GenAI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "OpenAI API", "Anthropic Claude API", "Gemini API", "Groq API", "Hugging Face", "FAISS", "pgvector", "ChromaDB", "Sentence-Transformers", "RAGAS"],
  },
  {
    label: "Frameworks & Backend",
    skills: ["FastAPI", "Flask", "Django 5.1", "DRF", "Celery", "Redis", "Firebase Auth", "JWT", "REST APIs"],
  },
  {
    label: "Scraping & Automation",
    skills: ["Playwright", "curl-cffi", "Crawl4AI", "BeautifulSoup", "Telethon", "Baileys", "n8n", "Webhooks", "Airtable"],
  },
  {
    label: "Deployment & DevOps",
    skills: ["Docker", "PM2", "Hetzner VPS", "Google Cloud Run", "GitHub Actions", "Nginx", "CI/CD"],
  },
  {
    label: "Data & Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "MLflow", "Git", "Google Sheets API", "SerpAPI"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      {skillGroups.map((group, idx) => (
        <motion.div
          key={group.label}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={{ delay: idx * 0.05 }}
          style={{ marginBottom: "28px" }}
        >
          <div className="skills-label">{group.label}</div>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <span key={skill} className="tech-tag tech-tag-with-logo">
                {skillLogos[skill] && (
                  <img
                    src={skillLogos[skill]}
                    alt={skill}
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
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

