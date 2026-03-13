// components/Navbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav
        className="w-full bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border border-black/5 dark:border-white/10 text-zinc-900 dark:text-zinc-100 rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-lg ring-1 ring-zinc-900/5 dark:ring-white/10"
        aria-label="Primary"
      >
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-extrabold text-xl tracking-tighter hover:opacity-80 transition"
            aria-label="Vaibhav — go to home"
          >
            V.
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium transition-colors bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-full shadow-sm"
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 top-[4.5rem] z-40 p-4 md:hidden" onClick={() => setOpen(false)}>
            <div
              className="w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block text-center px-4 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-xl font-medium"
              >
                Hire Me
              </a>
              <a
                href="/Vaibhav_NoP.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 text-zinc-600 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
