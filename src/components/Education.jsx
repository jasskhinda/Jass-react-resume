function Education() {
  const education = [
    {
      degree: "Computer Software and Database Development",
      institution: "Loyalist College",
      location: "Canada",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "University of Bikaner",
      location: "India",
      icon: "🏛️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Education</h2>
      
      <div className="space-y-4 relative z-10">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-xl"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Icon and gradient accent */}
            <div className={`w-full h-0.5 bg-gradient-to-r ${edu.color} rounded-t-xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {edu.icon}
              </span>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {edu.degree}
                </h3>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-gray-400 group-hover:text-gray-300">{edu.location}</p>
                </div>
              </div>
            </div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;