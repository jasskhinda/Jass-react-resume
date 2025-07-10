function Certificates() {
  const certs = [
    {
      name: "Meta Full Stack Development",
      provider: "Meta",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Google AI Essentials",
      provider: "Google",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "HTML & CSS in depth",
      provider: "Meta",
      icon: "🎨",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Programming with JavaScript",
      provider: "Meta",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "WordPress Master Training",
      provider: "LinkedIn",
      icon: "📝",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Shopify Advanced Training",
      provider: "Shopify",
      icon: "🛍️",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Digital Marketing",
      provider: "Semrush",
      icon: "📊",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Google Ads – Advanced",
      provider: "Google",
      icon: "🎯",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Certificates</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {certs.map((cert, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Certificate icon and content */}
            <div className="flex items-center">
              <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </span>
              <div className="flex-1">
                <h3 className={`text-sm font-semibold mb-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {cert.provider}
                </p>
              </div>
            </div>
            
            {/* Card accent border */}
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${cert.color} rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;