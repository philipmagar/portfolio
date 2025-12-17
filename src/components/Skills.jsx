// Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNode, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGithub,
  SiGit
} from "react-icons/si";
import { GiBrain } from "react-icons/gi"; // Soft skills icon

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-[#61DBFB]" />,
      skills: ["React", "Next.js", "HTML", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <FaNode className="text-[#3C873A]" />,
      skills: ["Node.js", "Python", "Django", "REST APIs"],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-[#FF6F00]" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Cloud",
      icon: <SiDocker className="text-[#0db7ed]" />,
      skills: ["AWS", "Docker"],
    },
    {
      title: "Tools & Workflow",
      icon: <SiGithub className="text-white" />,
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Soft Skills",
      icon: <GiBrain className="text-[#FFD700]" />, // Golden color for soft skills
      skills: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 font-poppins bg-background transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-text text-center mb-12"
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--color-primary)" }}
            className="bg-surface backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col items-center shadow-lg cursor-pointer transition"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1, 1] }}
              whileHover={{ scale: 1.2, textShadow: "0 0 15px var(--color-primary)" }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 1 }}
              className="text-4xl mb-4"
            >
              {cat.icon}
            </motion.div>

            <h3 className="text-xl font-semibold text-text mb-4">{cat.title}</h3>

            <ul className="text-text-muted flex flex-col gap-2 text-center">
              {cat.skills.map((skill, i) => (
                <li
                  key={i}
                  className="hover:text-primary transition duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
