function References() {
  const refs = [
    { 
      name: "Jamie",
      company: "Ineffable Design", 
      phone: "(614) 417-6877", 
      location: "USA",
      icon: "👩‍💼",
      color: "from-blue-500 to-purple-500"
    },
    { 
      name: "Sahil Duggal",
      company: "Professional Reference", 
      phone: "(416) 880-4844", 
      location: "Canada",
      icon: "👨‍💼",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">References</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {refs.map((ref, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-xl"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Reference card content */}
            <div className="flex items-start">
              <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {ref.icon}
              </span>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-1 bg-gradient-to-r ${ref.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {ref.name}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 mb-2 transition-colors duration-300">
                  {ref.company}
                </p>
                <div className="space-y-1 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href={`tel:${ref.phone.replace(/[^\d]/g, '')}`} className="hover:text-white transition-colors duration-300">
                      {ref.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🌍</span>
                    {ref.location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card accent border */}
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${ref.color} rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${ref.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;