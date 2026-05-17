import { motion } from "framer-motion";
import Trophy from "../assets/trophy.svg";
import { Briefcase, Award } from "lucide-react";

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
        <Briefcase className="text-blue-600 w-10 h-10" />
        <div>
          <h3 className="font-bold text-lg text-blue-900">
            Internship Programme
          </h3>
          <p className="text-xs text-orange-600 italic">
            Elite Tech Group Co., Ltd
          </p>
          <p className="text-xs text-gray-500">2018</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Completed A+ training with hands‑on experience in hardware
        troubleshooting, operating systems, networking, and IT security
        fundamentals.
      </p>

      <div className="flex items-center gap-4">
        <Award className="text-yellow-500 w-10 h-10" />
        <div>
          <h3 className="font-bold text-lg text-blue-900">
            Scholarship Programme
          </h3>
          <p className="text-xs text-orange-600 italic">Huawei</p>
          <p className="text-xs text-gray-500">2017</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-2">
        Awarded a merit scholarship for academic excellence during undergraduate
        studies.
      </p>
    </motion.div>
  );
}
