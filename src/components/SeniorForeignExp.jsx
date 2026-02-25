import { motion } from "framer-motion";
const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function SeniorForeignExp() {
    return (
        <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-olive-700 p-6 rounded-lg shadow-md"
        >
            <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
                <div className="space-y-2">
                    <p className="text-gray-300 font-bold">
                        Junior Full Stack Developer
                    </p>
                    <p className="italic text-xs text-orange-400">
                        MYSOL Co.,Ltd
                    </p>
                    <p className="text-xs italic">May 2024 - Present</p>
                </div>
            </div>
            <p className="mt-4 mb-2 text-sm text-gray-400">
                Developed scalable solutions using AWS multithreading, streamlined processes with Bash scripting, and integrated queue jobs, real‑time messaging, Auth0 authentication, and social media APIs.
            </p>
            <div>
                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span>  Post Payment Service</p>
                <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Zend Framework,Javascript,Jquery,MySQL,Docker</p>

                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span>  Influencer Marketing Platform</p>
                <p className="text-xs text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Angular,Typescript,MySQL,Docker </p>
            </div>
        </motion.div>
    )
}
