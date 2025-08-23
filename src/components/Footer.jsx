import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2025 | <span className="text-white font-semibold">Christian Noe C. David</span> | Portfolio
          </p>
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=davidchristiannoec@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/chnevd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/Mr_DavidCH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/Chrisvid8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;