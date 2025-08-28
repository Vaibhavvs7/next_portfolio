export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js.",
      tech: ["React", "Node.js", "API"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce site using Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#",
    },
    {
      title: "Project 3",
      description: "A personal blog platform developed with Gatsby.",
      tech: ["Gatsby", "GraphQL", "Markdown"],
      link: "#",
    },
    {
      title: "Project 4",
      description: "A personal blog platform developed with Gatsby.",
      tech: ["Gatsby", "GraphQL", "Markdown"],
      link: "#",
    },
  ];
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-6xl w-full bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-8 md:p-12">
        <h2
          id="projects-title"
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 flex flex-col transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}