import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
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

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="scroll-mt-20 min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full [background-image:linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(0,0,0,0.02)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(0,0,0,0.02)_75%),linear-gradient(-45deg,transparent_75%,rgba(0,0,0,0.02)_75%)] dark:[background-image:linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,0.03)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,255,255,0.03)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,255,255,0.03)_75%)] [background-size:20px_20px] [background-position:0_0,0_10px,10px_-10px,-10px_0px]" />
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
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {PROJECTS.map((p, index) => (
            <motion.article
              key={p.name}
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
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full font-medium border border-neutral-200 dark:border-neutral-600"
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

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <figure className="col-span-2 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors relative">
                    <motion.img
                      src={p.desktopGif}
                      alt={p.name + " desktop preview"}
                      className="w-full h-32 md:h-40 object-contain bg-neutral-50 dark:bg-neutral-800"
                      loading="lazy"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                    <figcaption className="px-2 py-1 md:px-3 md:py-2 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 text-center font-medium bg-neutral-50 dark:bg-neutral-800">
                      Desktop
                    </figcaption>
                  </figure>
                  <figure className="col-span-1 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors relative">
                    <motion.img
                      src={p.mobileGif}
                      alt={p.name + " mobile preview"}
                      className="w-full h-32 md:h-40 object-contain bg-neutral-50 dark:bg-neutral-800"
                      loading="lazy"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                    <figcaption className="px-2 py-1 md:px-3 md:py-2 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 text-center font-medium bg-neutral-50 dark:bg-neutral-800">
                      Mobile
                    </figcaption>
                  </figure>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 text-sm">
                  {p.live && (
                    <motion.a
                      className="no-underline inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 text-white dark:text-black rounded-lg hover:from-neutral-800 hover:to-neutral-600 dark:hover:from-neutral-200 dark:hover:to-neutral-400 transition-all duration-300 font-medium text-center shadow-lg hover:shadow-xl"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                      Live Demo
                    </motion.a>
                  )}
                  {p.repo && (
                    <motion.a
                      className="no-underline inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 font-medium text-center group"
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                      >
                        <Github size={16} />
                      </motion.div>
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="h-20"></div>
    </section>
  );
}
