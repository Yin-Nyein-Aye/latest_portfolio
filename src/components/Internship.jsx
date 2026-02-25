import { motion } from "framer-motion";
import Trophy from '../assets/trophy.svg'

const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function Degree() {
    return (
        <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-olive-700 p-6 rounded-lg shadow-md"
        >
            {/* Education content here */}
            <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <div className="space-y-2">
                    <p className="text-gray-300 font-bold">
                        Intership Programme
                    </p>
                    <p className="italic text-xs text-orange-400">
                        Elite Tech Group Co., Ltd
                    </p>
                    <p className="text-xs italic">2018</p>
                </div>
            </div>
            <p className="mt-4 mb-2 text-sm text-gray-400">
                Completed A+ training, gaining hands‑on experience in hardware troubleshooting, operating systems, networking, and IT security fundamentals.
            </p>
            <div className="flex items-start gap-4 mt-15">
                <img src={Trophy} alt="Trophy Icon" className="size-15" />
                <div className="space-y-2">
                    <p className="text-gray-300 font-bold">
                        Scholarship Programme
                    </p>
                    <p className="italic text-xs text-orange-400">
                        Huawei
                    </p>
                    <p className="text-xs italic">2017</p>
                </div>
            </div>
            <p className="mt-4 mb-2 text-sm text-gray-400">
                Awarded a merit scholarship for academic excellence during undergraduate studies.<br />
            </p>
        </motion.div>
    )
}
