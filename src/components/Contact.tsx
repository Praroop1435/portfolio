"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
      >
        <p className="contact-text">
          If you&apos;re interested in collaborating and building cool things, feel free
          to drop me a message on{" "}
          <a href="https://www.linkedin.com/in/praroop1435" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or send an{" "}
          <a href="mailto:anandpraroop@gmail.com">Email</a>.
          I&apos;ll get back to you within 2 business days. Always open to new ideas and projects!
        </p>
      </motion.div>
    </section>
  );
}
