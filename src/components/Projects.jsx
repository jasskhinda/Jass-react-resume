import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Calendar, Eye } from 'lucide-react';

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "IVitaBoost",
      url: "ivitaboost.com",
      description: "Health and wellness e-commerce platform with custom booking system",
      tech: ["WordPress", "WooCommerce", "Custom PHP"],
      category: "E-commerce",
      year: "2024"
    },
    {
      name: "R&J Medical Services",
      url: "randjmedicalservices.com",
      description: "Professional medical services website with appointment scheduling",
      tech: ["WordPress", "Custom Forms", "Responsive Design"],
      category: "Healthcare",
      year: "2023"
    },
    {
      name: "John Peters Roofing",
      url: "johnpetersroofing.com",
      description: "Construction company website with project gallery and quotes system",
      tech: ["WordPress", "Bootstrap", "SEO Optimization"],
      category: "Construction",
      year: "2023"
    },
    {
      name: "Bugz Bug Me",
      url: "bugzbugme.com",
      description: "Pest control services platform with service area mapping",
      tech: ["WordPress", "Google Maps API", "Lead Generation"],
      category: "Services",
      year: "2022"
    },
    {
      name: "The Mug",
      url: "themug.com",
      description: "Custom merchandise store with design customization tools",
      tech: ["Shopify", "Custom Apps", "Print API"],
      category: "E-commerce",
      year: "2022"
    },
    {
      name: "Ashers Studio",
      url: "ashersstudio.com",
      description: "Creative studio portfolio with dynamic project showcase",
      tech: ["WordPress", "Custom Post Types", "Animation"],
      category: "Portfolio",
      year: "2021"
    }
  ];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Project Highlights
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 cursor-pointer border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                <motion.a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-md text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-600 pt-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Technologies Used:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {project.url}
                </span>
                <motion.button
                  className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Eye className="w-4 h-4" />
                  <span>{expandedProject === index ? 'Less' : 'More'}</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;