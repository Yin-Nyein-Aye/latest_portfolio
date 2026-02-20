const services = [
  { title: "UI/UX Design", desc: "Modern, user-friendly interfaces." },
  { title: "Web Development", desc: "Scalable React + backend solutions." },
  { title: "Responsive Design", desc: "Mobile-first, accessible layouts." },
];

export default function Services() {
  return (
    <section className="h-screen py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-orange-400">{s.title}</h3>
            <p className="mt-2">{s.desc}</p>
            <button className="mt-4 px-4 py-2 bg-orange-400 text-black rounded hover:bg-orange-500 transition">
              Hire Me
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
