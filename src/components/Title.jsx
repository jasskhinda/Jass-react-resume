import { motion } from 'framer-motion';

function Title() {
  return (
    <motion.header 
      className="text-center py-12 mb-8 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 rounded-2xl shadow-xl text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl font-bold mb-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Jass Khinda
      </motion.h1>
      <motion.p 
        className="text-xl mb-2 text-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Certified Web Developer | WordPress & Shopify Expert
      </motion.p>
      <motion.p 
        className="text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Brampton, ON, Canada | info@jasskhinda.com | 647-355-6441
      </motion.p>
    </motion.header>
  );
}
export default Title;