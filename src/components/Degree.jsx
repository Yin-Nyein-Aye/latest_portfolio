import { motion } from "framer-motion";
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
            <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <div className="space-y-2">
                    <p className="text-gray-300 font-bold">
                        Technological University Taunggyi
                    </p>
                    <p className="italic text-xs text-orange-400">
                        Bachelor of Engineering, Information Technology
                    </p>
                    <p className="text-xs italic">2013 - 2018</p>
                </div>
            </div>
            <div>
                <p className="mt-4 mb-2 text-sm text-gray-400">
                    Focused on C++,Java,Microprocessor Programming,Web development,Data Structures,OOP,Analogue and Digital Control,Software Engineering, Database Systems,Cloud Computing,Embedded Systems,Digital Image Processing and Project Management.
                </p>
                <p className="text-sm mb-2 text-gray-400"><span className="font-bold">Capstone project :</span> Leave management system.</p>
                <p className="text-xs text-orange-400"><span className="font-bold">Tech Stack :</span> Java (programming), MS Access (database), Eclipse IDE (GUI builder)</p>
            </div>
        </motion.div>
    )
}
