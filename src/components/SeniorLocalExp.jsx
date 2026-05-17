import { motion } from "framer-motion";
const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function SeniorLocalExp() {
  return (
    <motion.div
      variants={rightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full md:w-[450px] bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4 mb-4 text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-15"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>
        <div>
          <p className="text-blue-900 font-bold text-lg">
            Senior Full Stack Developer
          </p>
          <p className="italic text-xs text-orange-600">ITVisionHub Co.,Ltd</p>
          <p className="text-xs text-gray-500">Jan 2022 - April 2024</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Specialized in database optimization, third‑party service integration,
        and modern DevOps practices with Docker and CI/CD. Experienced in cloud
        deployment strategies, microservices architecture, and mentoring junior
        developers to adopt best practices.
      </p>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-700 font-semibold">
            <span className="font-bold">Project :</span> Invoice System
          </p>
          <p className="text-xs text-orange-600">
            <span className="font-bold">Tech Stack :</span> HTML5, CSS3, PHP,
            Laravel, MySQL
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-semibold">
            <span className="font-bold">Project :</span> Training Management
          </p>
          <p className="text-xs text-orange-600">
            <span className="font-bold">Tech Stack :</span> TailwindCSS,
            Laravel, Docker
          </p>
        </div>
      </div>
    </motion.div>
  );
}
