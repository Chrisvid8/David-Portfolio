import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, 
  FaJava, FaPython, FaGitAlt, FaGithub 
} from 'react-icons/fa';

import { 
  SiMysql, SiPostgresql, SiFirebase, SiFlask, 
  SiVercel, SiRender, SiTailwindcss 
} from 'react-icons/si'; 

import firestoreLogo from '../assets/firestore.svg';
import csharpLogo from '../assets/Csharp.png';
import { motion } from 'framer-motion';

function Skills() {
  const iconSize = '3rem';
  const iconStyle = "grayscale hover:grayscale-0 transition duration-300";

  const SkillIcon = ({ children, name }) => (
    <div className="relative group flex flex-col items-center">
      <div className={iconStyle}>
        {children}
      </div>
      <span className="absolute bottom-[-2rem] px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </div>
  );

  const SkillCategory = ({ title, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">{children}</div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-10 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <SkillCategory title="Frontend">
          <SkillIcon name="HTML5"><FaHtml5 size={iconSize} className="text-orange-500" draggable="false" /></SkillIcon>
          <SkillIcon name="CSS3"><FaCss3Alt size={iconSize} className="text-blue-500" draggable="false" /></SkillIcon>
          <SkillIcon name="Bootstrap"><FaBootstrap size={iconSize} className="text-purple-600" draggable="false" /></SkillIcon>
          <SkillIcon name="JavaScript"><FaJsSquare size={iconSize} className="text-yellow-400" draggable="false" /></SkillIcon>
          <SkillIcon name="React"><FaReact size={iconSize} className="text-cyan-400" draggable="false" /></SkillIcon>
          <SkillIcon name="Tailwind CSS"><SiTailwindcss size={iconSize} className="text-sky-400" draggable="false" /></SkillIcon>
        </SkillCategory>

        <SkillCategory title="Backend">
          <SkillIcon name="Java"><FaJava size={iconSize} className="text-red-600" draggable="false" /></SkillIcon>
          <SkillIcon name="C#">
            <img src={csharpLogo} alt="C#" className="w-12 h-12 grayscale hover:grayscale-0 transition duration-300" draggable="false" />
          </SkillIcon>
          <SkillIcon name="Python"><FaPython size={iconSize} className="text-yellow-500" draggable="false" /></SkillIcon>
          <SkillIcon name="Flask"><SiFlask size={iconSize} className="text-gray-300" draggable="false" /></SkillIcon>
        </SkillCategory>

        <SkillCategory title="Databases">
          <SkillIcon name="Firestore">
            <img src={firestoreLogo} alt="Firestore" className="w-12 h-12 grayscale hover:grayscale-0 transition duration-300" draggable="false" />
          </SkillIcon>
          <SkillIcon name="MySQL"><SiMysql size={iconSize} className="text-blue-500" draggable="false" /></SkillIcon>
          <SkillIcon name="PostgreSQL"><SiPostgresql size={iconSize} className="text-sky-700" draggable="false" /></SkillIcon>
        </SkillCategory>

        <SkillCategory title="Deployment Tools">
          <SkillIcon name="Firebase"><SiFirebase size={iconSize} className="text-yellow-500" draggable="false" /></SkillIcon>
          <SkillIcon name="Vercel"><SiVercel size={iconSize} className="text-black" draggable="false" /></SkillIcon>
          <SkillIcon name="Render"><SiRender size={iconSize} className="text-blue-600" draggable="false" /></SkillIcon>
        </SkillCategory>

        <SkillCategory title="Version Control / Tools">
          <SkillIcon name="Git"><FaGitAlt size={iconSize} className="text-orange-500" draggable="false" /></SkillIcon>
          <SkillIcon name="GitHub"><FaGithub size={iconSize} className="text-gray-300" draggable="false" /></SkillIcon>
        </SkillCategory>

        <SkillCategory title="Other Skills">
          <ul className="list-disc space-y-2 list-inside text-left">
            <li>
              Basic Troubleshooting
              <br />
              <span className="inline-block ml-5">(Hardware & Software)</span>
            </li>
            <li>Problem Solving</li>
            <li>Organizational Skills</li>
            <li>Time Management</li>
            <li>Debugging</li>
          </ul>
        </SkillCategory>
      </div>
    </section>
  );
}

export default Skills;