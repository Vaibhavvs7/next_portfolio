import { motion } from "framer-motion";
import { FaAws, FaDocker, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { Database, Server, Code2, Cloud, Wrench, Braces } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "Python"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "REST APIs", "Socket.IO"],
    },
    {
      title: "Frontend",
      icon: Braces,
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "SQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git"],
    },
  ];

  const orbitTech = [
    { name: "Java", description: "Object-oriented programming language for scalable backend systems.", Icon: FaJava, primary: true },
    { name: "Core Java", description: "Strong fundamentals in OOP, collections, concurrency, and JVM internals.", Icon: FaJava, primary: true },
    { name: "JavaScript", description: "Primary language for interactive frontend and backend application development.", Icon: SiJavascript, primary: true },
    { name: "SQL", description: "Structured querying and relational data modeling for production-grade systems.", Icon: Database, primary: true },
    { name: "AWS", description: "Cloud services for scalable deployment, storage, monitoring, and reliability.", Icon: FaAws, primary: true },
    { name: "React", description: "Component-driven UI development.", Icon: FaReact, primary: false },
    { name: "Node.js", description: "Event-driven runtime for APIs and backend services.", Icon: FaNodeJs, primary: false },
    { name: "MongoDB", description: "Flexible document database.", Icon: SiMongodb, primary: false },
    { name: "PostgreSQL", description: "Reliable relational database.", Icon: SiPostgresql, primary: false },
    { name: "Next.js", description: "Full-stack React framework.", Icon: SiNextdotjs, primary: false },
    { name: "Docker", description: "Containerized development workflows.", Icon: FaDocker, primary: false },
  ];

  const innerRingNodes = orbitTech.filter((item) => item.primary);
  const outerRingNodes = orbitTech.filter((item) => !item.primary);

  const placeOnRing = (nodes, radius, startAngle = -Math.PI / 2) => {
    return nodes.map((item, index) => {
      const angle = (2 * Math.PI * index) / nodes.length + startAngle;
      return {
        ...item,
        angle,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  };

  const innerRingRadius = 170;
  const outerRingRadius = 300;

  const innerRingTech = placeOnRing(innerRingNodes, innerRingRadius);
  const outerRingTech = placeOnRing(outerRingNodes, outerRingRadius);

  return (
    <section id="skills" className="py-14 md:py-20 flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">

          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Tech Ecosystem
          </h2>

          <div className="h-1 w-20 bg-zinc-900 dark:bg-white rounded-full mb-8"></div>

          <p className="text-[15px] md:text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-lg">
            I build products with the modern JavaScript ecosystem while grounding backend architecture in Java and Core Java principles.
            My stack focuses on scalable APIs, SQL-driven data systems, and real-time communication pipelines.
            I deploy cloud-native services on AWS and integrate AI capabilities into full-stack applications built for reliability and growth.
          </p>

          <div className="space-y-4 md:space-y-5">
            {skillGroups.map((group) => {

              const GroupIcon = group.icon;

              return (
                <div key={group.title} className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/30 px-3 py-3">

                  <div className="flex items-center gap-2 mb-2.5">
                    <GroupIcon className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-zinc-500">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {

                      const isPrimary = ["Java", "JavaScript", "SQL", "AWS", "Core Java"].includes(skill);

                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm cursor-default ${
                            isPrimary
                              ? "text-emerald-700 dark:text-emerald-200 border-emerald-300/80 dark:border-emerald-400/60 bg-emerald-50 dark:bg-emerald-500/15"
                              : "text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* RIGHT SIDE ORBIT */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[500px] sm:h-[600px] lg:h-[680px] mt-8 lg:mt-0">

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="absolute w-[340px] h-[340px] rounded-full border border-emerald-300/60 border-dashed"></div>
            <div className="absolute w-[560px] h-[560px] rounded-full border border-zinc-300/60 border-dashed"></div>


            {/* INNER RING */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >

              {innerRingTech.map((tech) => {

                const Icon = tech.Icon;

                return (
                  <motion.div
                    key={tech.name}
                    className="group absolute z-20"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${tech.x}px), calc(-50% + ${tech.y}px))`,
                    }}
                  >

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                      className="relative w-[70px] h-[70px] rounded-full border border-emerald-400 bg-emerald-500/20 text-emerald-100 flex items-center justify-center"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>

                  </motion.div>
                );
              })}

            </motion.div>


            {/* OUTER RING */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >

              {outerRingTech.map((tech) => {

                const Icon = tech.Icon;

                return (
                  <motion.div
                    key={tech.name}
                    className="group absolute z-10"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${tech.x}px), calc(-50% + ${tech.y}px))`,
                    }}
                  >

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="relative w-[54px] h-[54px] rounded-full border border-zinc-500 bg-zinc-900 text-zinc-200 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                  </motion.div>
                );
              })}

            </motion.div>


            {/* CORE */}
            <div className="absolute z-20 w-32 h-32 rounded-full bg-zinc-900 border border-zinc-700 shadow-xl flex flex-col items-center justify-center text-center px-2">
              <span className="font-extrabold text-white text-lg">Core</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.14em]">
                Full-Stack Engineering
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}