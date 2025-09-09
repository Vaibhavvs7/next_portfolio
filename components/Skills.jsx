export default function Skills() {
  // Use only blue and green for all cards
  const skills = [
    {
      title: "Languages",
      color: "blue",
      icon: (
        <svg className="w-6 h-6 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18v-1a4 4 0 00-3-3.87M12 3v1m0 16v1m8-8h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7" /></svg>
      ),
      items: ["Java", "JavaScript", "Python"],
    },
    {
      title: "Frameworks & Libraries",
      color: "green",
      icon: (
        <svg className="w-6 h-6 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
      ),
      items: ["React.js", "Node.js", "Express.js", "Socket.IO"],
    },
    {
      title: "Databases",
      color: "blue",
      icon: (
        <svg className="w-6 h-6 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3" /><path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7" /></svg>
      ),
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "APIs & Authentication",
      color: "green",
      icon: (
        <svg className="w-6 h-6 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0 4v-2m0 0a4 4 0 100-8 4 4 0 000 8zm0-8V5m0 0a2 2 0 114 0 2 2 0 01-4 0z" /></svg>
      ),
      items: ["RESTful APIs", "JWT", "Clerk"],
    },
    {
      title: "Developer Tools",
      color: "blue",
      icon: (
        <svg className="w-6 h-6 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L6 21h12l-3.75-4M12 3v14" /></svg>
      ),
      items: ["Git", "GitHub", "Postman", "Docker", "GitHub Actions"],
    },
    {
      title: "AI-Data Science",
      color: "green",
      icon: (
        <svg className="w-6 h-6 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
      ),
      items: ["Pandas", "NumPy", "Matplotlib"],
    },
  ];
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 dark:text-blue-400 tracking-tight">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((cat) => (
            <div
              key={cat.title}
              className={`bg-white dark:bg-slate-800/60 border border-${cat.color}-100 dark:border-${cat.color}-900 rounded-xl shadow-sm p-7 flex flex-col items-center transition hover:shadow-lg`}
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className={`text-xl font-bold text-${cat.color}-700 dark:text-${cat.color}-300`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.items.map((t) => (
                  <span
                    key={t}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium bg-${cat.color}-50 text-${cat.color}-700 dark:bg-${cat.color}-500/15 dark:text-${cat.color}-200 ring-1 ring-${cat.color}-200/60 dark:ring-${cat.color}-400/20 shadow-sm`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
