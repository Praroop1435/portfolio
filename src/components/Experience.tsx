"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const experienceData = [
  {
    date: "2025",
    title: "Event Coordinator — HackOasis Hackathon",
    subtitle: "Kolkata, India",
    desc: "Managed a large-scale hackathon with 800+ participants across 100+ teams. Led a 10-member ops team in a 24-hour high-pressure environment, ensuring 100% on-schedule execution across all 6 event phases.",
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
            <p className="experience-desc">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
