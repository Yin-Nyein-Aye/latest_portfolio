import { motion } from "framer-motion";
import TitleComponent from '../components/Title';
import Profile from '../components/Profile';
import data from '../data/data.json'

export default function About() {
  return (
    <>
      <div className="text-center mt-20">
        <TitleComponent title="About" />
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
            <h2 className="text-2xl font-bold">{data.info[0].title}</h2>
            <p className="text-base">{data.info[0].description}</p>
            <p className="text-base">{data.info[0].details}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed shadow-2xl rounded-xl p-6 space-y-6 lg:text-yellow-100 text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            {data.info[1].achievement.map((item, idx) => (
              <div key={idx}>
                {item.title && <h2 className="text-2xl font-bold mb-2">{item.title}</h2>}
                <h3 className="font-bold">{idx + 1}. {item.subTitle} </h3>
                <p className="text-base">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-5 text-center"
          >
            {data.info[2].rating.map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                className={`${item.color} rounded-lg p-5 font-bold shadow-lg text-olive-700`}
              >
                <p className="text-xl md:text-2xl font-bold">{item.num}</p>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
          <Profile />
        </div>
      </section>
    </>
  );
}

