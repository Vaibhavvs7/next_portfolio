"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-[2rem] bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-2xl overflow-hidden h-full cursor-pointer perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-48 w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden rounded-t-[2rem]"
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition duration-500 group-hover:scale-110" />
        ) : (
          <span className="text-5xl text-zinc-300 dark:text-zinc-600">📦</span>
        )}
      </div>
      
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="flex-1 flex flex-col p-6 sm:p-8 bg-gradient-to-t from-white/90 via-white/80 to-transparent dark:from-zinc-900/90 dark:via-zinc-900/80 -mt-20 z-10 rounded-b-[2rem]"
      >
        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white tracking-tight mt-12 group-hover:text-emerald-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-1 font-medium">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-full gap-2 rounded-full px-6 py-3 text-sm font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition"
          >
            Explore Repo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      
      {/* Glossy Overlay */}
      <motion.div 
        style={{
           transform: "translateZ(100px)",
           background: `linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 25%, transparent 30%)`,
        }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
      />
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "AI Collaborative Coding Platform",
      description: "Live code editing with AI assistance, real-time sync via sockets, and robust workspace management to boost developer velocity.",
      tech: ["Node.js", "Socket.IO", "Gemini", "React", "MongoDB"],
      link: "https://github.com/Vaibhavvs7/AI-Powered-Real-Time-Collaborative-Coding-Platform",
      image: "/real.png",
    },
    {
      title: "Chat-with-PDF RAG Engine",
      description: "Query large PDF collections and receive source-cited, context-grounded AI answers with sub-second hybrid retrieval via Pinecone.",
      tech: ["LangChain", "Pinecone", "Gemini", "PDF.js"],
      link: "https://github.com/Vaibhavvs7/rag-with-pinecone-langchain",
      image: "/rag.jpg",
    },
    {
      title: "Autonomic X Post Agent",
      description: "An AI-driven agent running on MCP that autonomically generates contextually relevant content and posts directly to X natively.",
      tech: ["Node.js", "X API v2", "OAuth 1.0a", "MCP"],
      link: "https://github.com/Vaibhavvs7/MCP-X-",
      image: "/project2.jpg",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl w-full perspective-1000">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Featured Work
          </h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-white rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {projects.map((p) => (
            <div key={p.title} className="h-full perspective-1000">
               <TiltCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}