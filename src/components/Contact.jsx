import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@jasskhinda.com",
      href: "mailto:info@jasskhinda.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (647) 355-6441",
      href: "tel:+16473556441"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Brampton, ON, Canada",
      href: null
    },
    {
      icon: Globe,
      label: "Website",
      value: "jasskhinda.com",
      href: "https://jasskhinda.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jasskhinda",
      href: "https://linkedin.com/in/jasskhinda"
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
        Contact Information
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            >
              <item.icon className="w-6 h-6 text-white" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {item.label}
              </p>
              {item.href ? (
                <motion.a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 break-words"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.value}
                </motion.a>
              ) : (
                <p className="text-gray-900 dark:text-white font-medium">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl border border-primary-200 dark:border-primary-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Ready to bring your ideas to life? Let's connect and discuss your next project!
        </p>
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="mailto:info@jasskhinda.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;