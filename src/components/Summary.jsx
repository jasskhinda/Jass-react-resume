function Summary() {
  return (
    <section className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10">Professional Summary</h2>
      
      <div className="relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-xl group">
          {/* Quote decoration */}
          <div className="absolute top-4 left-4 text-4xl text-cyan-400/30 font-serif">"</div>
          <div className="absolute bottom-4 right-4 text-4xl text-cyan-400/30 font-serif rotate-180">"</div>
          
          <div className="relative px-8">
            <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed text-base transition-colors duration-500">
              With <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">8 years of experience</span> in WordPress and e-commerce development, I've completed over <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">200 projects</span>.
              I specialize in <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">responsive design</span>, custom booking systems, and full-stack development using React, Python, and AI tools.
              My goal is to deliver <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">business-driven solutions</span> that are user-friendly and effective.
            </p>
          </div>
          
          {/* Stats overlay */}
          <div className="flex justify-center mt-6 space-x-8">
            <div className="text-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">8+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
            </div>
            <div className="text-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">200+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
          
          {/* Gradient border accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
export default Summary;