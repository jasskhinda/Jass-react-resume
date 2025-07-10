import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

function Experience() {
  const jobs = [
    {
      role: "Website Developer",
      company: "Radiux.ca",
      location: "Brampton, Canada",
      period: "2023 – 2024",
      duration: "1 year",
      duties: [
        "Built responsive WordPress and Shopify websites",
        "Improved user engagement by 30%",
        "Optimized performance and functionality"
      ]
    },
    {
      role: "Web Developer",
      company: "Ineffable Design",
      location: "Dublin, Columbus, Ohio",
      period: "2019 – 2023",
      duration: "4 years",
      duties: [
        "Delivered custom e-commerce platforms",
        "Implemented booking systems and dynamic pricing",
        "Revamped business sites for better lead generation"
      ]
    },
    {
      role: "Lead Web Developer",
      company: "Efeeders Tech",
      location: "Edmonton, Canada",
      period: "2018 – 2019",
      duration: "1 year",
      duties: [
        "Designed scalable WordPress websites",
        "Served international clients with responsive designs"
      ]
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
        Work Experience
      </motion.h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
        
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="relative flex items-start mb-12 last:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            >
              <Briefcase className="w-6 h-6 text-white" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              className="ml-6 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {job.company}
                    </p>
                  </div>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                    {job.duration}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.duties.map((duty, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.5 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{duty}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;