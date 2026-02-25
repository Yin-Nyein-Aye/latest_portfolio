import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Blog Platform",
    description: "A fully functional blog platform for content creators.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio website to showcase my work.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "E-commerce App",
    description: "A modern e-commerce application with advanced features.",
    tech: ["Vue.js", "Tailwind CSS", "Firebase"],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat with authentication and notifications.",
    tech: ["React", "Firebase", "Tailwind"],
    demo: "#",
    code: "#",
  },
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <div className="text-white py-16 px-6 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-6 bg-yellow-500 p-3 rounded-full shadow-lg"
        >
          ◀
        </button>

        {/* Visible Cards */}
        <div className="flex gap-6">
          {projects.slice(index, index + 3).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: idx === 1 ? 1 : 0.95 }}
              transition={{ duration: 0.6 }}
              className={`bg-gray-800 rounded-lg shadow-lg p-6 w-72 text-center ${idx === 1 ? "ring-2 ring-yellow-500" : "opacity-70"
                }`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-center gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-yellow-600 text-xs px-2 py-1 rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a href={project.demo} className="text-yellow-400 hover:underline">
                  Live Demo
                </a>
                <a href={project.code} className="text-yellow-400 hover:underline">
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-6 bg-yellow-500 p-3 rounded-full shadow-lg"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
