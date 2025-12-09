import { useContext, useState, useEffect } from "react";
import { ScrollSpyContext } from "./ScrollSpyContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { active } = useContext(ScrollSpyContext);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`sticky top-0 left-0 w-full z-50 font-poppins transition-all duration-300`}
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #111111)",
        boxShadow: scrolled ? "0 2px 12px rgba(183, 227, 163, 0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(183, 227, 163, 0.4)" : "none",
      }}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center px-6 transition-all duration-300 ${
          scrolled ? "py-1.5" : "py-4"
        }`}
      >
        <h1
          className="font-bold text-white cursor-pointer transition-all duration-300"
          style={{ fontSize: scrolled ? "1.5rem" : "2rem" }}
          onClick={() => window.location.reload()}
        >
          Philip_mgr
        </h1>

        <div className="flex gap-8 ml-auto items-center">
          {links.map((l) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              className="transition-transform text-lg md:text-xl"
              style={{
                color: active === l.id ? "#B7E3A3" : "white",
                textDecoration: "none",
                textShadow:
                  active === l.id
                    ? "0 0 8px #B7E3A3, 0 0 12px #B7E3A3"
                    : "none",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
