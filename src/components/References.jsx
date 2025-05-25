function References() {
  const refs = [
    { name: "Jamie (Ineffable Design)", phone: "(614) 417-6877", location: "USA" },
    { name: "Sahil Duggal", phone: "(416) 880-4844", location: "Canada" }
  ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">References</h2>
      <ul className="list-disc list-inside">
        {refs.map((ref, index) => (
          <li key={index}>
            <strong>{ref.name}</strong> – {ref.phone} ({ref.location})
          </li>
        ))}
      </ul>
    </section>
  );
}
export default References;