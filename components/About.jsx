export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-blue-600 dark:to-blue-900"
    >
      <div className="max-w-5xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-700 tracking-tight">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-white-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
          Hi, I’m <span className="font-semibold text-blue-600">Vaibhav</span> 👋 — 
          a passionate <span className="font-semibold">Full-Stack Developer</span> 
          who loves building scalable web applications and crafting clean user experiences.  
        </p>

        {/* Skills / Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center mb-10">
          {["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "Socket.io", "WebRTC"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Fun fact / Personality */}
        <p className="text-lg text-white-600 text-center max-w-3xl mx-auto mb-8">
          Outside of coding, you’ll find me <span className="italic">exploring new tech trends</span>,  
          contributing to <span className="font-medium text-blue-600">open-source projects</span>,  
          and sharing my learnings through blogs & talks.  
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-semibold"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition font-semibold"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
