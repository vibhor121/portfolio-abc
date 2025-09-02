import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pt-24 mt-5 pb-20">
      <div className="text-white w-fit mx-auto text-5xl">
        <span className="josefin-sans-light">My </span>
        <span className="josefin-sans-font">Projects</span>
      </div>
      <div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center md:mt-20 mt-16 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Website Builder
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              A modern website builder application that allows users to create and customize their own websites with a simple and intuitive drag-and-drop interface. Users can select templates, customize backgrounds, and apply various design options with secure authentication through Auth0. <br />
              Tech Stacks :- React, JavaScript, HTML, CSS, Auth0
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/vibhor121/Clause-Cloud_029"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://clause-cloud-029-rh9lzo3g0-vibhors-projects-d6b1e7df.vercel.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 md:relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/vibhor121/Clause-Cloud_029"
              target="_blank"
            >
              <img
                src="/websitebuilder.png"
                alt="Website Builder Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16 "
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Masai Movies
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              Masai Movies is an aggregator service for the entertainment industry that assists users with information and ticketing for movies. The platform features a user-friendly interface with real-time booking, seat selection, login authentication, and personalized recommendations. It's fully responsive and provides a seamless movie booking experience. <br />
              Tech Stacks :- HTML, CSS, JavaScript, JSON Server, LocalStorage
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/Sahilz9/Salesforce-Sages_084"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://delicate-cucurucho-42501a.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/Sahilz9/Salesforce-Sages_084"
              target="_blank"
            >
              <img
                src="/masaimovies.png"
                alt="Masai Movies Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] mt-10 md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Dmart Clone
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              A comprehensive e-commerce platform clone of Dmart, India's leading retail chain. This project replicates the core functionality of Dmart's online shopping experience, featuring product browsing, cart management, user authentication, and seamless checkout process. The platform offers a wide range of products with competitive pricing and user-friendly interface. <br />
              Tech Stacks :- HTML, CSS,  Bootstrap .
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://syntax-saadhana-2345.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345"
              target="_blank"
            >
              <img
                src="/DmartClone.png"
                alt="Dmart Clone Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16"
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Viatours Figma
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              Viatours Figma is a travel and tourism platform designed to provide users with comprehensive travel planning and booking services. This project showcases modern UI/UX design principles with a focus on creating an intuitive and visually appealing interface for travel enthusiasts. The platform offers destination information, booking capabilities, and travel recommendations. <br />
              Tech Stacks :- HTML, CSS, Bootstrap, Figma Design
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a href="https://figma-syntax-saadhana-2345.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>

            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[90%] mb-10 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345"
              target="_blank"
            >
              <img
                src="/viatorous.png"
                alt="Viatours Figma Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
