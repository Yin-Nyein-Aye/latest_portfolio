import { motion } from "framer-motion";
export default function Title({ title }) {
    return (
        <div className="text-center">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="w-24 h-1 bg-gray-100 mx-auto rounded"
            ></motion.div>
        </div>
    )
}
