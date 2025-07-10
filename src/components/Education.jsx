import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

function Education() {
  const education = [
    {
      degree: "Computer Software and Database Development",
      institution: "Loyalist College",
      location: "Canada",
      year: "2018",
      type: "Diploma"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "University of Bikaner",
      location: "India", 
      year: "2015",
      type: "Bachelor's"
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
        Education
      </motion.h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                </div>
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                  {edu.type}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;