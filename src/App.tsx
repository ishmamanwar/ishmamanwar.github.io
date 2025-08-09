import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 selection:bg-neutral-800 selection:text-white">
      <Header />
      <main id="top" className="relative">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{
              scale: 1.1,
              y: -2,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 text-white dark:text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            aria-label="Scroll to top"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-200 to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronUp size={24} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-10 text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 opacity-50" />
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between relative z-10">
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            © {new Date().getFullYear()} {SITE.name}
          </motion.span>
          <div className="flex items-center gap-4">
            {SITE.social.github && (
              <motion.a
                className="no-underline inline-flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                href={SITE.social.github}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            )}
            {SITE.social.linkedin && (
              <motion.a
                className="no-underline inline-flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                href={SITE.social.linkedin}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            )}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// Data imports
import { SITE } from "./data/site";
