import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-24 font-poppins bg-background transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
          About Me
        </h2>
        <p className="text-text-muted text-lg md:text-xl mb-6 leading-relaxed">
          I am a Full Stack Developer, building modern web applications from the ground up.
          I specialize in React, Node.js, and database design, creating scalable and user-friendly applications.
          Passionate about clean code, seamless UI, and robust backend systems.
        </p>
        <p className="text-text-muted text-base md:text-lg">
          My goal is to deliver high-quality software that brings ideas to life while ensuring maintainability
          and performance across all platforms.
        </p>
      </motion.div>
    </section>
  );
}
