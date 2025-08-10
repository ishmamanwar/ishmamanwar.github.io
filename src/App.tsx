import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./sections/Hero";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import { SITE } from "./data/site";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const topSection = document.getElementById("top");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 selection:bg-neutral-800 selection:text-white">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Header />
        <main id="top" className="relative">
          <Hero isLoading={isLoading} />
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
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 text-white dark:text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-10 text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
            <span>
              © {new Date().getFullYear()} {SITE.name}
            </span>
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
      </motion.div>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}
