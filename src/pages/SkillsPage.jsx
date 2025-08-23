import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaJava, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiFirebase, SiFlask } from 'react-icons/si';
import csharpLogo from '../assets/Csharp.png';
import firestoreLogo from '../assets/firestore.svg';
import BackToTopButton from '../components/BackToTopButton';

function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size="2rem" />, desc: "Built multiple admin dashboards and websites using HTML during capstone and OJT projects." },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size="2rem" />, desc: "Styled web apps with CSS, focusing on responsive design for different devices." },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size="2rem" />, desc: "Used Bootstrap to speed up development and ensure consistent UI components in DTI Admin Website." },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size="2rem" />, desc: "Implemented dynamic features in capstone and OJT projects, improving interactivity." },
        { name: "React.js", icon: <FaReact className="text-cyan-400" size="2rem" />, desc: "Developed personal CRUD web app with modern React workflows." }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", icon: <FaJava className="text-red-600" size="2rem" />, desc: "Learned through academic projects; applied in backend exercises at STI College." },
        { name: "C#", icon: <img src={csharpLogo} alt="C#" className="w-8 h-8" draggable="false" />, desc: "Used in backend programming coursework." },
        { name: "Python", icon: <FaPython className="text-yellow-500" size="2rem" />, desc: "Created backend APIs with Flask during personal and academic projects." },
        { name: "Flask", icon: <SiFlask className="text-gray-300" size="2rem" />, desc: "Used Flask for lightweight server-side logic in web projects." }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "Firestore", icon: <img src={firestoreLogo} alt="Firestore" className="w-8 h-8" draggable="false" />, desc: "Integrated as NoSQL database in both capstone and OJT projects." },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" size="2rem" />, desc: "Applied for relational database management in academic exercises." },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" size="2rem" />, desc: "Used with Supabase for deploying modern full-stack apps." }
      ]
    },
    {
      category: "Deployment Tools",
      items: [
        { name: "Firebase Hosting", icon: <SiFirebase className="text-yellow-500" size="2rem" />, desc: "Deployed multiple web projects including DTI Admin Website and Capstone Project." }
      ]
    },
    {
      category: "Version Control / Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" size="2rem" />, desc: "Used Git for version tracking in team and solo projects." },
        { name: "GitHub", icon: <FaGithub className="text-gray-300" size="2rem" />, desc: "Hosted source code and collaborated using GitHub repositories." }
      ]
    },
    {
      category: "Other Technical Skills",
      items: [
        { name: "Basic Computer Troubleshooting", desc: "Provided hardware/software/networking support during OJT at DTI." },
        { name: "Debugging", desc: "Debugged applications during development to ensure smooth operation." },
        { name: "Time Management", desc: "Effectively prioritized work to balance multiple tasks and complete them on schedule." },
        { name: "Organizational Skills", desc: "Managed tasks and project requirements efficiently to meet deadlines and maintain quality." },
        { name: "Problem Solving", desc: "Applied logical thinking to solve technical challenges during project work." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">My Skills</h1>
        {skills.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((skill, i) => (
                <AnimatedCard key={i} delay={i * 0.1}>
                  <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-2">
                      {skill.icon && <div>{skill.icon}</div>}
                      <span className="font-bold">{skill.name}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{skill.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default SkillsPage;