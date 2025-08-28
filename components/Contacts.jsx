export default function Contacts() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
        >
            <div className="max-w-3xl w-full bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-8 md:p-12 text-center">
                <h2
                    id="contact-title"
                    className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                >
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Contact Me
                    </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    You can reach me via email at{" "}
                    <a
                        href="mailto:your.email@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400 underline decoration-indigo-300/50 hover:decoration-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                    >
                        your.email@example.com
                    </a>
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open LinkedIn profile"
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub profile"
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-gray-900 text-white hover:bg-black/90 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                        GitHub
                    </a>
                </div>
                <a
                    href="#home"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ring-1 ring-gray-200 dark:ring-white/10 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                    Back to Home
                </a>
            </div>
        </section>
    );
}
