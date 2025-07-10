function Projects() {
  const projects = [
    { 
      name: "ivitaboost.com",
      description: "Health & Wellness E-commerce Platform",
      tech: "WordPress • WooCommerce • Custom Theme",
      color: "from-green-400 to-blue-500"
    },
    { 
      name: "randjmedicalservices.com",
      description: "Medical Services Website",
      tech: "WordPress • Custom Booking System • Responsive Design",
      color: "from-blue-400 to-purple-500"
    },
    { 
      name: "johnpetersroofing.com",
      description: "Construction Business Website",
      tech: "WordPress • Lead Generation • Mobile Optimized",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "bugzbugme.com",
      description: "Pest Control Service Platform",
      tech: "WordPress • Custom Forms • SEO Optimized",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "themug.com",
      description: "Restaurant & Cafe Website",
      tech: "WordPress • Online Ordering • Custom Design",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      name: "ashersstudio.com",
      description: "Creative Studio Portfolio",
      tech: "WordPress • Portfolio Gallery • Custom Animations",
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Project Highlights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={`https://${project.name}`}
            target="_blank"
            rel="noreferrer"
            className="group block relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-xl"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Project name with gradient */}
            <h3 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
              {project.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-300 group-hover:text-gray-200 mb-3 transition-colors duration-300">
              {project.description}
            </p>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.split(' • ').map((tech, i) => (
                <span 
                  key={i}
                  className="inline-block px-2 py-1 text-xs bg-white/10 border border-white/20 rounded-md text-gray-300 group-hover:text-white group-hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* External link indicator */}
            <div className="flex items-center text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
              <span>Visit website</span>
              <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 pointer-events-none`}></div>
            
            {/* Card border accent */}
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.color} rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;