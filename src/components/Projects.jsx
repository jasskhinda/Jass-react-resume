function Projects() {
  const projects = [
    { name: "ivitaboost.com" },
    { name: "randjmedicalservices.com" },
    { name: "johnpetersroofing.com" },
    { name: "bugzbugme.com" },
    { name: "themug.com" },
    { name: "ashersstudio.com" }
  ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">Project Highlights</h2>
      <ul className="list-disc list-inside">
        {projects.map((p, index) => (
          <li key={index}>
            <a href={`https://${p.name}`} className="text-blue-600 underline" target="_blank" rel="noreferrer">{p.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Projects;