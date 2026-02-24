import { motion } from "framer-motion";
import profile from "../assets/yna1.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function About() {
  return (
    <>
      <div className="text-center mt-15">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-24 h-1 bg-gray-100 mx-auto rounded"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-3 text-lg text-olive-700 italic"
        >
          Code is what I do — but here’s who I am
        </motion.p>
      </div>

      <section className="min-h-screen px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed shadow-2xl rounded-xl p-6 space-y-6 lg:text-yellow-100 text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold">Behind the Code</h2>
            <p>
              Raised in Myanmar, I discovered my passion for technology while studying Information Technology at Technological University Taunggyi.
            </p>
            <p>
              From May 2019 to April 2024, I worked as a Full-Stack Web Developer at ITVisionHub. Since May 2024, I’ve been contributing to MYSOL, a Japan-based company, where I continue to build user-friendly and high-performance applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed shadow-2xl rounded-xl p-6 space-y-6 lg:text-yellow-100 text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold">Career Achievements</h2>
            <div>
              <h3 className="text-xl font-bold">i. Projects Delivered</h3>
              <p>
                Designed and deployed a scalable influencer marketing platform with Angular and Laravel, serving 10,000+ monthly users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">ii. Performance Improvements</h3>
              <p>
                Optimized API integrations, reducing response time by 60% and enhancing overall system efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">iii. International Experience</h3>
              <p>
                Transitioned from Myanmar-based ITVisionHub to Japan-based MYSOL, adapting to cross-cultural collaboration and global project standards.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-5 text-center"
          >
            {[
              { num: "6+", label: "Years of Experience", color: "bg-yellow-100" },
              { num: "10+", label: "Projects", color: "bg-orange-100" },
              { num: "16+", label: "Technologies", color: "bg-slate-100" },
              { num: "1+", label: "Countries Worked With", color: "bg-purple-100" },
              { num: "100%", label: "Success Rate", color: "bg-pink-100" },
              { num: "100%", label: "Work Responsibility", color: "bg-green-100" },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                className={`${item.color} rounded-lg p-5 font-bold shadow-lg text-olive-700`}
              >
                <p className="text-xl md:text-3xl font-bold">{item.num}</p>
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" grid grid-cols-1 lg:grid-cols-2  gap-5"
          >
            <motion.div
              className="space-y-3 lg:text-olive-700 text-gray-800 shadow-2xl rounded-xl px-4 py-2"
              // whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold">Quick Facts</h3>
              <div>
                <p className="text-lg font-bold">Location</p>
                <p>Yangon, Myanmar</p>
              </div>
              <div>
                <p className="text-lg font-bold">Languages</p>
                <p>Burmese - Native</p>
                <p>English - Intermediate</p>
                <p>Japanese - JLPT N4</p>
              </div>
              <div>
                <p className="text-lg font-bold">Professional Links</p>
                <div className="flex justify-start gap-6 mt-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={25}
                      className="text-olive-700 hover:text-olive-900 transition-colors duration-500"
                    />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={25}
                      className="text-blue-700 hover:text-blue-900 transition-colors duration-500"
                    />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdMarkEmailRead
                      size={25}
                      className="text-red-700 hover:text-red-900 transition-colors duration-500"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.img
              src={profile}
              alt="Profile"
              className="w-full h-80 md:h-full lg:h-80 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

