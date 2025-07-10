import { motion } from 'framer-motion';

function Summary() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Professional Summary
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        With 8 years of experience in WordPress and e-commerce development, I've completed over 200 projects.
        I specialize in responsive design, custom booking systems, and full-stack development using React, Python, and AI tools.
        My goal is to deliver business-driven solutions that are user-friendly and effective.
      </motion.p>
    </motion.div>
  );
}
export default Summary;