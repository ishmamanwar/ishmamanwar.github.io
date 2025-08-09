import { motion } from "framer-motion";
import { SITE } from "../data/site";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden h-screen flex items-center justify-center px-4 md:px-6"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-neutral-500 dark:bg-neutral-500 rounded-full opacity-50"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              backgroundPosition: "200% center",
            }}
            transition={{
              duration: 0.3,
              backgroundPosition: { duration: 0.8, ease: "easeInOut" },
            }}
            style={{
              backgroundSize: "200% 100%",
              backgroundPosition: "0% center",
            }}
          >
            {SITE.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed px-4"
            variants={itemVariants}
          >
            {SITE.intro}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#experience"
            className="group relative px-6 md:px-8 py-3 md:py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full font-medium text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-200 to-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">Explore My Work</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center relative group cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2"
          />
          <motion.div
            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-8 w-32 h-32 border border-neutral-200 dark:border-neutral-800 rounded-full opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-8 w-24 h-24 border border-neutral-200 dark:border-neutral-800 rounded-full opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
