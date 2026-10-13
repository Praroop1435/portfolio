"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOPICS = [
  { label: "Hire for Role", value: "Hiring / Full-time Role" },
  { label: "Project / Freelance", value: "Project / Freelance" },
  { label: "General Chat", value: "General Inquiry" },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [selectedTopic, setSelectedTopic] = useState("Project / Freelance");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("anandpraroop@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!name.trim()) {
      setValidationError("Please enter your name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Please provide a valid email address");
      return;
    }
    if (!message.trim()) {
      setValidationError("Please write a short message");
      return;
    }

    setStatus("submitting");

    try {
      const fullMessage = `[Topic: ${selectedTopic}]\n\n${message}`;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: fullMessage }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setName("");
        setEmail("");
        setMessage("");
        onClose();
      }, 2400);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-overlay" onClick={onClose}>
          <motion.div
            className="contact-dialog"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="contact-header">
              <div>
                <h2 className="contact-title">Let&apos;s Connect</h2>
                <p className="contact-subtitle">
                  Open for AI/backend engineering, automation workflows, or project builds.
                </p>
              </div>
              <button
                className="contact-close"
                onClick={onClose}
                aria-label="Close dialog"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {status === "success" ? (
              <motion.div
                className="contact-success-state"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="contact-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Topic Selector Chips */}
                <div className="contact-topics-wrap">
                  <span className="contact-field-label">I&apos;m reaching out about:</span>
                  <div className="contact-topics-list">
                    {TOPICS.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        className={`topic-chip ${selectedTopic === t.value ? "active" : ""}`}
                        onClick={() => setSelectedTopic(t.value)}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Grid */}
                <div className="contact-input-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="contact-field-label">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (validationError) setValidationError("");
                      }}
                      placeholder="Jane Doe"
                      className="contact-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="contact-field-label">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (validationError) setValidationError("");
                      }}
                      placeholder="jane@company.com"
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <label htmlFor="message" className="contact-field-label">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (validationError) setValidationError("");
                    }}
                    placeholder="Tell me a bit about what you're building, the timeline, or what you need..."
                    rows={4}
                    className="contact-textarea"
                  />
                </div>

                {/* Validation Error Banner */}
                {validationError && (
                  <p className="contact-validation-msg">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{validationError}</span>
                  </p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <span className="submit-loading">
                      <svg className="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending message...
                    </span>
                  ) : (
                    <span className="submit-ready">
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </span>
                  )}
                </button>

                {status === "error" && (
                  <p className="contact-error">
                    Something went wrong. Please email directly at anandpraroop@gmail.com.
                  </p>
                )}
              </form>
            )}

            {/* Direct Email Alternative Footer */}
            <div className="contact-direct-bar">
              <span className="direct-label">Direct Email:</span>
              <a
                href="mailto:anandpraroop@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="direct-email-link"
              >
                anandpraroop@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="direct-copy-btn"
                title="Copy email to clipboard"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
