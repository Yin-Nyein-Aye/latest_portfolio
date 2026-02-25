import { motion } from "framer-motion";
import TitleComponent from '../components/Title';
import Degree from '../components/Degree';
import Internship from '../components/Internship';
import JuniorExp from './../components/JuniorExp';
import SeniorForeignExp from "../components/SeniorForeignExp";
import SeniorLocalExp from "../components/SeniorLocalExp";

export default function Education() {
  return (
    <section className="mt-20 text-white">
      <TitleComponent title="My Journey" />
      <div className="grid md:grid-cols-2 gap-6 px-10 mt-10">
        <h2 className="text-2xl font-bold text-center">Education</h2>
        <h2 className="text-2xl font-bold text-center">Career</h2>
        <Degree />
        <JuniorExp />
        <Internship />
        <SeniorLocalExp />
        <div></div>
        <SeniorForeignExp />
      </div >
    </section >
  );
}

