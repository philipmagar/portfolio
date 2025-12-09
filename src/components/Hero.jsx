import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-24 font-poppins"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #111111)",
        margin: 0,
      }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Hello,<br />
            I’m <span className="text-[#B7E3A3]">Full Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mb-8 text-lg md:text-xl"
          >
            I build modern web applications from database to user interface. Specialized in React, Node.js, and scalable cloud architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-start gap-6 items-center mb-10"
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-white/20 text-gray-200 hover:bg-white/5 transition"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-white/20 text-gray-200 hover:bg-white/5 transition"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right side - Profile */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="profile"
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}