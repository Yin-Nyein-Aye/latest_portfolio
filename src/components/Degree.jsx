import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Degree() {
  return (
    <motion.div
      variants={leftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full md:w-[450px] bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <GraduationCap className="text-orange-500 w-10 h-10" />
        <div>
          <h3 className="font-bold text-lg text-blue-900">
            Technological University Taunggyi
          </h3>
          <p className="text-xs text-orange-600 italic">
            Bachelor of Engineering, Information Technology
          </p>
          <p className="text-xs text-gray-500">2013 – 2018</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        Focused on C++, Java, Microprocessor Programming, Web Development, Data
        Structures, OOP, Software Engineering, Database Systems, and Cloud
        Computing.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-semibold">Capstone Project:</span> Leave
        Management System
      </p>
      <p className="text-xs text-orange-600 mt-1">
        <span className="font-semibold">Tech Stack:</span> Java, MS Access,
        Eclipse IDE
      </p>
    </motion.div>
  );
}
