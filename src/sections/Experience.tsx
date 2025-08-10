import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-20 min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A timeline of my professional experience and growth
          </p>
        </motion.div>

        {/* Desktop/Tablet Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="relative hidden md:block"
        >
          {/* Central timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-600 transform -translate-x-1/2 origin-top"
            variants={timelineVariants}
          />

          <div className="space-y-16">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.company + item.role}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    variants={nodeVariants}
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 rounded-full border-4 border-white dark:border-black shadow-lg relative group"
                    style={{ marginLeft: "2.5px" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-neutral-400 dark:bg-neutral-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <motion.article
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <div className="space-y-3 relative z-10">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                          {item.company}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          {item.location}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          {item.period}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full font-medium border border-neutral-200 dark:border-neutral-600"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(0,0,0,0.1)",
                                borderColor: "rgba(0,0,0,0.2)",
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                        {item.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 rounded-full mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="text-sm leading-relaxed">
                              {bullet}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Vertical Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="md:hidden space-y-6"
        >
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.company + item.role}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                y: -2,
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-lg backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                    {item.company}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                    {item.location}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                    {item.period}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full font-medium border border-neutral-200 dark:border-neutral-600"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(0,0,0,0.1)",
                          borderColor: "rgba(0,0,0,0.2)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                  {item.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="h-20"></div>
    </section>
  );
}
