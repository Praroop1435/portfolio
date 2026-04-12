"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const educationData = [
  {
    date: "2023 – Present",
    title: "B.Tech — Information Technology",
    subtitle: "Institute of Engineering and Management, Kolkata",
    desc: "Pursuing undergraduate degree in Information Technology with focus on AI/ML, Data Science, and Software Engineering.",
  },
  {
    date: "2021 – 2023",
    title: "Class XII — Computer Science (80%)",
    subtitle: "Chinmaya Vidyalaya, Bokaro",
    desc: "Completed senior secondary education with a strong foundation in Mathematics and Computer Science.",
  },
];

export default function Education() {
  return (
    <section className="experience-section" id="education">
      {educationData.map((item, idx) => (
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
