// const skills = ["React", "Redux", "Tailwind", "Docker", "Firebase"];

// export default function Skills() {
//   return (
//     <section className="py-20 bg-white text-gray-900">
//       <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map((skill, i) => (
//           <div key={i} className="px-6 py-3 bg-purple-100 rounded-full shadow hover:scale-105 transition">
//             {skill}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Redux Toolkit", icon: "🌀" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Firebase", icon: "🔥" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Work Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center bg-black border border-orange-400 rounded-lg p-6 hover:scale-105 transition">
            <span className="text-3xl">{skill.icon}</span>
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
