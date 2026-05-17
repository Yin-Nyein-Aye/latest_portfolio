import { motion } from "framer-motion";
import TitleComponent from "../components/Title";
import Degree from "../components/Degree";
import Internship from "../components/Internship";
import JuniorExp from "./../components/JuniorExp";
import SeniorForeignExp from "../components/SeniorForeignExp";
import SeniorLocalExp from "../components/SeniorLocalExp";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Education() {
  return (
    <section className="mt-20 text-white">
      <TitleComponent title="My Journey" />
      <h2 className="text-2xl font-bold text-center m-10">Education</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12 px-6">
        {/* University Card */}
        <Degree />
        {/* Internship & Scholarship Card */}
        <Internship />
      </div>
      <h2 className="text-2xl font-bold text-center m-10">Career</h2>
      <div className="flex flex-col items-center sm:items-center md:items-center lg:flex-row justify-center gap-12 px-6">
        <JuniorExp />
        <SeniorLocalExp />
        <SeniorForeignExp />
      </div>
    </section>
  );
}
