"use client";

import { createContext, useContext, useEffect, useState, useRef, useCallback, type ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: (e?: React.MouseEvent) => void;
}>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const toggle = useCallback((e?: React.MouseEvent) => {
    const next = theme === "dark" ? "light" : "dark";

    // Always find the theme toggle button element and calculate its exact center
    const btn = (e?.currentTarget as HTMLElement) || (typeof document !== "undefined" ? document.querySelector(".theme-toggle") : null);
    let x = 0;
    let y = 0;

    if (btn && typeof btn.getBoundingClientRect === "function") {
      const rect = btn.getBoundingClientRect();
      x = Math.round(rect.left + rect.width / 2);
      y = Math.round(rect.top + rect.height / 2);
    } else if (e && typeof e.clientX === "number" && (e.clientX > 0 || e.clientY > 0)) {
      x = Math.round(e.clientX);
      y = Math.round(e.clientY);
    } else {
      x = Math.round(window.innerWidth / 2);
      y = 26;
    }

    // Set CSS properties on documentElement for both CSS and JS engines
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--reveal-x", `${x}px`);
      document.documentElement.style.setProperty("--reveal-y", `${y}px`);
    }

    // Calculate max radius needed to reach the farthest corner of the viewport
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--reveal-radius", `${maxRadius}px`);
    }

    // 1. View Transitions API (Chrome 111+, Edge, Safari 18+)
    if (typeof document !== "undefined" && typeof document.startViewTransition === "function") {
      const transition = document.startViewTransition(() => {
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 520,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
      return;
    }

    // 2. Manual circular reveal overlay fallback
    const overlay = overlayRef.current;
    if (!overlay) {
      setTheme(next);
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return;
    }

    overlay.style.setProperty("--reveal-x", `${x}px`);
    overlay.style.setProperty("--reveal-y", `${y}px`);
    overlay.style.setProperty("--reveal-radius", `${maxRadius}px`);
    overlay.setAttribute("data-theme", next);
    overlay.classList.add("theme-reveal-active");

    const onEnd = () => {
      setTheme(next);
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      overlay.classList.remove("theme-reveal-active");
      overlay.removeEventListener("animationend", onEnd);
    };

    overlay.addEventListener("animationend", onEnd);
  }, [theme]);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
      <div ref={overlayRef} className="theme-reveal-overlay" />
    </ThemeContext.Provider>
  );
}
