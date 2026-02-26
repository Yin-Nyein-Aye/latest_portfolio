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
      <div className="space-x-3 mt-5">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-olive-500 to-orange-400 rounded-md font-bold text-olive-800 shadow-lg  text-sm sm:text-base"
        >
          View My Work
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
          </svg>
        </motion.a>
        <motion.a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-olive-500 to-orange-400 rounded-md font-bold text-olive-800 shadow-lg  text-sm sm:text-base"
          download="Yin_Nyein_Aye_CV.pdf"
        >
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
