import { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import FilterComponent from "../components/FilterComponent";
import TitleComponent from '../components/Title';
import { titles, skills } from '../components/skills'

export default function Skills() {
  const [activeTab, setActiveTab] = useState("FrontEnd");
  return (
    <section className="mt-20">
      <TitleComponent title="Professional Skills" />

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {titles.map((title, i) => (
          <FilterComponent title={title} key={i} setActiveTab={setActiveTab} activeTab={activeTab} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills[activeTab].map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </section >
  );
}
