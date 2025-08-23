import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import profile from '../assets/Profile.png';

function HeroSection() {
  function handleSmoothScroll() {
    const target = document.getElementById("about");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(step);
  }

  return (  
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20 max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-6">
        <p className="text-sm text-gray-300">Hi there, I’m</p>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Christian Noe C. David<br />
        </h1>
        <h4 className="text-xl font-medium text-white">
          Website Developer
        </h4>

        <div className="flex space-x-6 text-2xl text-white">
          <a href="https://www.facebook.com/christian.david.86586/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF draggable="false" />
          </a>
          <a href="https://www.linkedin.com/in/chnevd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn draggable="false" />
          </a>
          <a href="https://x.com/Mr_DavidCH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaXTwitter draggable="false" />
          </a>
          <a href="https://github.com/Chrisvid8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub draggable="false" />
          </a>
        </div>

        <button
          onClick={handleSmoothScroll}
          className="inline-block mt-4 px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-black transition"
        >
          MORE ABOUT ME
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={profile}
          alt="Profile"
          draggable="false"
          className="w-64 md:w-[27rem] h-auto rounded-full select-none"
        />
      </div>
    </section>
  );
}

export default HeroSection;