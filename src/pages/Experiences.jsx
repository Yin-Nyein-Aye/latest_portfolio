import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Platform", desc: "React + Redux + Firebase", link: "#" },
  { title: "Portfolio Website", desc: "React + Tailwind + Framer Motion", link: "#" },
];

export default function Experiences() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 px-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
            <a href={p.link} className="mt-4 inline-block text-purple-600 font-medium">View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
