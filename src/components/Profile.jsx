import SocialLink from '../components/SocialLink';
import { motion } from "framer-motion";
import profile from "../assets/yna1.jpg";
import data from '../data/data.json'

export default function Profile() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" grid grid-cols-1 lg:grid-cols-2  gap-5"
        >
            <motion.div
                className="space-y-3 lg:text-olive-700 text-gray-800 shadow-2xl rounded-xl px-4 py-2"
                transition={{ duration: 1 }}
            >
                <div className='space-y-3'>
                    <h3 className="text-2xl font-bold">{data.info[3].profile.title}</h3>
                    <div>
                        <p className="text-lg font-bold">{data.info[3].profile.subtitle[0].key}</p>
                        <p>{data.info[3].profile.subtitle[0].value}</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">{data.info[3].profile.subtitle[1].key}</p>
                        <p>{data.info[3].profile.subtitle[1].value[0]}</p>
                        <p>{data.info[3].profile.subtitle[1].value[1]}</p>
                        <p>{data.info[3].profile.subtitle[1].value[2]}</p>
                    </div>
                </div>
                <SocialLink />
            </motion.div>
            <motion.img
                src={profile}
                alt="Profile"
                className="w-full h-80 md:h-full lg:h-80 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
            />
        </motion.div>
    )
}
