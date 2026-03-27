"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const skillsData = [
  { category: "Programming", skills: ["Python", "C++", "SQL", "TypeScript"] },
  { category: "AI & ML", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers"] },
  { category: "Systems", skills: ["FastAPI", "Docker", "REST APIs", "Vector DBs"] },
];

export default function Skills() {
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
        <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>Technical Stack</div>
        <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)" }}>01 // SKILLS</div>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {skillsData.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUp}
            transition={{ delay: groupIdx * 0.1 }}
            style={{ 
              padding: "24px",
              borderRight: groupIdx !== skillsData.length - 1 ? "1px solid var(--border-color)" : "none",
            }}
          >
            <div className="mono" style={{ fontSize: "11px", color: "var(--text-secondary)", marginBottom: "16px" }}>
              {group.category}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.skills.map((skill) => (
                <li key={skill} style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
