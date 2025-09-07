export default function Experience() {
    const TechStack = [
      "PHP",
      "PostgreSQL",
      "REST API",
      "JavaScript",
      "Bootstrap",
      "Cron",
    ];
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400">Work Experience</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-6 md:p-8 transition hover:shadow-lg relative">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Full Stack Developer Intern</h3>
            <div className="text-gray-600 dark:text-gray-300 mb-1">
              Aspiring Media Tech Pvt Ltd, Vasai, Maharashtra &middot; June 2024 – Sept 2024
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200 mt-4">
              <li>
                Automated WhatsApp campaign dispatch with a PHP + RESTful API backend and PostgreSQL database, enabling one-tap delivery to 2,000+ recipients and reducing manual effort by 90%.
              </li>
              <li>
                Built a scheduling engine with cron jobs and controlled batching (5-second intervals), ensuring reliable and timely campaign execution without throttling.
              </li>
              <li>
                Developed interactive dashboards using JavaScript + Bootstrap to track delivery status, click-through rates, and user engagement in real time.
              </li>
              <li>
                Implemented secure role-based access control (admin, campaign managers, and view-only roles), improving access control and ensuring data integrity across the platform.
              </li>
            </ul>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="mb-3 font-semibold text-blue-700 dark:text-blue-300 text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2v-5a2 2 0 00-2-2h-1m-4 0H7a2 2 0 00-2 2v5a2 2 0 002 2h1" /></svg>
                Tech Stack
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {TechStack.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200 ring-1 ring-blue-200/60 dark:ring-blue-400/20 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mb-2 font-semibold text-purple-700 dark:text-purple-300 text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500 dark:text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
                Soft Skills
              </div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 text-[15px] mb-2">
                <li>Teamwork & Collaboration</li>
                <li>Leadership & Initiative</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
              </ul>
            </div>
            <div className="flex justify-end mt-4">
              <a
                href="./completionAspiring.pdf" // Update this path to your actual certificate file
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                title="View Completion Certificate"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}