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
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Vanilla CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

  // ML / DL
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Transformers": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "XGBoost": "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
  "BERT": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "ANN": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "CNN": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",

  // GenAI / LLMs
  "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangGraph": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "RAG": "https://cdn.simpleicons.org/openai/412991",
  "OpenAI API": "https://cdn.simpleicons.org/openai/412991",
  "Groq API": "https://cdn.simpleicons.org/groq/F55036",
  "Hugging Face": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  "ChromaDB": "https://cdn.simpleicons.org/chroma/FF6446",
  "Prompt Engineering": "https://cdn.simpleicons.org/openai/412991",
  "Fine-tuning": "https://cdn.simpleicons.org/openai/412991",

  // Data & Tools
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  "NLTK": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  "Seaborn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "MLflow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mlflow/mlflow-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Jupyter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",

  // Deployment & Automation
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "REST APIs": "https://cdn.simpleicons.org/swagger/85EA2D",
  "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "n8n": "https://cdn.simpleicons.org/n8n/EA4B71",
  "Webhooks": "https://cdn.simpleicons.org/webhook/C73D61",
};

export const skillGroups = [
  {
    label: "Languages & Databases",
    skills: ["Python", "C++", "TypeScript", "SQL", "PostgreSQL"],
  },
  {
    label: "ML / Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "XGBoost", "BERT", "ANN", "CNN"],
  },
  {
    label: "GenAI / LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "OpenAI API", "Groq API", "Hugging Face", "FAISS", "ChromaDB", "Prompt Engineering", "Fine-tuning"],
  },
  {
    label: "Data & Tools",
    skills: ["Pandas", "NumPy", "NLTK", "Matplotlib", "Seaborn", "MLflow", "Git", "Jupyter"],
  },
  {
    label: "Deployment & Automation",
    skills: ["FastAPI", "REST APIs", "Streamlit", "Docker", "n8n", "Webhooks"],
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
