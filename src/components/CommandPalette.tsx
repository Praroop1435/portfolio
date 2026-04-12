"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { skillGroups } from "@/components/Skills";
import { projectsData } from "@/components/Projects";

type Command = {
  id: string;
  name: string;
  action: () => void;
  icon?: React.ReactNode;
  group: "Navigation" | "Sections" | "Socials" | "Tech Stack" | "Projects";
};

const Icons = {
  Home: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  Code: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  User: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  Layers: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  Award: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  Mail: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  GitHub: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  LinkedIn: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  Briefcase: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  GradCap: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" /></svg>,
  Terminal: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>,
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
      const y = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const skillCommands: Command[] = skillGroups.flatMap((group) => 
    group.skills.map((skill) => ({
      id: `skill-${skill.toLowerCase()}`,
      name: skill,
      action: () => scrollToSection("skills"),
      icon: Icons.Terminal,
      group: "Tech Stack" as const,
    }))
  );

  const projectCommands: Command[] = projectsData.map((project) => ({
    id: `project-${project.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: project.name,
    action: () => scrollToSection("projects"),
    icon: Icons.Code,
    group: "Projects" as const,
  }));

  const commands: Command[] = [
    { id: "home", name: "Home", action: () => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, icon: Icons.Home, group: "Navigation" },
    { id: "about", name: "About", action: () => scrollToSection("about"), icon: Icons.User, group: "Sections" },
    { id: "projects", name: "Projects", action: () => scrollToSection("projects"), icon: Icons.Code, group: "Sections" },
    { id: "experience", name: "Experience", action: () => scrollToSection("experience"), icon: Icons.Briefcase, group: "Sections" },
    { id: "education", name: "Education", action: () => scrollToSection("education"), icon: Icons.GradCap, group: "Sections" },
    { id: "skills", name: "Tech Stack", action: () => scrollToSection("skills"), icon: Icons.Layers, group: "Sections" },
    { id: "certs", name: "Certifications", action: () => scrollToSection("certifications"), icon: Icons.Award, group: "Sections" },
    { id: "github", name: "GitHub", action: () => { setOpen(false); window.open("https://github.com/praroop1435", "_blank"); }, icon: Icons.GitHub, group: "Socials" },
    { id: "linkedin", name: "LinkedIn", action: () => { setOpen(false); window.open("https://www.linkedin.com/in/praroop1435", "_blank"); }, icon: Icons.LinkedIn, group: "Socials" },
    { id: "email", name: "Send Email", action: () => { setOpen(false); window.location.href = "mailto:anandpraroop@gmail.com"; }, icon: Icons.Mail, group: "Socials" },
    ...projectCommands,
    ...skillCommands,
  ];

  const filteredCommands = commands.filter((cmd) => {
    // Hide individual skills and projects from the default view
    if (query.trim() === "" && (cmd.group === "Tech Stack" || cmd.group === "Projects")) {
      return false;
    }
    return cmd.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (!open) return;
    const down = (e: KeyboardEvent) => {
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
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const groups = Array.from(new Set(filteredCommands.map((c) => c.group)));

  return (
    <>
      <button onClick={() => setOpen(true)} className="cmd-trigger">
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <span>Search...</span>
        </div>
        <span className="cmd-kbd">⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="cmd-overlay" onClick={() => setOpen(false)}>
            <motion.div
              className="cmd-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="cmd-input-wrapper">
                <svg className="cmd-input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input
                  ref={inputRef}
                  className="cmd-input"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="cmd-list">
                {filteredCommands.length > 0 ? (
                  groups.map((group) => (
                    <div key={group} className="cmd-group">
                      <div className="cmd-group-label">{group}</div>
                      {filteredCommands
                        .filter((c) => c.group === group)
                        .map((cmd) => {
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
    </>
  );
}
