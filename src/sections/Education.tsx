import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "../data/education";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
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

  const iconVariants = {
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
      id="education"
      aria-label="Education and Certifications"
      className="scroll-mt-20 min-h-screen py-20 relative overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 rounded-xl"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <GraduationCap className="w-6 h-6 text-white dark:text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    Education
                  </h3>
                </div>

                <div className="space-y-6">
                  {EDUCATION.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-neutral-50/50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-500"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {edu.degree}
                        </h4>
                        {edu.specialization && (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          {edu.location}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          {edu.period}
                        </p>
                        {edu.externalUrl && (
                          <motion.a
                            href={edu.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 text-white dark:text-black text-sm rounded-lg hover:from-neutral-800 hover:to-neutral-600 dark:hover:from-neutral-200 dark:hover:to-neutral-400 transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ExternalLink size={14} />
                            </motion.div>
                            View
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 rounded-xl"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Award className="w-6 h-6 text-white dark:text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    Active Certifications
                  </h3>
                </div>

                <div className="space-y-6">
                  {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-neutral-50/50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-500"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          Expiration: {cert.expiration}
                        </p>
                        {cert.externalUrl && (
                          <motion.a
                            href={cert.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 text-white dark:text-black text-sm rounded-lg hover:from-neutral-800 hover:to-neutral-600 dark:hover:from-neutral-200 dark:hover:to-neutral-400 transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ExternalLink size={14} />
                            </motion.div>
                            View
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-20"></div>
    </section>
  );
}
