import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

const name = "Vaibhav Sapaliya.";
const typingSpeed = 150;
const pause = 1500;

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < name.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + name[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative z-10 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-16">
        
        {/* Left: Text */}
        <div className="md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white"
          >
            I'm <br className="hidden md:block" />
            <span className="text-zinc-500 dark:text-zinc-400">
              {displayed}
            </span>
            <span className="animate-pulse">_</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-medium"
          >
            Software Engineer specializing in scalable web applications and AI-driven solutions. Crafting elegant experiences through clean, robust code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/Vaibhav_SWE_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-zinc-500" />
              Resume
            </a>
            
            <Link
              href="#contact"
              className="inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Image Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-[45%] flex justify-center mt-12 md:mt-0 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-zinc-200 dark:bg-zinc-800 blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-[2rem] overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/LinkedinProf.jpg"
                alt="Vaibhav Sapaliya"              
                className="w-full h-full object-cover rounded-[1.5rem] grayscale-[30%] hover:grayscale-0 transition duration-500"
              />
            </div>
            
            {/* Minimalist Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Focus</span>
                <span className="text-sm font-bold">Full-Stack Dev</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
