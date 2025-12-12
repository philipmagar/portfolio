// Projects.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform that allows users to browse products, add to cart, and checkout.",
    tech: "React, Node.js, Express, MongoDB",
    image: "/images/ecommerce.png",
    live: "https://your-ecommerce-live-link.com",
    github: "https://github.com/philipmagar/electronics.git",
  },
  {
    title: "Event Management System",
    description:
      "An event management application to create, manage, and track events with real-time notifications.",
    tech: "React, Node.js, PostgreSQL",
    image: "/images/event.png",
    live: "https://your-event-live-link.com",
    github: "https://github.com/yourusername/event-management-system",
  },
  {
    title: "Transformer-Based Product Sentiment Analyzer",
    description:
      "A machine learning-powered tool to analyze customer sentiment from product reviews using transformers.",
    tech: "Python, Streamlit, Transformers",
    image: "/images/sentiment.png",
    live: "https://sentimentanalyzerusingtrasnsformer.streamlit.app/",
    github: "https://github.com/philipmagar/sentimentAnalyzer.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 py-24 font-poppins"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #111111)",
        margin: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Projects
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Explore some of my recent projects, including screenshots and GitHub
          repositories.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #B7E3A3" }}
              className="relative p-6 rounded-2xl border border-white/20 bg-white/5 cursor-pointer flex flex-col items-center shadow-lg transition"
            >
              {/* Screenshot Card */}
              <div className="relative w-full mb-4 rounded-xl overflow-hidden group border border-white/10">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#B7E3A3] via-transparent to-[#B7E3A3] opacity-40 animate-gradientMove pointer-events-none"></div>

                {/* Soft glow layer */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition duration-500 blur-xl bg-[#B7E3A3] pointer-events-none"></div>

                {/* Screenshot with zoom + parallax */}
                <div
                  className="w-full project-img-responsive overflow-hidden h-48 md:h-56 lg:h-64"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x =
                      ((e.clientX - rect.left) / rect.width - 0.5) * 10;
                    const y =
                      ((e.clientY - rect.top) / rect.height - 0.5) * 10;
                    e.currentTarget.children[0].style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.children[0].style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={proj.image}
                    alt={`${proj.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {proj.title}
              </h3>

              <p className="text-gray-300 mb-2">{proj.description}</p>

              {/* Plain tech/tools text */}
              <p className="text-gray-400 text-sm mb-4">{proj.tech}</p>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B7E3A3] hover:text-white transition font-medium"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                )}

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B7E3A3] hover:text-white transition font-medium"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
