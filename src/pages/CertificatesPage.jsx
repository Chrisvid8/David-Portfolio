import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import certOJT from "../assets/cert-ojt.png";
import certSpeaker from "../assets/cert-speaker.png";
import certAI from "../assets/cert-ai.png";
import certAIML from "../assets/cert-aiml.png";
import cert5G from "../assets/cert-5g.png";

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function CertificatesPage() {
  const certificates = [
    {
      date: "April 2025",
      title: "Recognized for developing key systems during OJT",
      details: [
        "DTI Connect CamSur Website",
        "DTI Connect CamSur Geotagging System",
        "DTI CamSur Frontline Service Queuing System",
      ],
      image: certOJT,
    },
    {
      date: "April 2025",
      title: "Recognized as Resource Speaker",
      details: [
        "“JUANA SOLVE IT? Smart Troubleshooting Techniques for Everyday Tech Issues” seminar",
      ],
      image: certSpeaker,
    },
    {
      date: "October 2024",
      title: "AI Ethics and Governance",
      image: certAI,
    },
    {
      date: "October 2024",
      title: "Artificial Intelligence / Machine Learning",
      image: certAIML,
    },
    {
      date: "October 2024",
      title: "5G Mobile Networks",
      image: cert5G,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-16 text-center">Certificates</h1>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

          <div className="space-y-16 relative z-10">
            {certificates.map((cert, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full shadow-md"></span>

                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      draggable="false"
                      className="rounded-2xl shadow-lg object-contain max-h-64 w-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="md:w-1/2 text-gray-300">
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-400 text-sm rounded-full">
                      {cert.date}
                    </span>
                    <h2 className="text-xl font-semibold text-white mt-2">
                      {cert.title}
                    </h2>
                    {cert.details && (
                      <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                        {cert.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default CertificatesPage;