function Certificates() {
  const certs = [
    "Meta Full Stack Development",
    "Google AI Essentials",
    "HTML & CSS in depth by Meta",
    "Programming with JavaScript by Meta",
    "WordPress Master Training (LinkedIn)",
    "Shopify Advanced Training",
    "Digital Marketing by Semrush",
    "Google Ads – Advanced Ads"
  ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">Certificates</h2>
      <ul className="list-disc list-inside">
        {certs.map((c, index) => <li key={index}>{c}</li>)}
      </ul>
    </section>
  );
}
export default Certificates;