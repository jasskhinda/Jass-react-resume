function Contact() {
  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "info@jasskhinda.com",
      href: "mailto:info@jasskhinda.com",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (647) 355-6441",
      href: "tel:+16473556441",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Brampton, ON, Canada",
      href: null,
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: "🌐",
      label: "Website",
      value: "jasskhinda.com",
      href: "https://jasskhinda.com",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/jasskhinda",
      href: "https://linkedin.com/in/jasskhinda",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="p-6 relative overflow-hidden rounded-b-3xl">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold mb-6 relative z-10 text-center">Get In Touch</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="group relative"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl"
              >
                <ContactItemContent item={item} />
              </a>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
                <ContactItemContent item={item} />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer message */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-gray-300 text-sm mb-2">Ready to collaborate on your next project?</p>
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-full">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            Let's build something amazing together!
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactItemContent({ item }) {
  return (
    <>
      {/* Icon and gradient border */}
      <div className={`w-full h-0.5 bg-gradient-to-r ${item.color} rounded-t-xl mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
        <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
          {item.label}
        </span>
      </div>
      
      <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 break-all">
        {item.value}
      </p>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 pointer-events-none`}></div>
    </>
  );
}

export default Contact;
