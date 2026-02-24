import { motion } from "framer-motion";
import profile from '../assets/yna7.jpg';
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const roles = ["Full Stack Developer", "React Specialist", "PHP Specialist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen flex flex-col 
                        justify-start sm:justify-center items-center 
                        bg-gradient-to-r from-slate-500 to-yellow-100 text-white px-4 pt-24"
    >


      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 
                   rounded-full mb-6 object-cover 
                   shadow-[0_0_40px_rgba(255,255,255,0.8)]"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
      >
        Hi, I’m <span className="text-yellow-100">Yin Nyein Aye</span>
      </motion.h1>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-olive-700 mt-4 text-center">
        <Typewriter
          words={roles}
          loop={true}
          cursor cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="max-w-xl text-center text-sm sm:text-base md:text-lg text-olive-700 mt-6 leading-relaxed"
      >
        Dedicated and detail‑oriented full‑stack developer with a passion for solving real‑world problems. Skilled in modern frontend frameworks and robust backend technologies, I deliver seamless, responsive, and scalable digital experiences.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-3 px-2 sm:px-6 py-1 sm:py-3 bg-white text-olive-700
                   rounded-full shadow-lg font-semibold text-sm sm:text-base"
      >
        View My Work
      </motion.button>
    </section>
  );
}
