export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-blue-600 dark:to-blue-900"
    >
      <div className="max-w-5xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-green-700 tracking-tight">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 1</h3>
            <p className="text-gray-700 mb-4">
              A web application built with React and Node.js.
            </p>
            <a
              href="#"
              className="mt-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-semibold"
            >
              View Project
            </a>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 2</h3>
            <p className="text-gray-700 mb-4">
              An e-commerce site using Next.js and Tailwind CSS.
            </p>
            <a
              href="#"
              className="mt-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-semibold"
            >
              View Project
            </a>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 3</h3>
            <p className="text-gray-700 mb-4">
              A personal blog platform developed with Gatsby.
            </p>
            <a
              href="#"
              className="mt-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-semibold"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}