import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { RiJavascriptFill, RiSettings3Line } from "react-icons/ri";
import { IoLogoReact, IoLogoFirebase, IoTerminalOutline } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { TbBrandTypescript, TbFileTypeSql, TbBrandVscode, TbFileTypePhp, TbBrandMysql } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { SiApache, SiPostman, SiTailwindcss, SiLivewire, SiMysql, SiPostgresql, SiSqlite, SiVite, SiGithubactions, SiCircleci, SiNginx, SiJest, SiVitest, SiLighthouse, SiJira } from "react-icons/si";
import { DiDigitalOcean, DiDocker, DiCodeigniter, DiZend, DiMsqlServer, DiRedis } from "react-icons/di";
import { FaBootstrap, FaFigma, FaVuejs, FaPhp, FaLaravel, FaGithub, FaCss3Alt, FaDatabase, FaSearch, FaGitAlt, FaLinux, FaNpm } from 'react-icons/fa';
import { SlCursor } from "react-icons/sl";
import { FaRegFileCode, FaGitlab } from "react-icons/fa6";
import { GiElephant } from "react-icons/gi";
import SkillCard from "../components/SkillCard";
import FilterComponent from "../components/FilterComponent";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  const skills = {
    FrontEnd: [
      { name: "HTML5", icon: <AiFillHtml5 size={30} color="blue" />, exp_years: 6, level: 5, levelName: "Expert" },
      { name: "CSS3", icon: <FaCss3Alt size={30} color="orange" />, exp_years: 6, level: 5, levelName: "Expert" },
      { name: "JavaScript", icon: <RiJavascriptFill size={30} color="orange" />, exp_years: 4, level: 4, levelName: "Expert" },
      { name: "Vue", icon: <FaVuejs size={30} color="green" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "React", icon: <IoLogoReact size={30} color="#38BDF8" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Redux Toolkit", icon: <SiRedux size={30} color="#7952B3" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Typescript", icon: <TbBrandTypescript size={30} color="blue" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Bootstrap", icon: <FaBootstrap size={30} color="#7952B3" />, exp_years: 4, level: 3, levelName: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#38BDF8" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Jest", icon: <SiJest size={30} color="red" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Vitest", icon: <SiVitest size={30} color="green" />, exp_years: 1, level: 2, levelName: "Intermediate" },
    ],
    Backend: [
      { name: "PHP", icon: <FaPhp size={30} color="blue" />, exp_years: 6, level: 5, levelName: "Expert" },
      { name: "Laravel", icon: <FaLaravel size={30} color="red" />, exp_years: 4, level: 4, levelName: "Expert" },
      { name: "CodeIgniter", icon: <DiCodeigniter size={30} color="red" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "ZendFramework", icon: <DiZend size={30} color="green" />, exp_years: 1, level: 3, levelName: "Expert" },
      { name: "Livewire", icon: <SiLivewire size={30} color="pink" />, exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "RESTful APIs", icon: <RiSettings3Line size={30} color="#7952B3" />, exp_years: 4, level: 4, levelName: "Expert" },
      { name: "Bash Scripting", icon: <FaRegFileCode size={30} color="yellow" />, exp_years: 2, level: 3, levelName: "Advanced" },
      { name: "Microservices", icon: <GrServices size={30} color="#38BDF8" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "PHPUnit", icon: <TbFileTypePhp size={30} color="#38BDF8" />, exp_years: 1, level: 2, levelName: "Intermediate" }
    ],
    Database: [
      { name: "Database Design", icon: <BsFillDiagram3Fill size={30} color="gray" />, exp_years: 3, level: 4, levelName: "Intermediate" },
      { name: "SQL", icon: <TbFileTypeSql size={30} color="brown" />, exp_years: 5, level: 4, levelName: "Intermediate" },
      { name: "MYSQL", icon: <TbBrandMysql size={30} color="blue" />, exp_years: 5, level: 4, levelName: "Expert" },
      { name: "MS Access", icon: <FaDatabase size={30} color="red" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Microsoft SQL Server", icon: <DiMsqlServer size={30} color="white" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "SQLite", icon: <SiSqlite size={30} color="#38BDF8" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "PostgreSql", icon: <SiPostgresql size={30} color="#7952B3" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Redis", icon: <DiRedis size={30} color="red" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Firebase", icon: <IoLogoFirebase size={30} color="orange" />, exp_years: 1, level: 3, levelName: "Intermediate" },
    ],
    Tools: [
      { name: "Figma", icon: <FaFigma size={30} color="#38BDF8" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "VS Code", icon: <TbBrandVscode size={30} color="blue" />, exp_years: 5, level: 4, levelName: "Expert" },
      { name: "Cursor", icon: <SlCursor size={30} color="gray" />, exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Vite", icon: <SiVite size={30} color="#7952B3" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "NPM", icon: <FaNpm size={30} color="red" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Terminal/CLI", icon: <IoTerminalOutline size={30} color="#38BDF8" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Postman", icon: <SiPostman size={30} color="red" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Chrome DevTools", icon: <FaSearch size={30} color="gray" />, exp_years: 6, level: 3, levelName: "Intermediate" },
      { name: "GitHub", icon: <FaGithub size={30} />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "GitLab", icon: <FaGitlab size={30} color="orange" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "MySQL Workbench", icon: <SiMysql size={30} color="blue" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "TablePlus", icon: <GiElephant size={30} color="orange" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Lighthouse", icon: <SiLighthouse size={30} color="blue" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Jira", icon: <SiJira size={30} color="blue" />, exp_years: 4, level: 3, levelName: "Intermediate" }
    ],
    Deployment: [
      { name: "Git", icon: <FaGitAlt size={30} color="red" />, exp_years: 6, level: 4, levelName: "Expert" },
      { name: "GitHub Actions", icon: <SiGithubactions size={30} color="#38BDF8" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Docker", icon: <DiDocker size={30} color="blue" />, exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "DigitalOcean", icon: <DiDigitalOcean size={30} color="#38BDF8" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Nginx", icon: <SiNginx size={30} color="green" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Apache", icon: <SiApache size={30} color="#7952B3" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Linux", icon: <FaLinux size={30} color="yellow" />, exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "CircleCI", icon: <SiCircleci size={30} />, exp_years: 1, level: 2, levelName: "Intermediate" },
    ],
  };

  const titles = [
    { name: "FrontEnd", icon: "🎨" },
    { name: "Backend", icon: "🛠️" },
    { name: "Database", icon: "🗄️" },
    { name: "Tools", icon: "⚙️" },
    { name: "Deployment", icon: "🚀" },
  ];
  return (
    <section className="mt-15">
      <h2 className="text-4xl font-bold text-center">Professional Skills</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="w-24 h-1 bg-gray-100 mx-auto rounded"
      ></motion.div>

      {/* Tabs */}
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
