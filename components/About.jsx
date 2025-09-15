import { motion } from "framer-motion";

export default function About() {
  // Motion variants for staggered children
  const listItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900"
    >
      <div className="max-w-5xl w-full relative">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left Section: Education */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
              Education
            </h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  title: "BE in Computer Engineering",
                  institute:
                    "Vidyavardhini's College of Engineering & Technology, 2022-2026",
                  extra: "CGPA: 8.87/10",
                },
                {
                  title: "MHTCET",
                  institute: "Entrance Exam, 2022",
                  extra: "Percentile : 96.7%",
                },
                {
                  title: "Higher Secondary",
                  institute: "Adarsh Education Society, 2020-2022",
                  extra: "Percentage: 85.7%",
                },
                {
                  title: "Secondary School",
                  institute: "Gurukul English High School, 2020",
                  extra: "Percentage: 89%",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: -1,
                    borderColor: "#5cdaed",
                  }} // lighter blue
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 
             rounded-xl shadow-sm p-5 cursor-pointer transition-shadow"
                >
                  <div className="font-semibold text-lg">{item.title}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.institute}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {item.extra}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Section: Beyond the Code */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">
              Beyond the Code
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-blue-900 rounded-xl shadow-sm p-5 transition-shadow hover:shadow-lg"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I’m{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Vaibhav
                </span>{" "}
                — a curious mind who loves building things and learning new
                tech. When I’m not coding, you’ll find me exploring new gadgets,
                reading about AI, or hiking in nature.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
              >
                {[
                  "🚀 Striving to become a top Software Development Engineer with strong problem-solving skills.",
                  "📚 Growing daily through DSA practice and competitive coding.",
                  "🤖 Exploring AI technologies and building real-world applications.",
                  "📈 Passionate about finance, business, and startups.",
                  "🏃 Staying energized with sports and fitness.",
                  "🌱 Believing in progress over perfection.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    whileHover={{ x: 4, color: "#3b82f6" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-6 bg-purple-50 dark:bg-slate-800/50 rounded-xl p-4 border-l-4 border-purple-500 cursor-pointer"
              >
                <span className="italic">Quote:</span> “Strive for progress, not
                perfection.”
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
