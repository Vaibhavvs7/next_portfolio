// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Portfolio-focused links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Smooth scroll to section and close mobile menu
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
    <header className="fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50 px-2 md:px-0">
      <nav
        className="relative bg-neutral-700/30 text-white rounded-3xl px-3 md:px-5 py-3 flex items-center justify-between shadow-[0_18px_40px_rgba(0,0,0,0.35)] border border-white/4 backdrop-blur pill-highlight"
        aria-label="Primary"
      >
        {/* Left Links (desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => handleNavClick(e, l.href)}
              className="text-sm text-neutral-200 hover:text-white transition font-medium cursor-pointer px-2 py-1 rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-label={l.label}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Center logo (absolute center) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            className="pointer-events-auto inline-block font-extrabold text-lg md:text-xl tracking-tight text-white"
            aria-label="Vaibhav — go to home"
          >
            Vaibhav
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Resume: regular anchor so we can use download and open in new tab */}
          <a
            href="/Vaibhav_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-sm text-neutral-200 hover:text-white transition font-medium"
            aria-label="Download resume"
            title="Download resume"
          >
            Resume
          </a>

          {/* Primary CTA for portfolio: Hire Me (internal link to contact section) - only show on md+ */}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 transition-shadow shadow-md text-sm font-medium cursor-pointer"
            aria-label="Hire Vaibhav — contact"
            title="Hire Me"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden ml-2 p-2 rounded-full hover:bg-white/5 transition"
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu (dropdown) */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)}></div>
        )}
        {open && (
          <div className="fixed top-0 left-0 right-0 mt-0 bg-neutral-800/98 border-b border-white/10 rounded-b-2xl p-4 shadow-lg md:hidden z-50" style={{maxWidth:'100vw'}}>
            <div className="flex flex-col gap-3 pt-8">
              {/* Put CTA first on mobile */}
              <a
                href="#contact"
                onClick={e => { handleNavClick(e, "#contact"); }}
                className="inline-block px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-center text-white font-medium cursor-pointer"
                aria-label="Hire Me"
              >
                Hire Me
              </a>

              <a
                href="/Vaibhav_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block text-neutral-200 hover:text-white font-medium"
                aria-label="Download resume"
              >
                Resume
              </a>

              {/* Other nav links */}
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={e => handleNavClick(e, l.href)}
                  className="block text-neutral-200 hover:text-white font-medium cursor-pointer px-2 py-1 rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-orange-400"
                  aria-label={l.label}
                >
                  {l.label}
                </a>
              ))}

              {/* Optional login — hidden on desktop by default */}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="pt-2 block text-neutral-200 hover:text-white font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
