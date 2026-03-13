import { motion } from "framer-motion";
import { Rocket, BrainCircuit, LineChart, Activity, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

export default function About() {
  const beyondCode = [
    { icon: Rocket, text: "Striving for excellence in Software Engineering." },
    { icon: BrainCircuit, text: "Daily DSA and competitive coding practice." },
    { icon: LineChart, text: "Passionate about finance, startups, and product thinking." },
    { icon: Activity, text: "Energized by sports, fitness, and consistency." },
  ];

  const education = [
    {
      stage: "10th",
      year: "2019 - 2020",
      institute: "State Board",
      highlight: "Built a strong math and science base.",
    },
    {
      stage: "12th",
      year: "2021 - 2022",
      institute: "Higher Secondary (Science)",
      highlight: "Focused on PCM and engineering preparation.",
    },
    {
      stage: "MHT-CET",
      year: "2022",
      institute: "Engineering Entrance",
      highlight: "Qualified for Computer Engineering admission.",
    },
    {
      stage: "B.E. Computer Engineering",
      year: "2022 - 2026",
      institute: "VCET",
      highlight: "CGPA 8.87 | Building full-stack and AI projects.",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl w-full relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-900 dark:text-zinc-300 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-500" /> Discover More
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">About Me</h2>
        </motion.div>

        {/* Two-panel layout only: Core Intro + Zig-zag Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-7 md:p-8 shadow-sm overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Core Intro</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">I am Vaibhav</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                I build scalable products with clean architecture and strong user focus. I enjoy solving hard engineering problems and turning ideas into reliable software.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Full-Stack", "AI Integrations", "Optimization", "Product Mindset"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 p-5 border border-zinc-800 dark:border-zinc-300">
                <h4 className="text-base font-extrabold tracking-tight mb-4">Beyond Code</h4>
                <ul className="space-y-3 text-sm font-semibold">
                  {beyondCode.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.text} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 mt-0.5 opacity-75 shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-7 md:p-8 shadow-sm relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-14 w-52 h-52 bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full" />

            <div className="relative z-10 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-zinc-900 dark:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Education</p>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Zig-zag Journey</h3>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="w-[88%] md:w-[78%] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-extrabold text-zinc-900 dark:text-white">{item.stage}</p>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">{item.year}</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-500 mb-1">{item.institute}</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{item.highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Zig path + flowing arrow */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 760"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M120 160 C320 80, 680 80, 880 210 C700 280, 300 300, 120 390 C320 500, 680 500, 880 600"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                  className="text-zinc-300 dark:text-zinc-700"
                />
              </svg>

              <motion.div
                className="absolute left-0 top-0"
                animate={{
                  x: [120, 360, 640, 880, 660, 400, 120, 360, 640, 880],
                  y: [160, 105, 105, 210, 275, 310, 390, 500, 500, 600],
                  rotate: [-20, -10, -6, 10, 160, 168, 18, 8, 6, 14],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-8 w-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-center text-emerald-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
