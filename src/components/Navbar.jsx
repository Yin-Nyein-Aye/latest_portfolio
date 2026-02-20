import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
                 bg-black/80 backdrop-blur-md 
                 text-white px-8 py-2 rounded-full shadow-lg 
                 flex justify-between items-center w-[90%] max-w-5xl z-50"
    >
      <h1 className="text-xl font-bold text-orange-400">Yin</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/services" className="hover:text-orange-400">Services</Link>
        <Link to="/portfolio" className="hover:text-orange-400">Portfolio</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
      </div>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
        className="bg-orange-400 text-black px-4 py-1 rounded-full hover:bg-orange-500 transition"
      >
        Let’s Talk
      </motion.button>
    </motion.nav>
  );
}
