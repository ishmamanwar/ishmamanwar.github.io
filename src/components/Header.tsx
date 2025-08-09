import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { SITE } from "../data/site";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/50 border-b border-neutral-200 dark:border-neutral-800"
    >
      <nav className="max-w-4xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <motion.a
          href="#top"
          className="font-medium tracking-wide no-underline flex items-center gap-2 group"
          onClick={closeMobileMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="no-underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                initial={false}
              />
            </motion.a>
          ))}
          <motion.a
            href={SITE.resumeHref}
            download
            className="no-underline inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 rounded-xl px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Download size={16} />
            </motion.div>
            <span className="font-medium">Resume</span>
          </motion.a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <motion.a
            href={SITE.resumeHref}
            download
            className="no-underline inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 rounded-lg px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={14} /> Resume
          </motion.a>

          <motion.button
            onClick={toggleMobileMenu}
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur border-t border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors border-b border-neutral-100 dark:border-neutral-800"
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
