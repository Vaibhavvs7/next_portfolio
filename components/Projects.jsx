export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 py-16">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-4xl font-extrabold mb-8 text-green-700 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 1</h3>
            <p className="text-gray-700 mb-2">A web application built with React and Node.js.</p>
            <a href="#" className="text-green-600 underline hover:text-green-800">View Project</a>
          </div>
          <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 2</h3>
            <p className="text-gray-700 mb-2">An e-commerce site using Next.js and Tailwind CSS.</p>
            <a href="#" className="text-green-600 underline hover:text-green-800">View Project</a>
          </div>
          <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-green-800">Project 3</h3>
            <p className="text-gray-700 mb-2">A personal blog platform developed with Gatsby.</p>
            <a href="#" className="text-green-600 underline hover:text-green-800">View Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}