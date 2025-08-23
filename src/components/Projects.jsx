import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import project1Img from "../assets/DealRadar.png";
import project2Img from "../assets/DTI.png";
import project3Img from "../assets/Personal.png";

const projects = [
  {
    title: "DealRadar",
    description: "Capstone Project - MSME Admin Dashboard | STI College Naga",
    image: project1Img,
    scrollTo: "dealradar-section",
    animation: "slideLeft",
  },
  {
    title: "DTI CamSur Admin Website",
    description: "OJT - Department of Trade and Industry (DTI)",
    image: project2Img,
    scrollTo: "dti-section",
    animation: "fade",
  },
  {
    title: "Personal CRUD Web App",
    description:
      "A personal project that implements Create, Read, Update, and Delete functionalities using modern web technologies.",
    image: project3Img,
    scrollTo: "personal-section",
    animation: "slideRight",
  },
];

const animationVariants = {
  slideLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  },
  slideRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { x: 100, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  },
};

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (scrollId) => {
    navigate(`/experience#${scrollId}`);
    setTimeout(() => {
      const target = document.getElementById(scrollId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section
      id="projects"
      className="py-20 max-w-6xl mx-auto px-10 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: false,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "exit"}
              variants={animationVariants[project.animation]}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
              onClick={() => handleCardClick(project.scrollTo)}
            >
              <img
                src={project.image}
                alt={project.title}
                draggable="false"
                className="w-full h-36 object-cover grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="p-4 flex flex-col justify-between h-40">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <p className="text-gray-500 text-xs text-right mt-2">
                  Click the card to see more details
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;