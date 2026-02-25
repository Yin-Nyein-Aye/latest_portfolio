import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleHashChange = () => setActive(window.location.hash.slice(1));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
                 bg-black/80 backdrop-blur-md 
                 text-white px-6 py-2 rounded-full shadow-lg 
                 flex justify-between items-center w-[90%] max-w-5xl z-50"
    >
      <h1 className="text-xl font-bold text-orange-400 signature-font">
        <div className="space-x-2">
          <span>Yin</span><span>Nyein</span><span>Aye</span>
        </div>
      </h1>

      <div className="hidden md:flex space-x-6">
        {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className={
              active === item.toLowerCase()
                ? "text-orange-400"
                : "hover:text-orange-400 transition-colors duration-300 ease-in-out"
            }
          >
            {item}
          </a>))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-orange-400 text-black px-2 py-1 rounded-full hover:bg-orange-500 transition"
        onClick={() => window.open("https://t.me/@nyein_yna", "_blank")}
      >
        Let’s Talk
      </motion.button>
      <button
        className="md:hidden text-orange-400 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {
        isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md 
                     flex flex-col items-center space-y-4 py-6 rounded-lg md:hidden"
          >
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item, idx) => (
              <NavLink
                key={idx}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 text-lg"
                    : "text-white hover:text-orange-400 transition-colors duration-300 ease-in-out text-lg"
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 text-black px-6 py-2 rounded-full hover:bg-orange-500 transition"
            >
              Let’s Talk
            </motion.button>
          </motion.div>
        )
      }
    </motion.nav >
  );
}