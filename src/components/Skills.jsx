import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: "WordPress", level: 95 },
    { name: "Shopify", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "Bootstrap", level: 85 },
    { name: "WooCommerce", level: 90 },
    { name: "Figma", level: 75 },
    { name: "cPanel", level: 80 }
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
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;