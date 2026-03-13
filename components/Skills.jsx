import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const coreSkills = ["JavaScript", "React.js", "Node.js", "Next.js", "PostgreSQL", "MongoDB"];
  const otherSkills = ["Python", "Java", "Docker", "Git", "REST APIs", "Socket.IO", "TypeScript", "Tailwind"];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Title & Description */}
        <div className="md:w-1/2">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">Tech Ecosystem</h2>
            <div className="h-1 w-20 bg-zinc-900 dark:bg-white rounded-full mb-8"></div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-md">
              My technical toolkit is built around the modern JavaScript ecosystem, augmented by powerful databases and robust backend frameworks. I focus on choosing the right tool for the job to build scalable, high-performance applications.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((s, i) => (
                <motion.span 
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-zinc-500 border border-zinc-200 dark:border-zinc-800 dark:text-zinc-400 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Floating Orbits */}
        <div className="md:w-1/2 flex justify-center items-center relative h-[400px] w-full mt-12 md:mt-0">
          {/* Center Hub */}
          <div className="absolute z-20 w-24 h-24 rounded-full bg-zinc-900 dark:bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center">
            <span className="font-extrabold text-white dark:text-zinc-900 text-xl tracking-tighter">Core</span>
          </div>

          {mounted && coreSkills.map((skill, index) => {
            const angle = (index / coreSkills.length) * Math.PI * 2;
            const radius = 140; // Orbit radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill}
                className="absolute z-10 w-20 h-20 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center shadow-zinc-200/50 dark:shadow-zinc-900/50"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x, y, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                  delay: index * 0.1,
                }}
                animate={{
                  y: [y, y - 10, y], // Floating effect
                }}
                /* Overriding transition for continuous floating */
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <motion.div 
                  className="w-full h-full absolute rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20 + index * 2, ease: "linear" }}
                />
                <span className="relative z-10 text-xs font-bold text-zinc-800 dark:text-zinc-200 text-center px-1">
                  {skill}
                </span>
              </motion.div>
            );
          })}
          
          {/* Orbit Rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-zinc-200 dark:border-zinc-800 border-dashed opacity-50 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border border-zinc-100 dark:border-zinc-800/50 border-dashed opacity-30 animate-[spin_60s_linear_infinite_reverse]"></div>
        </div>
      </div>
    </section>
  );
}
