import { useContext, useState, useEffect } from "react";
import { ScrollSpyContext } from "./ScrollSpyContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { active } = useContext(ScrollSpyContext);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contacts" },
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
      className={`sticky top-0 left-0 w-full z-50 font-poppins transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center px-6 transition-all duration-300 ${scrolled ? "py-1.5" : "py-4"
          }`}
      >
        <h1
          className={`font-bold cursor-pointer transition-all duration-300 ${scrolled ? "text-2xl" : "text-3xl"
            } text-text`}
          onClick={() => window.location.reload()}
        >
          फिलिप
        </h1>

        {/* desktop links */}
        <div className="hidden md:flex gap-8 ml-auto items-center">
          {links.map((l) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              className={`transition-colors text-lg font-medium ${active === l.id
                ? "text-primary"
                : "text-text-muted hover:text-primary"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface text-text hover:text-primary transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden ml-4">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B7E3A3]"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-lg font-medium py-2 px-3 rounded-md ${active === l.id
                    ? "text-primary bg-surface"
                    : "text-text-muted hover:bg-surface"
                    }`}
                >
                  {l.label}
                </a>
              ))}

              <div className="flex items-center justify-between px-3 py-2 border-t border-border mt-2">
                <span className="text-text-muted">Switch Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-surface text-text hover:text-primary transition-colors"
                >
                  {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
