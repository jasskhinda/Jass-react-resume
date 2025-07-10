import { useState, useEffect } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = [
    { name: "WordPress", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "Shopify", level: 90, color: "from-green-500 to-green-600" },
    { name: "HTML", level: 98, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 95, color: "from-blue-400 to-blue-500" },
    { name: "Bootstrap", level: 85, color: "from-purple-500 to-purple-600" },
    { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-500" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Python", level: 80, color: "from-green-400 to-blue-500" },
    { name: "Django", level: 75, color: "from-green-600 to-green-700" },
    { name: "WooCommerce", level: 92, color: "from-purple-600 to-pink-600" },
    { name: "Figma", level: 83, color: "from-pink-500 to-purple-500" },
    { name: "cPanel", level: 88, color: "from-orange-500 to-orange-600" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
              <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {skill.level}%
              </span>
            </div>
            
            {/* Progress bar container */}
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm border border-white/10">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;