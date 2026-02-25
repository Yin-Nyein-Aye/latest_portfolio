import { motion } from "framer-motion";
const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function SeniorLocalExp() {
    return (
        <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-olive-700 p-6 rounded-lg shadow-md"
        >
            <div className="flex items-start gap-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                <div className="space-y-2">
                    <p className="text-gray-300 font-bold">
                        Senior Full Stack Developer
                    </p>
                    <p className="italic text-xs text-orange-400">
                        ITVisionHub Co.,Ltd
                    </p>
                    <p className="text-xs italic">Jan 2022 - April 2024</p>
                </div>
            </div>
            <p className="mt-4 mb-2 text-sm text-gray-400">
                Specialized in database optimization, third‑party service integration, and modern DevOps practices with Docker and CI/CD, applying these skills across diverse systems.
            </p>
            <div>
                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Invoice System</p>
                <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,Bootstrap,PHP,Laravel Framework,Javascript,Jquery,MySQL</p>

                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Daily Need Items Ecommerce</p>
                <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,Bootstrap,PHP,Laravel Framework,Livewire,Ajax,MySQL</p>

                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Pharmacy Management System</p>
                <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Livewire,Ajax,MySQL</p>

                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Event Management System</p>
                <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,TailwindCSS,PHP,Laravel Framework,RESTFul APIs,React,Redux Toolkit,MySQL,Docker</p>

                <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Training Management</p>
                <p className="text-xs text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,TailwindCSS,PHP,Laravel Framework,Javascript,MySQL,Docker</p>
            </div>
        </motion.div>
    )
}
