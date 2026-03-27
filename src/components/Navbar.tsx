"use client";

import CommandPalette from "./CommandPalette";

export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      height: "56px",
      borderBottom: "1px solid var(--border-color)",
      backgroundColor: "rgba(9, 9, 11, 0.7)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "var(--max-content-width)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px" // Matches the bento-cell padding
      }}>
        {/* Left: Logo/Header */}
        <div style={{ 
          fontWeight: 600, 
          fontSize: "14px", 
          color: "var(--text-primary)",
          letterSpacing: "-0.01em"
        }}>
          anand.dev
        </div>
        
        {/* Right: Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Middle Links (Mono, small) */}
          <nav style={{ display: "flex", gap: "16px", marginRight: "8px" }} className="mono">
            <a href="#projects" style={{ fontSize: "11px", color: "var(--text-secondary)", textDecoration: "none" }}>Projects</a>
            <a href="#about" style={{ fontSize: "11px", color: "var(--text-secondary)", textDecoration: "none" }}>About</a>
          </nav>
          
          {/* The Search Trigger */}
          <CommandPalette />
        </div>
      </div>
    </header>
  );
}
