export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900"
    >
      <div className="max-w-5xl w-full relative">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/*Left Section*/}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Education</h3>
            <ul className="space-y-6">
              <li className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 transition hover:shadow-lg">
                <div className="font-semibold text-lg">B.Tech in Computer Science</div>
                <div className="text-gray-600 dark:text-gray-400">XYZ University, 2021</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">CGPA: 8.7/10</div>
              </li>
              <li className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 transition hover:shadow-lg">
                <div className="font-semibold text-lg">Higher Secondary</div>
                <div className="text-gray-600 dark:text-gray-400">ABC School, 2017</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">Percentage: 92%</div>
              </li>
              <li className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 transition hover:shadow-lg">
                <div className="font-semibold text-lg">Higher Secondary</div>
                <div className="text-gray-600 dark:text-gray-400">ABC School, 2017</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">Percentage: 92%</div>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </div>

          {/*right Section */}
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">Beyond the Code</h3>
            <div className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 transition hover:shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Vaibhav</span> — a curious mind who loves building things and learning new tech.
                When I’m not coding, you’ll find me exploring new gadgets, reading about AI, or hiking in nature.
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>💡 Value lifelong learning & collaboration</li>
              <li>🎸 Play guitar to unwind</li>
              <li>☕ Coffee enthusiast & meme connoisseur</li>
              <li>🌍 Enjoy traveling and meeting new people</li>
            </ul>
            <div className="mt-6 bg-blue-50 dark:bg-slate-800/50 rounded-xl p-4 border-l-4 border-blue-500">
              <span className="italic">Fun fact:</span> I once built a chatbot that helps my friends pick movies!
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
