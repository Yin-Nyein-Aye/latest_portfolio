import { SiRedux } from "react-icons/si";
import { SlCursor } from "react-icons/sl";
import { GiElephant } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { FaRegFileCode, FaGitlab } from "react-icons/fa6";
import { RiJavascriptFill, RiSettings3Line } from "react-icons/ri";
import { IoLogoReact, IoLogoFirebase, IoTerminalOutline } from "react-icons/io5";
import { TbBrandTypescript, TbFileTypeSql, TbBrandVscode, TbFileTypePhp, TbBrandMysql } from "react-icons/tb";
import { SiApache, SiPostman, SiTailwindcss, SiLivewire, SiMysql, SiPostgresql, SiSqlite, SiVite, SiGithubactions, SiCircleci, SiNginx, SiJest, SiVitest, SiLighthouse, SiJira } from "react-icons/si";
import { DiDigitalOcean, DiDocker, DiCodeigniter, DiZend, DiMsqlServer, DiRedis } from "react-icons/di";
import { FaBootstrap, FaFigma, FaVuejs, FaPhp, FaLaravel, FaGithub, FaCss3Alt, FaDatabase, FaSearch, FaGitAlt, FaLinux, FaNpm } from 'react-icons/fa';

export const skills = {
    FrontEnd: [
      { name: "HTML5", icon: AiFillHtml5, color : "blue", exp_years: 6, level: 5, levelName: "Expert" },
      { name: "CSS3", icon: FaCss3Alt, color : "orange", exp_years: 6, level: 5, levelName: "Expert" },
      { name: "JavaScript", icon: RiJavascriptFill, color : "orange", exp_years: 4, level: 4, levelName: "Expert" },
      { name: "Vue", icon: FaVuejs, color : "green", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "React", icon: IoLogoReact , color : "#38BDF8", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Redux Toolkit", icon: SiRedux , color : "#7952B3", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Typescript", icon: TbBrandTypescript,color : "blue", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "Bootstrap", icon: FaBootstrap , color : "#7952B3", exp_years: 4, level: 3, levelName: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss , color : "#38BDF8", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Jest", icon: SiJest, color : "red", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Vitest", icon: SiVitest, color : "green", exp_years: 1, level: 2, levelName: "Intermediate" },
    ],
    Backend: [
      { name: "PHP", icon: FaPhp,color : "blue", exp_years: 6, level: 5, levelName: "Expert" },
      { name: "Laravel", icon: FaLaravel,color : "red", exp_years: 4, level: 4, levelName: "Expert" },
      { name: "CodeIgniter", icon: DiCodeigniter,color : "red", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "ZendFramework", icon: DiZend, color : "green", exp_years: 1, level: 3, levelName: "Expert" },
      { name: "Livewire", icon: SiLivewire,color : "pink", exp_years: 1, level: 3, levelName: "Intermediate" },
      { name: "RESTful APIs", icon: RiSettings3Line, color : "#7952B3", exp_years: 4, level: 4, levelName: "Expert" },
      { name: "Bash Scripting", icon: FaRegFileCode, color : "yellow", exp_years: 2, level: 3, levelName: "Advanced" },
      { name: "Microservices", icon: GrServices, color : "#38BDF8", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "PHPUnit", icon: TbFileTypePhp, color : "#38BDF8", exp_years: 1, level: 2, levelName: "Intermediate" }
    ],
    Database: [
      { name: "Database Design", icon: BsFillDiagram3Fill, color : "gray", exp_years: 3, level: 4, levelName: "Intermediate" },
      { name: "SQL", icon: TbFileTypeSql, color : "brown", exp_years: 5, level: 4, levelName: "Intermediate" },
      { name: "MYSQL", icon: TbBrandMysql,color : "blue", exp_years: 5, level: 4, levelName: "Expert" },
      { name: "MS Access", icon: FaDatabase,color : "red", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Microsoft SQL Server", icon: DiMsqlServer, color : "white", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "SQLite", icon: SiSqlite, color : "#38BDF8", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "PostgreSql", icon: SiPostgresql, color : "#7952B3", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Redis", icon: DiRedis, color : "red", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Firebase", icon: IoLogoFirebase, color : "orange", exp_years: 1, level: 3, levelName: "Intermediate" },
    ],
    Tools: [
      { name: "Figma", icon: FaFigma, color : "#38BDF8", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "VS Code", icon: TbBrandVscode, color : "blue", exp_years: 5, level: 4, levelName: "Expert" },
      { name: "Cursor", icon: SlCursor , color : "gray", exp_years: 1, level: 2, levelName: "Intermediate" },
      { name: "Vite", icon: SiVite, color : "#7952B3", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "NPM", icon: FaNpm, color : "red", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Terminal/CLI", icon: IoTerminalOutline, color : "#38BDF8", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Postman", icon: SiPostman, color : "red", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Chrome DevTools", icon: FaSearch, color : "gray", exp_years: 6, level: 3, levelName: "Intermediate" },
      { name: "GitHub", icon: FaGithub , color : "white", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "GitLab", icon: FaGitlab, color : "orange", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "MySQL Workbench", icon: SiMysql,color : "blue", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "TablePlus", icon: GiElephant, color : "orange", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Lighthouse", icon: SiLighthouse, color : "blue", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "Jira", icon: SiJira, color : "blue", exp_years: 4, level: 3, levelName: "Intermediate" }
    ],
    Deployment: [
      { name: "Git", icon: FaGitAlt ,color : "red", exp_years: 6, level: 4, levelName: "Expert" },
      { name: "GitHub Actions", icon: SiGithubactions, color : "#38BDF8", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Docker", icon: DiDocker, color : "blue", exp_years: 4, level: 3, levelName: "Intermediate" },
      { name: "DigitalOcean", icon: DiDigitalOcean, color : "#38BDF8", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Nginx", icon: SiNginx , color : "green", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Apache", icon: SiApache, color : "#7952B3", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "Linux", icon: FaLinux, color : "yellow", exp_years: 2, level: 3, levelName: "Intermediate" },
      { name: "CircleCI", icon: SiCircleci , color : "white", exp_years: 1, level: 2, levelName: "Intermediate" },
    ]
};
export const titles = [
    { name: "FrontEnd", icon: "🎨" },
    { name: "Backend", icon: "🛠️" },
    { name: "Database", icon: "🗄️" },
    { name: "Tools", icon: "⚙️" },
    { name: "Deployment", icon: "🚀" },
];
