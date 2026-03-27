"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Command = {
  id: string;
  name: string;
  action: () => void;
  icon?: React.ReactNode;
  group: "Navigation" | "Socials";
};

// Simple SVG Icons
const Icons = {
  Home: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  Code: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  User: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  FileText: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  GitHub: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  LinkedIn: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  Mail: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const commands: Command[] = [
    { id: "hero", name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }), icon: Icons.Home, group: "Navigation" },
    { id: "about", name: "About", action: () => scrollToSection("about"), icon: Icons.User, group: "Navigation" },
    { id: "projects", name: "Projects", action: () => scrollToSection("projects"), icon: Icons.Code, group: "Navigation" },
    { id: "skills", name: "Skills", action: () => scrollToSection("skills"), icon: Icons.FileText, group: "Navigation" },
    { id: "github", name: "GitHub", action: () => window.open("https://github.com/praroop1435", "_blank"), icon: Icons.GitHub, group: "Socials" },
    { id: "linkedin", name: "LinkedIn", action: () => window.open("https://www.linkedin.com/in/praroop-anand", "_blank"), icon: Icons.LinkedIn, group: "Socials" },
    { id: "email", name: "Send Email", action: () => window.location.href = "mailto:anandpraroop@gmail.com", icon: Icons.Mail, group: "Socials" },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") setOpen(false);

      if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((i) => (i + 1) % filteredCommands.length);
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((i) => (i - 1 + filteredCommands.length) % filteredCommands.length);
        }
        if (e.key === "Enter" && filteredCommands.length > 0) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
          setOpen(false);
        }
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, filteredCommands, selectedIndex]);

  // Group commands for rendering
  const groups = Array.from(new Set(filteredCommands.map(c => c.group)));

  return (
    <>
      {/* Inline Trigger matching Chanhdai.com exactly */}
      <button onClick={() => setOpen(true)} className="cmd-trigger">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span style={{ fontSize: '13px' }}>Search...</span>
        </div>
        <span className="cmd-kbd">⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="cmd-overlay" onClick={() => setOpen(false)}>
            <motion.div
              className="cmd-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="cmd-input-wrapper">
                <svg className="cmd-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input
                  ref={inputRef}
                  autoFocus
                  className="cmd-input"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="cmd-list">
                {filteredCommands.length > 0 ? (
                  groups.map(group => (
                    <div key={group} className="cmd-group">
                      <div className="cmd-group-label">{group}</div>
                      {filteredCommands.filter(c => c.group === group).map((cmd) => {
                        const isSelected = filteredCommands[selectedIndex]?.id === cmd.id;
                        return (
                          <div
                            key={cmd.id}
                            className={`cmd-item ${isSelected ? "selected" : ""}`}
                            onMouseEnter={() => setSelectedIndex(filteredCommands.indexOf(cmd))}
                            onClick={() => {
                              cmd.action();
                              setOpen(false);
                            }}
                          >
                            <span className="cmd-item-icon">{cmd.icon}</span>
                            {cmd.name}
                          </div>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  <div className="cmd-empty">No results found.</div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* Trigger Button */
        .cmd-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 220px;
          height: 32px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          cursor: pointer;
          padding: 0 8px 0 12px;
          border-radius: 6px;
          transition: border-color 0.2s, color 0.2s;
        }
        .cmd-trigger:hover {
          border-color: var(--text-tertiary);
          color: var(--text-primary);
        }
        .cmd-kbd {
          background: var(--bg-hover);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          font-size: 10px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        /* Overlay */
        .cmd-overlay {
          position: fixed;
          inset: 0;
          background: rgba(9, 9, 11, 0.6);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
        }

        /* Dialog */
        .cmd-dialog {
          width: 100%;
          max-width: 550px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Input */
        .cmd-input-wrapper {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding: 0 16px;
        }
        .cmd-input-icon {
          color: var(--text-secondary);
          margin-right: 12px;
        }
        .cmd-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 16px 0;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
        }
        .cmd-input::placeholder {
          color: var(--text-secondary);
        }

        /* List Items */
        .cmd-list {
          max-height: 350px;
          overflow-y: auto;
          padding: 8px;
          display: flex;
          flex-direction: column;
        }
        
        .cmd-group {
          margin-bottom: 8px;
        }
        
        .cmd-group-label {
          padding: 8px 12px;
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 11px;
          color: var(--text-secondary);
        }

        .cmd-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: background 0s, color 0s;
        }
        .cmd-item-icon {
          display: flex;
          margin-right: 12px;
          color: var(--text-secondary);
        }

        .cmd-item.selected {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        .cmd-item.selected .cmd-item-icon {
          color: var(--text-primary);
        }

        .cmd-empty {
          padding: 32px;
          text-align: center;
          color: var(--text-secondary);
          font-size: 14px;
          font-family: var(--font-sans);
        }
      `}</style>
    </>
  );
}
