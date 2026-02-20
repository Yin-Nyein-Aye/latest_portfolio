import { motion } from "framer-motion";
import profile from '../assets/yna6.jpg'

export default function About() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-10">
      <motion.img 
        src={profile} 
        alt="Profile" 
        className="w-50 h-50 rounded-full border-4 mb-6 object-cover"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1 }}
      />
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        About Me
      </motion.h2>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        Get a website that makes a lasting impression!  
        I’m Yin, a Senior Web Developer specializing in React, modern UI/UX, and scalable solutions.
      </p>
      <div className="mt-6 space-y-2 text-center">
        <p>Email: yin@example.com</p>
        <p>Phone: +95 123 456 789</p>
        <p>Location: Yangon, Myanmar</p>
      </div>
      <button className="mt-6 px-6 py-3 bg-orange-400 text-black rounded-full shadow-lg font-semibold hover:bg-orange-500 transition">
        Download CV
      </button>
    </section>
  );
}
