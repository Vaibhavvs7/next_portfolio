import { motion } from "framer-motion";
import { Rocket, BrainCircuit, LineChart, Activity, Sparkles, GraduationCap } from "lucide-react";

export default function About() {
  const beyondCode = [
    { icon: Rocket, text: "Constantly improving my engineering skills and software design thinking." },
    { icon: BrainCircuit, text: "Practicing data structures and algorithms to strengthen problem-solving skills." },
    { icon: LineChart, text: "Interested in startups, product thinking, and technology-driven innovation." },
    { icon: Activity, text: "Maintaining discipline through sports, fitness, and continuous learning." },
  ];

  const education = [
    {
      stage: "10th",
      year: "2019 - 2020",
      institute: "Maharashtra State Board",
      percentage: "89.80%",
      highlight: "Built a strong math and science base.",
    },
    {
      stage: "12th",
      year: "2021 - 2022",
      institute: "Higher Secondary (Science)",
      percentage: "85.67%",
      highlight: "Focused on PCM and engineering preparation.",
    },
    {
      stage: "MHT-CET",
      year: "2022",
      institute: "Engineering Entrance",
      percentage: "96.67 percentile",
      highlight: "Secured Scholarship for top performance in State.",
    },
    {
      stage: "B.E. Computer Engineering",
      year: "2022 - 2026",
      institute: "VCET",
      percentage: "8.87 CGPA",
      highlight: "Building full-stack and AI projects.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl w-full relative transform scale-[0.9] md:scale-95 origin-top">
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
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-4 font-medium">
                I’m a software engineer passionate about building scalable web applications, real-time systems, and AI-powered products. I focus on writing clean, maintainable code and designing architectures that turn complex ideas into reliable software.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6 font-medium">
                I enjoy solving challenging engineering problems, learning new technologies, and building products that are both technically strong and user-focused.
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
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Education Journey</h3>
              </div>
            </div>

            <div className="relative z-10 space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="w-[88%] md:w-[78%] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 p-5 shadow-sm relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <p className="text-sm md:text-base font-extrabold text-zinc-900 dark:text-white">{item.stage}</p>
                      <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-500/10 text-[11px] md:text-xs font-bold text-emerald-700 dark:text-emerald-400">
                        {item.percentage}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <p className="text-xs md:text-sm font-semibold text-zinc-500">{item.institute}</p>
                      <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">{item.year}</span>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{item.highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Curved timeline connecting path */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg
                className="absolute inset-x-0 top-24 h-[calc(100%-8rem)] w-full opacity-60 dark:opacity-40"
                viewBox="0 0 100 100"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 85 10 C 85 25, 15 25, 15 35 C 15 45, 85 45, 85 60 C 85 75, 15 75, 15 90"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                  className="text-zinc-300 dark:text-zinc-700"
                />
                <motion.path
                  d="M 85 10 C 85 25, 15 25, 15 35 C 15 45, 85 45, 85 60 C 85 75, 15 75, 15 90"
                  stroke="url(#glowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 4px rgba(16,185,129,0.5))" }}
                />
                <defs>
                  <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
