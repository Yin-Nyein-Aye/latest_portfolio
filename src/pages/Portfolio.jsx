const testimonials = [
  { name: "Ronald", feedback: "Yin is a professional and talented developer. Highly recommended!" },
  { name: "Jessica", feedback: "Amazing work! Delivered on time and exceeded expectations." },
  { name: "Michael", feedback: "Great communication and excellent coding skills." },
];

export default function Testimonials() {
  return (
    <section className="h-screen py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">What My Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-black border border-orange-400 rounded-lg p-6">
            <p className="italic">"{t.feedback}"</p>
            <p className="mt-4 font-semibold text-orange-400">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
