import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

function Certificates() {
  const certs = [
    { name: "Meta Full Stack Development", provider: "Meta", year: "2024" },
    { name: "Google AI Essentials", provider: "Google", year: "2024" },
    { name: "HTML & CSS in depth", provider: "Meta", year: "2023" },
    { name: "Programming with JavaScript", provider: "Meta", year: "2023" },
    { name: "WordPress Master Training", provider: "LinkedIn", year: "2023" },
    { name: "Shopify Advanced Training", provider: "Shopify", year: "2022" },
    { name: "Digital Marketing", provider: "Semrush", year: "2022" },
    { name: "Google Ads – Advanced", provider: "Google", year: "2022" }
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
        Certificates & Training
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 group hover:scale-[1.02]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-5 h-5 text-white" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {cert.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span>{cert.provider}</span>
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>{cert.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certificates;