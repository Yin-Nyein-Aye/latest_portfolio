import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="
                flex flex-col items-center 
                bg-olive-900 rounded-2xl py-2 px-12
                hover:scale-105 transition
                lg:w-1/6 w-1/3"
    >
      <span className="text-3xl"><Icon size={30} color={skill.color} /></span>
      <p className="mt-2">{skill.name}</p>
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${index < skill.level ? "text-yellow-500" : "text-gray-500"
              }`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-500">
        {skill.levelName} • {skill.exp_years}+ years
      </p>
    </motion.div>
  )
}
