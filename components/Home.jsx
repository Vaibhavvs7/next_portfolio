import { motion } from 'framer-motion'

export default function Home() {
    return(
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        {/* Left: Details */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-8 top-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Hi, I'm Vaibhav Sapaliya 🚀
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl text-lg"
          >
            Welcome to my portfolio! This is built with Next.js, Tailwind CSS, and Framer Motion.
          </motion.p>
        </div>
        {/* Right: Profile Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <motion.img
            src="/profile.jpg"
            alt="Profile Picture"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
    )
}