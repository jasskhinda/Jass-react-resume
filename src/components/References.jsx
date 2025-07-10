import { motion } from 'framer-motion';
import { User, Phone, MapPin, Star } from 'lucide-react';

function References() {
  const refs = [
    { 
      name: "Jamie", 
      company: "Ineffable Design",
      phone: "(614) 417-6877", 
      location: "USA",
      role: "Creative Director"
    },
    { 
      name: "Sahil Duggal", 
      company: "Business Partner",
      phone: "(416) 880-4844", 
      location: "Canada",
      role: "Senior Developer"
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
        Professional References
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {refs.map((ref, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <User className="w-6 h-6 text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {ref.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {ref.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {ref.company}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4 text-primary-500" />
                <a href={`tel:${ref.phone}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {ref.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>{ref.location}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                Available upon request
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default References;