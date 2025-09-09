export default function Contacts() {
    return (
        <>
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
                        I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 mt-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
                                        </span>
                                        <a
                                            href="mailto:vvsvaibhav07@gmail.com"
                                            className="font-semibold text-indigo-600 dark:text-indigo-400 underline decoration-indigo-300/50 hover:decoration-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition text-base"
                                        >
                                            vvsvaibhav07@gmail.com
                                        </a>
                                    </div>
                       
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                        <a
                            href="https://www.linkedin.com/in/vaibhavsapaliya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open LinkedIn profile"
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62zm0 0"/></svg>
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Vaibhavvs7"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub profile"
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-gray-900 text-white hover:bg-black/90 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                            GitHub
                        </a>
                        <a
                            href="mailto:vvsvaibhav07@gmail.com"
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow ring-1 ring-black/5 dark:ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            aria-label="Send Email"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
                            Email
                        </a>
                    </div>
                                        <a
                                                href="#home"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ring-1 ring-gray-200 dark:ring-white/10 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                        >
                                                Back to Home
                                        </a>
                </div>
            </section>
            <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-transparent mt-1">
                &copy; {new Date().getFullYear()} Vaibhav Sapaliya. All rights reserved.
            </footer>
        </>
    );
}
