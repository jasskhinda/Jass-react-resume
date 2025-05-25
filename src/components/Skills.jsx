function Skills() {
  const skills = [
    "WordPress", "Shopify", "HTML", "CSS", "Bootstrap", "JavaScript",
    "React", "Python", "Django", "WooCommerce", "Figma", "cPanel"
  ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;