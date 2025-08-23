import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import { motion } from "framer-motion";

import resumePNG from '../assets/Resume-David,Christian.png';
import resumePDF from '../assets/Resume-David,Christian.pdf';

function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h1>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-800/50 p-4 rounded-xl shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
            <img
              src={resumePNG}
              alt="Resume Preview"
              draggable="false"
              className="rounded-lg max-w-full h-auto border border-gray-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={() => window.open(resumePDF, "_blank")}
            />
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={resumePDF}
            download="Resume-David,Christian.pdf"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300 shadow-md"
          >
            Download PDF
          </a>

          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition duration-300 shadow-md"
          >
            View Fullscreen
          </a>
        </motion.div>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default ResumePage;