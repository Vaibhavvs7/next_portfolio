export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900"
    >
      <div className="max-w-5xl w-full relative">
        {/* Background elements - subtle shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Main content card */}
        <div className="relative backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 md:p-12 z-10">
          {/* Profile picture */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg">
              <img
                src="/profile-image.jpg"
                alt="Vaibhav"
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=Vaibhav")}
              />
            </div>
          </div>

          {/* Title with animated underline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight relative">
            About Me
            <span className="block h-1 w-20 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>

          {/* Intro with improved typography */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Hi, I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Vaibhav</span> 👋 — a passionate{" "}
            <span className="font-semibold">Full-Stack Developer</span>
            who loves building scalable web applications and crafting clean user experiences.
          </p>

          {/* Skills with icons */}
          <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">My Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 justify-items-center mb-12">
            {["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "Socket.io", "WebRTC"].map(
              (skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 w-full justify-center"
                >
                  <i className={skill.icon}></i>
                  {skill.name}
                </span>
              )
            )}
          </div>

          {/* Fun fact / Personality with subtle styling */}
          <div className="bg-blue-50 dark:bg-slate-800/50 rounded-xl p-6 mb-10 border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Outside of coding, you'll find me{" "}
              <span className="italic">exploring new tech trends</span>, contributing to{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">open-source projects</span>, and sharing
              my learnings through blogs & talks.
            </p>
          </div>

          {/* CTA buttons with improved design */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#contact"
              className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Let's Connect
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

