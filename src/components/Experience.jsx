function Experience() {
  const jobs = [
    {
      role: "Website Developer",
      company: "Radiux.ca, Brampton, Canada",
      period: "2023 – 2024",
      duties: [
        "Built responsive WordPress and Shopify websites",
        "Improved user engagement by 30%",
        "Optimized performance and functionality"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Web Developer",
      company: "Ineffable Design, Dublin, Columbus, Ohio",
      period: "2019 – 2023",
      duties: [
        "Delivered custom e-commerce platforms",
        "Implemented booking systems and dynamic pricing",
        "Revamped business sites for better lead generation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Lead Web Developer",
      company: "Efeeders Tech, Edmonton, Canada",
      period: "2018 – 2019",
      duties: [
        "Designed scalable WordPress websites",
        "Served international clients with responsive designs"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Work Experience</h2>
      
      <div className="space-y-6 relative z-10">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Card accent border */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${job.color} rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Job role with gradient */}
            <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${job.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
              {job.role}
            </h3>
            
            {/* Company and period */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              <span className="font-medium">{job.company.split(',')[0]}</span>
              <span className="text-gray-400 group-hover:text-gray-300">{job.period}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              {job.company.split(',').slice(1).join(',')}
            </p>
            
            {/* Duties list */}
            <ul className="space-y-2">
              {job.duties.map((duty, i) => (
                <li 
                  key={i} 
                  className="flex items-start text-gray-300 group-hover:text-gray-200 transition-all duration-300 hover:translate-x-2"
                >
                  <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${job.color} mt-2 mr-3 flex-shrink-0 opacity-70 group-hover:opacity-100`}></span>
                  <span className="text-sm leading-relaxed">{duty}</span>
                </li>
              ))}
            </ul>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;