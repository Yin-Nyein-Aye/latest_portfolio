
import { motion } from "framer-motion";
import Trophy from '../assets/trophy.svg'

const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function Education() {
  return (
    <section className="py-20 text-white">
      <h2 className="text-4xl font-bold text-center">My Journey</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-24 h-1 bg-gray-100 mx-auto rounded"
      ></motion.div>
      <div className="grid md:grid-cols-2 gap-6 px-10 mt-10">
        <h2 className="text-2xl font-bold text-center">Education</h2>
        <h2 className="text-2xl font-bold text-center">Career</h2>
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
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
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            <div className="space-y-2">
              <p className="text-gray-300 font-bold">
                Junior Full Stack Developer
              </p>
              <p className="italic text-xs text-orange-400">
                ITVisionHub Co.,Ltd
              </p>
              <p className="text-xs italic">May 2019 - Dec 2021</p>
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm text-gray-400">
            Designed normalized databases and crafted responsive wireframes to ensure scalability and usability.Built secure CRUD operations and integrated dynamic components with Livewire.
          </p>
          <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Student Management System</p>
          <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Javascript,Jquery,MySQL</p>
          <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Pharmacy Management System</p>
          <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Livewire,Ajax,MySQL</p>
          <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Restaurant Management System</p>
          <p className="text-xs text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Livewire,Javascript,MySQL</p>
        </motion.div>
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          {/* Education content here */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
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
            <img src={Trophy} alt="Trophy Icon" class="size-15" />
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
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-start gap-4" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
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
            <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Javascript,Jquery,MySQL</p>
            <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Daily Need Items Ecommerce</p>
            <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Livewire,Ajax,MySQL</p>
            <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Gym Membership</p>
            <p className="text-xs mb-3 text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,Javascript,Jquery,MySQL</p>
            <p className="text-sm mb-1 text-gray-400"><span className="font-bold">Project :</span> Event Management System</p>
            <p className="text-xs text-orange-400"><span className="font-bold">Tech Stack :</span> HTML5,CSS3,PHP,Laravel Framework,RESTFul APIs,React,Redux Toolkit,MySQL</p>
          </div>
        </motion.div>
        <div></div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
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
      </div >
    </section >
  );
}

