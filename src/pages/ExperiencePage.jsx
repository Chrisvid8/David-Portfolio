import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import dtiPresent1 from '../assets/dti-present1.jpg';
import dtiPresent2 from '../assets/dti-present2.jpg';
import dtiSpeaker from '../assets/dti-speaker.jpg';
import capstoneMock from '../assets/capstone-mock.jpg';
import capstoneFinal from '../assets/capstone-final.jpg';
import capstoneSymposium from '../assets/capstone-symposium.jpg';
import project1Img from "../assets/DealRadar.png";
import project2Img from "../assets/DTI.png";
import project3Img from "../assets/Personal.png";

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

function AnimatedSection({ children, variant }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

const ProjectCard = ({ img, alt, website, repo, children }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900 p-6 rounded-xl shadow-lg">
    <div className="md:w-1/3 flex flex-col items-center space-y-4">
      <img src={img} alt={alt} className="rounded-xl object-cover w-full max-w-sm select-none" draggable="false" />
      <div className="flex gap-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-sm transition shadow-md"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-sm transition shadow-md"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
    <div className="md:w-2/3 space-y-4">{children}</div>
  </div>
);

function ExperiencePage() {
  const imgContainer = "rounded-xl overflow-hidden max-h-56 mx-auto w-full flex justify-center";
  const location = useLocation();
  const [highlightedSection, setHighlightedSection] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setHighlightedSection(id);
        setTimeout(() => setHighlightedSection(null), 2000);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">
        
        <section id="dti-section" className={highlightedSection === "dti-section" ? "shadow-lg shadow-blue-500/50 rounded-xl p-4 transition duration-500" : ""}>
          <h1 className="text-4xl font-bold text-center mb-12 border-b border-gray-600 pb-4">
            On-the-Job Training – Department of Trade and Industry (DTI)
          </h1>

          <AnimatedSection variant={slideLeft}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/2 text-gray-300">
                <p>
                  Presented the Mobile Application developed by my groupmates and my Admin Website.
                  This was a pre-checking session to see if DTI wanted any design changes or
                  additional functions. (Note: I was not the developer of the mobile app.)
                </p>
              </div>
              <div className={`md:w-1/2 ${imgContainer}`}>
                <img src={dtiPresent1} alt="DTI Pre-Checking" className="object-contain w-full h-full select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideRight}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
              <div className="md:w-1/2 text-gray-300">
                <p>
                  Final presentation and checking of both the Mobile Application and Admin Website
                  before deployment. My focus was on the Admin Website’s development and functionality.
                </p>
              </div>
              <div className={`md:w-1/2 ${imgContainer}`}>
                <img src={dtiPresent2} alt="DTI Final Presentation" className="object-contain w-full h-full select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideLeft}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/2 text-gray-300">
                <p>
                  Served as a resource speaker during a technical seminar for DTI staff,
                  discussing basic troubleshooting of hardware and software.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden max-h-72 mx-auto flex justify-center">
                <img src={dtiSpeaker} alt="DTI Resource Speaker" className="object-contain h-auto max-h-72 w-auto select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideRight}>
            <ProjectCard
              img={project2Img}
              alt="DTI CamSur Admin Website"
              repo="https://github.com/Chrisvid8/DTI-Admin-Website"
            >
              <h3 className="text-2xl font-semibold">DTI CamSur Admin Website</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Displayed store monitoring data collected through DTI’s mobile application.</li>
                <li>Allowed admin users to <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> store records.</li>
                <li>Integrated complaints and SRE data from external DTI databases for central management.</li>
                <li>Managed admin user accounts and access permissions.</li>
              </ul>
              <div>
                <h4 className="text-lg font-semibold mt-4">Tech Stack</h4>
                <p className="text-gray-300 text-sm">HTML, CSS (Bootstrap), JavaScript, Firebase Firestore</p>
                <h4 className="text-lg font-semibold mt-4">Tools & Services</h4>
                <p className="text-gray-300 text-sm">Firebase Hosting, GitHub, Git</p>
              </div>
            </ProjectCard>
          </AnimatedSection>
        </section>

        <section id="dealradar-section" className={highlightedSection === "dealradar-section" ? "shadow-lg shadow-blue-500/50 rounded-xl p-4 transition duration-500" : ""}>
          <h1 className="text-4xl font-bold text-center mb-12 border-b border-gray-600 pb-4">
            Capstone Project – MSME Admin Dashboard
          </h1>

          <AnimatedSection variant={slideLeft}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/2 text-gray-300">
                <p>
                  Mock Defense presentation for our Capstone Project. I developed the Admin Website,
                  while my groupmates created the Deal Radar Mobile Application.
                </p>
              </div>
              <div className={`md:w-1/2 ${imgContainer}`}>
                <img src={capstoneMock} alt="Mock Defense" className="object-contain w-full h-full select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideRight}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
              <div className="md:w-1/2 text-gray-300">
                <p>
                  Final Defense presentation showcasing the completed Admin Website and
                  Mobile Application before final grading and approval.
                </p>
              </div>
              <div className={`md:w-1/2 ${imgContainer}`}>
                <img src={capstoneFinal} alt="Final Defense" className="object-contain w-full h-full select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideLeft}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md/w-1/2 text-gray-300">
                <p>
                  Presented at the Symposium where only 5 out of 9 groups were selected.
                  Awarded Best in Presentation for our Capstone Project.
                </p>
              </div>
              <div className={`md:w-1/2 ${imgContainer}`}>
                <img src={capstoneSymposium} alt="Symposium" className="object-contain w-full h-full select-none" draggable="false" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={slideRight}>
            <ProjectCard
              img={project1Img}
              alt="DealRadar Admin Dashboard"
              repo="https://github.com/Chrisvid8/DealRadar-Casptone-Project"
            >
              <h3 className="text-2xl font-semibold">DealRadar – MSME Admin Dashboard</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Provided analytics such as line graphs, pie charts, and bar graphs for sales and promotions.</li>
                <li>Allowed admin users to <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> MSME and promotion records.</li>
                <li>Reviewed and verified MSME registrations by checking business permits before approval.</li>
                <li>Validated sales promotions via DTI permit numbers, ensuring dates and details matched official records.</li>
                <li>Handled acceptance or rejection of MSME accounts and sales promotions based on legitimacy checks.</li>
              </ul>
              <div>
                <h4 className="text-lg font-semibold mt-4">Tech Stack</h4>
                <p className="text-gray-300 text-sm">HTML, CSS, JavaScript, Firestore</p>
                <h4 className="text-lg font-semibold mt-4">Tools & Services</h4>
                <p className="text-gray-300 text-sm">Firebase Hosting</p>
              </div>
            </ProjectCard>
          </AnimatedSection>
        </section>

        <section id="personal-section" className={highlightedSection === "personal-section" ? "shadow-lg shadow-blue-500/50 rounded-xl p-4 transition duration-500" : ""}>
          <h1 className="text-4xl font-bold text-center mb-12 border-b border-gray-600 pb-4">
            Personal Projects
          </h1>

          <AnimatedSection variant={slideLeft}>
            <ProjectCard
              img={project3Img}
              alt="Personal CRUD Web App"
              website="https://crud-personal-david.vercel.app/"
              repo="https://github.com/Chrisvid8/CRUD-Personal-Project"
            >
              <h3 className="text-2xl font-semibold">Personal CRUD Web App</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Implemented full CRUD functionality (Create, Read, Update, Delete) for managing data.</li>
                <li>Built with a responsive frontend and secure backend API integration.</li>
                <li>Integrated PostgreSQL database with RESTful API using Flask.</li>
                <li>Deployed using cloud services for both frontend and backend.</li>
              </ul>
              <div>
                <h4 className="text-lg font-semibold mt-4">Tech Stack</h4>
                <p className="text-gray-300 text-sm">React.js, PostgreSQL, Python (Flask)</p>
                <h4 className="text-lg font-semibold mt-4">Tools & Services</h4>
                <p className="text-gray-300 text-sm">Vercel, Render, Supabase, Git, GitHub</p>
              </div>
            </ProjectCard>
          </AnimatedSection>
        </section>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default ExperiencePage;