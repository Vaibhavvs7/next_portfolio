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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col rounded-xl bg-white/80 dark:bg-white/10 p-6 md:p-7 shadow-sm ring-1 ring-black/5 dark:ring-white/10 hover:shadow-md transition hover:-translate-y-1 focus-within:ring-indigo-400/60"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300 ring-1 ring-indigo-200/60 dark:ring-indigo-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={p.link}
                  aria-label={`View ${p.title}`}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
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