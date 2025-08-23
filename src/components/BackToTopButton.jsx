import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900 shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition transform duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}

export default BackToTopButton;