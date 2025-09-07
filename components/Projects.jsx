export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Real-Time Collaborative Coding Platform",
      description:
        "Enables live code editing, AI-assisted file generation, and shared execution results with real-time presence and project management, boosting team productivity through faster workflows and reduced manual effort.",
      tech: [
        "Node.js",
        "Socket.IO",
        "Google Gemini",
        "React",
        "MongoDB",
        "JWT",
        "Bcrypt",
        "Redis"
      ],
      link: "https://github.com/Vaibhavvs7/rag-with-pinecone-langchain",
      image: "/project1.jpg",
    },
    {
      title: "Chat-with-PDF RAG",
      description:
        "Developed a system to query large PDF collections with source-cited, context-grounded answers, optimized for fast ingestion, scalable retrieval, and sub-second response times.",
      tech: [
        "Node.js",
        "LangChain",
        "Pinecone",
        "Google Gemini",
        "PDF.js"
      ],
      link: "https://github.com/Vaibhavvs7/AI-Powered-Real-Time-Collaborative-Coding-Platform",
      image: "/project2.jpg",
    },
    {
      title: "X Post AI Agent using MCP",
      description:
        "Built an AI-driven agent that generates and posts content to X, with modular state management, secure API integration, and robust error handling for reliable automated tweeting.",
      tech: [
        "JavaScript",
        "Node.js",
        "X API v2",
        "OAuth 1.0a",
        "Modal Context Protocol",
        "dotenv"
      ],
      link: "https://github.com/Vaibhavvs7/MCP-X-",
      image: "/project2.jpg",
    },
  ];
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-6xl w-full bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-4 sm:p-8 md:p-12">
        <h2
          id="projects-title"
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-xl transition hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-400/60 overflow-hidden"
            >
              {/* Project image (optional, fallback to gradient) */}
              <div className="h-40 w-full bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100 dark:from-blue-900/30 dark:via-blue-800/30 dark:to-purple-900/20 flex items-center justify-center">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-5xl text-blue-300 dark:text-blue-700">📦</span>
                )}
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300 ring-1 ring-blue-200/60 dark:ring-blue-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={p.link}
                    aria-label={`View ${p.title}`}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    View Project
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}