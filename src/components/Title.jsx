function Title() {
  return (
    <header className="relative p-8 text-center overflow-hidden bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-t-3xl border-b border-white/10">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-4 left-1/3 w-8 h-8 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse-slow mb-4">
          Jass Khinda
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-medium mb-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Certified Web Developer | WordPress & Shopify Expert
        </p>
        <p className="text-sm md:text-base text-gray-300 opacity-90 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          Brampton, ON, Canada | info@jasskhinda.com | 647-355-6441
        </p>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
export default Title;