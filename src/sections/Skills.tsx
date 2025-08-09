import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/skills";
import { renderLogo } from "../data/logos";

export default function SkillsSection() {
  const groups = SKILL_GROUPS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-20 h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full [background-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] dark:[background-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My technical expertise and the tools I use to build amazing
            experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {groups.map((g, groupIndex) => (
            <motion.div
              key={g.label}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="space-y-4 relative z-10">
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {g.label}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {g.items.map((k, index) => (
                    <motion.li
                      key={String(k)}
                      variants={skillVariants}
                      className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 group/skill cursor-pointer"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(0,0,0,0.05)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="h-5 md:h-6 w-5 md:w-6 shrink-0 group-hover/skill:scale-110 transition-transform duration-200"
                        variants={logoVariants}
                        whileHover="hover"
                      >
                        {renderLogo(String(k))}
                      </motion.span>
                      <motion.span
                        className="font-medium text-neutral-700 dark:text-neutral-200 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-neutral-100 transition-colors text-sm md:text-base"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {String(k)}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
