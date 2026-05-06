import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaUsers, FaLightbulb, FaClock, FaSearch } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { MdChat, MdLoop, MdStar, MdPsychology } from "react-icons/md";

const softSkills = [
  { name: "Communication", icon: MdChat },
  { name: "Problem Solving", icon: FaLightbulb },
  { name: "Team Work", icon: FaUsers },
  { name: "Leadership", icon: MdStar },
  { name: "Adaptability", icon: MdLoop },
  { name: "Time Management", icon: FaClock },
  { name: "Critical Thinking", icon: MdPsychology },
  { name: "Attention to Detail", icon: FaSearch },
];

const variants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration, // duration comes from the argument
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStacks = () => {
  return (
    <div className="mt-10 pt-20 w-fit mx-auto">
      <h1 className="text-[3rem] font-bold text-center md:mb-10 mb-12 text-white josefin-sans-font">
        Technologies
      </h1>

      <div className="flex gap-5 md:gap-7 mb-8 w-fit mx-auto">
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/figma-184a11e6.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/mongodb-54000b2b.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(3.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/download-(1).png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(4)} initial="initial" animate="animate">
          <img src="/nodejs-d83eb6dd.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(4.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/java1.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(5)} initial="initial" animate="animate">
          <img src="/images.webp" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(5.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/ts.png" className="md:w-12 w-8" alt="" />
        </motion.div>
        <motion.div
          variants={variants(6)}
          initial="initial"
          animate="animate"
        >
          <FaPython className="text-4xl md:text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={variants(6.5)}
          initial="initial"
          animate="animate"
        >
          <SiFastapi className="text-4xl md:text-5xl text-green-500" />
        </motion.div>
      </div>

      {/* Second set of images */}
      <div className="flex gap-5 md:mb-3 w-fit mx-auto">
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/html-92b76a73.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/css-79a7f026.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(3.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/download.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/reactjs-966214a8.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/redux-171787ca.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(2)} initial="initial" animate="animate">
          <img
            src="/tailwind-6ece120d.png"
            className="md:w-12 w-8"
            alt=""
          />
        </motion.div>
      </div>

      <div className="mx-auto md:scale-80">
        <img src="/Group1940.svg" alt="" />
      </div>

      {/* Soft Skills */}
      <div className="mt-16 mb-4">
        <h2 className="text-[2rem] font-bold text-center mb-8 text-white josefin-sans-font">
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 bg-purple-900/20 text-white text-sm poppins-regular cursor-default"
              >
                <Icon className="text-purple-400 text-base" />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
