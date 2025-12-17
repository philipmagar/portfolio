// ContactFooter.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

export default function ContactFooter() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 font-poppins flex flex-col items-center justify-center bg-background transition-colors duration-300"
    >
      {/* Glowing border around the section */}
      <div className="absolute inset-0 rounded-2xl border border-primary/30 animate-pulse pointer-events-none"></div>

      {/* Fade-in Divider */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "60%" }}
        transition={{ duration: 1 }}
        className="h-0.5 bg-border mb-12"
      />

      {/* Contact Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-text mb-6 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Contact Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-text-muted text-lg md:text-xl max-w-xl text-center mb-12"
      >
        Have a question or opportunity? Feel free to reach out anytime.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Your menssage has been sent.");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-surface border border-border text-text placeholder-text-muted/70 focus:outline-none focus:border-primary transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-surface border border-border text-text placeholder-text-muted/70 focus:outline-none focus:border-primary transition"
        />
        <textarea
          placeholder="Your Message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-surface border border-border text-text placeholder-text-muted/70 focus:outline-none focus:border-primary transition resize-none"
        />
        <button
          type="submit"
          className="relative group flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-surface border border-border text-text text-lg hover:bg-primary/10 hover:border-primary hover:text-primary shadow-lg transition"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition blur-xl bg-primary/20"></span>
          <HiMail size={26} className="text-primary relative z-10" />
          <span className="relative z-10">Send Message</span>
        </button>
      </motion.form>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full mt-20"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-text-muted font-poppins border-t border-border pt-6">
          {/* Left Side */}
          <p>© {new Date().getFullYear()} PhilipMagar — All Rights Reserved</p>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {[
              { icon: <FaLinkedin size={22} />, link: "https://linkedin.com" },
              { icon: <FaGithub size={22} />, link: "https://github.com/philipmagar" },
              { icon: <HiMail size={24} />, link: "mailto:philipmagar111@gmail.com" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full backdrop-blur-md bg-surface border border-border shadow-lg hover:scale-110 transition hover:bg-primary/10 hover:border-primary hover:text-primary"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Floating Back-to-Top Button */}
      <motion.a
        href="#hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed bottom-6 right-6 w-10 h-10 sm:bottom-8 sm:right-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-surface backdrop-blur-md border border-border shadow-xl hover:bg-primary/10 hover:border-primary hover:text-primary cursor-pointer transition text-text"
      >
        <HiArrowUp size={24} />
      </motion.a>
    </section>
  );
}
