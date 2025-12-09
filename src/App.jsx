import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ScrollSpyProvider } from "./components/ScrollSpyContext";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ScrollSpyProvider>
      <div
        className="relative min-h-screen"
        style={{
          background: 'linear-gradient(180deg, var(--bg-start, #07122a), var(--bg-end, #071428))',
          color: 'var(--text-color, #e6eef6)'
        }}
      >

        {/* floating table-of-contents removed */}

        {/* Top Navbar */}
        <Navbar />

        {/* Page Sections */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="pt-20">
          <About />
        </section>

   <section id="projects" className="pt-20">
          <Projects />
        </section>
        
        <section id="skills" className="pt-20">
          <Skills />
        </section>

        <section id="contact" className="pt-20 pb-20">
          <Contact />
        </section>

      </div>
    </ScrollSpyProvider>
  );
}
