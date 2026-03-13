import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MoveRight } from "lucide-react";
import dynamic from "next/dynamic";

const Contacts3D = dynamic(() => import("./Contacts3D"), { ssr: false });

export default function Contacts() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 w-full overflow-hidden"
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text / Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Let's Connect Globally
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-zinc-900 dark:text-white leading-tight">
              Ready to create something <span className="text-emerald-500">extraordinary?</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
              Whether you have a groundbreaking idea or just want to say hi, my inbox is always open. Let's build the future together.
            </p>
            
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a
                href="mailto:vvsvaibhav07@gmail.com"
                className="group flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white dark:group-hover:bg-zinc-950 transition-colors">
                    <Mail className="w-5 h-5 text-zinc-900 dark:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Email</span>
                    <span className="font-bold text-zinc-900 dark:text-white">vvsvaibhav07@gmail.com</span>
                  </div>
                </div>
                <MoveRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/vaibhavsapaliya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0077b5]/10 text-[#0077b5] rounded-full flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Network</span>
                    <span className="font-bold text-zinc-900 dark:text-white">LinkedIn Profile</span>
                  </div>
                </div>
                <MoveRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://github.com/Vaibhavvs7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Code</span>
                    <span className="font-bold text-zinc-900 dark:text-white">Github Projects</span>
                  </div>
                </div>
                <MoveRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right 3D Globe Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full h-[500px] relative bg-zinc-50 dark:bg-zinc-950 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm flex items-center justify-center cursor-grab active:cursor-grabbing group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 to-transparent dark:from-zinc-900 dark:to-transparent opacity-50 z-10 pointer-events-none"></div>
            
            <Contacts3D />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="px-4 py-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
                 Drag to Rotate
               </span>
            </div>
          </motion.div>
          
        </div>
      </section>
      
      <footer className="w-full py-8 text-center bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vaibhav Sapaliya.
          </p>
          <a
            href="#home"
            className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-2"
            onClick={e => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Back to top <MoveRight className="w-4 h-4 -rotate-90" />
          </a>
        </div>
      </footer>
    </>
  );
}
