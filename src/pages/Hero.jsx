import { motion } from "framer-motion";

export default function Hero() {
  return (
     <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-500 to-yellow-100' text-white"> 
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi, I’m <span className="text-pink-100">Yin Nyein Aye</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl"
      >
        Senior Full Stack Developer | React PHP Specialist
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        className="mt-6 px-6 py-3 bg-white text-purple-600 rounded-full shadow-lg font-semibold"
      >
        View My Work
      </motion.button>
    </section>
  );
}
