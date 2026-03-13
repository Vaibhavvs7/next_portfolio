"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

const TICK_COUNT = 18;
const ACCENT = "#00d4aa";

function useSectionObserver() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function ScrollProgressRail() {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const activeSection = useSectionObserver();
  const [isMobile, setIsMobile] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme !== 'light';

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Map scroll progress → indicator top % within the rail
  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (isMobile) return null;

  const activeLabel = SECTIONS.find((s) => s.id === activeSection)?.label || "";

  return (
    <div
      ref={railRef}
      style={{
        position: "fixed",
        top: 0,
        left: 24,
        height: "100vh",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none",
      }}
    >
      {/* Rail line + ticks */}
      <div
        style={{
          position: "relative",
          width: 2,
          height: "100%",
          background: isDark ? "#1e1e1e" : "#d4d4d8",
          marginLeft: 6,
        }}
      >
        {/* Tick marks */}
        {Array.from({ length: TICK_COUNT }).map((_, i) => {
          const pct = ((i + 1) / (TICK_COUNT + 1)) * 100;
          return (
            <motion.span
              key={i}
              style={{
                position: "absolute",
                top: `${pct}%`,
                left: -8,
                width: 18,
                height: 1.5,
                borderRadius: 1,
                display: "block",
              }}
              // Ticks above the indicator are brighter
              className="tick-mark"
              initial={false}
            >
              <TickMark index={i} total={TICK_COUNT} scrollYProgress={scrollYProgress} isDark={isDark} />
            </motion.span>
          );
        })}

        {/* Glowing indicator */}
        <motion.div
          style={{
            position: "absolute",
            top: indicatorY,
            left: -5,
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: `8px solid ${ACCENT}`,
            filter: `drop-shadow(0 0 6px ${ACCENT})`,
            transform: "translateY(-50%)",
          }}
        />
      </div>

      {/* Section label */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 50,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <AnimatePresence mode="wait">
          {activeLabel && (
            <motion.span
              key={activeLabel}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "monospace",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                whiteSpace: "nowrap",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {activeLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Individual tick component — subscribes to scroll progress for color */
function TickMark({ index, total, scrollYProgress, isDark }) {
  const threshold = (index + 1) / (total + 1);
  const activeColor = isDark ? "#555" : "#71717a";
  const inactiveColor = isDark ? "#2a2a2a" : "#d4d4d8";
  const color = useTransform(scrollYProgress, (v) =>
    v >= threshold ? activeColor : inactiveColor
  );

  return (
    <motion.span
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: 1,
        backgroundColor: color,
      }}
    />
  );
}
