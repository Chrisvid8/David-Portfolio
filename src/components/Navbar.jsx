import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/certificates", label: "Certificates" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-6">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
            draggable="false"
          />
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold uppercase">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link to={item.to}>
                  <motion.span
                    className={`text-sm inline-block ${
                      active ? "text-blue-400" : "text-white"
                    }`}
                    animate={{
                      scale: active ? 1.2 : 1,
                      y: active ? 3 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 shadow-lg flex flex-col py-8 px-6 md:hidden"
      >
        <div className="flex justify-between items-center mb-10">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
            draggable="false"
          />
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 font-semibold uppercase">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    className={`text-lg inline-block ${
                      active ? "text-blue-400" : "text-white"
                    }`}
                    animate={{
                      scale: active ? 1.1 : 1,
                      y: active ? 2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;