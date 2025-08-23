import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Aboutme from '../assets/Aboutme.jfif';

function AboutMe() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imageAnimation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
      textAnimation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    } else {
      imageAnimation.start({ x: -100, opacity: 0 });
      textAnimation.start({ x: 100, opacity: 0 });
    }
  }, [inView, imageAnimation, textAnimation]);

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20 max-w-6xl mx-auto text-white"
    >
      <motion.div
        className="md:w-1/3 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={imageAnimation}
      >
        <img
          src={Aboutme}
          alt="About Me"
          draggable="false"
          className="w-[25rem] h-[28rem] rounded-3xl object-cover shadow-lg select-none"
        />
      </motion.div>

      <motion.div
        className="md:w-2/3 space-y-6"
        initial={{ x: 100, opacity: 0 }}
        animate={textAnimation}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm a BSIT graduate from STI College Naga with a strong foundation in website development and problem-solving.
          I'm eager to contribute to a dynamic organization that values innovation and offers growth opportunities.
          I'm particularly interested in roles involving impactful projects in software engineering and web development.
        </p>
        <p className="text-lg text-gray-300">
          With a focus on clean design and optimal performance, I enjoy working with both front-end and back-end technologies to bring ideas to life.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutMe;