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
      ]
    },
    {
      role: "Web Developer",
      company: "Ineffable Design, Dublin, Columbus, Ohio",
      period: "2019 – 2023",
      duties: [
        "Delivered custom e-commerce platforms",
        "Implemented booking systems and dynamic pricing",
        "Revamped business sites for better lead generation"
      ]
    },
    {
      role: "Lead Web Developer",
      company: "Efeeders Tech, Edmonton, Canada",
      period: "2018 – 2019",
      duties: [
        "Designed scalable WordPress websites",
        "Served international clients with responsive designs"
      ]
    }
  ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{job.role}</h3>
          <p className="text-sm text-gray-600">{job.company} | {job.period}</p>
          <ul className="list-disc list-inside ml-4">
            {job.duties.map((duty, i) => <li key={i}>{duty}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Experience;