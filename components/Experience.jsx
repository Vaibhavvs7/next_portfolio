import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const roles = [
    {
      title: "Full Stack Developer Intern",
      company: "Aspiring Media Tech Pvt Ltd",
      date: "June 2024 – Sept 2024",
      points: [
        "Automated WhatsApp campaign dispatch with a PHP + RESTful API backend and PostgreSQL database, enabling one-tap delivery to 2,000+ recipients.",
        "Built a scheduling engine with cron jobs and controlled batching (5-second intervals).",
        "Developed interactive dashboards using JavaScript + Bootstrap.",
        "Implemented secure role-based access control.",
      ],
      tech: ["PHP", "PostgreSQL", "JavaScript", "Bootstrap", "Cron"],
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl w-full relative" ref={ref}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">Experience</h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-white rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline background line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 rounded-full"></div>
          
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-indigo-500 shadow-[0_0_15px_rgba(52,211,153,0.5)] -translate-x-1/2 rounded-full z-10"
          ></motion.div>

          {roles.map((role, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between mb-16 w-full">
              
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white dark:border-zinc-950 -translate-x-1/2 z-20 shadow-lg"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full pl-20 md:w-[45%] md:pl-0 md:pr-12 md:text-right"
              >
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{role.title}</h3>
                <h4 className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-2">{role.company}</h4>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 mb-6">
                  {role.date}
                </span>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {role.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-semibold rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="w-full pl-20 md:w-[45%] md:pl-12 mt-6 md:mt-0"
              >
                <div className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition">
                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                    {role.points.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-emerald-500 mt-1">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                      href="./completionAspiring.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}