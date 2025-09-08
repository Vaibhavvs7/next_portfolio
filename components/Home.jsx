import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
<section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-4xl font-bold mb-6 leading-tight flex flex-wrap items-center justify-center md:justify-start gap-2"
          >
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 ml-2">
              Vaibhav Sapaliya
            </span>
            <span className="ml-1 text-3xl">👋</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-4 font-normal"
          >
            I’m a Software Engineer passionate about building scalable web applications and AI-powered solutions with a focus on clean design and great user experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-8"
          >
            <span className="inline-block align-middle mr-2">💡</span>
            Turning ideas into reliable, user-friendly, and efficient software.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition transform hover:scale-105 shadow-md"
            >
              <span className="text-xl">🔗</span> View My Projects
            </Link>
            <a
              href="./Vaibhav_NoP.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold transition transform hover:scale-105 shadow-md"
            >
              <span className="text-xl">📄</span> Download Resume
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold transition transform hover:scale-105 shadow-md"
            >
              <span className="text-xl">✉️</span> Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-full p-1 bg-gradient-to-tr from-orange-500 to-pink-500">
            <img
              src="/VLogo.jpg"
              alt="Profile Picture"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
