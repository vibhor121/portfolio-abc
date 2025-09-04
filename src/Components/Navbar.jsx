import React from "react";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward, MdDownload, MdVisibility } from "react-icons/md";

const Navbar = () => {

  return (
    <div className="nvr pt-4">
      <div className="z-50 poppins-regular backdrop-blur-xl px-4 sm:px-10 py-3 bg-white/5 text-white w-full mx-auto rounded-full absolute sm:relative sm:top-0 sm:z-auto">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <a
            href="#"
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            <FaCode className="text-4xl" />
          </a>
          <div className="nvrt flex items-center gap-20 text-lg">
            <a
              href="#skills"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#about"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
            >
              About Me
            </a>
            <div className="flex items-center gap-2">
              <a
                href="/vibhor_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-purple-400 transition duration-300 flex items-center gap-1"
                title="View Resume"
              >
                <MdVisibility className="text-sm" />
                Resume
              </a>
              <a
                href="/vibhor_resume.pdf"
                download="vibhor_resume.pdf"
                className="cursor-pointer hover:text-purple-400 transition duration-300"
                title="Download Resume"
              >
                <MdDownload className="text-sm" />
              </a>
            </div>
          </div>
          <div className="flex">
            <a href="#contact">
              <button className="flex items-center gap-2 text-sm btn-grad text-white px-4 py-2 rounded-full font-light transition duration-300">
                Contact Me{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-4">
            <a
              href="#"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
            >
              <FaCode className="text-3xl" />
            </a>
          </div>
          
          {/* Mobile Navigation Items - Always Visible Vertical Layout */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#skills"
              className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
            >
              Projects
            </a>
            <a
              href="#about"
              className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
            >
              About Me
            </a>
            <div className="flex items-center gap-3">
              <a
                href="/vibhor_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light flex items-center gap-2"
                title="View Resume"
              >
                <MdVisibility className="text-lg" />
                Resume
              </a>
              <a
                href="/vibhor_resume.pdf"
                download="vibhor_resume.pdf"
                className="cursor-pointer hover:text-purple-400 transition duration-300"
                title="Download Resume"
              >
                <MdDownload className="text-lg" />
              </a>
            </div>
            <a href="#contact" className="mt-2">
              <button className="flex items-center gap-2 text-sm btn-grad text-white px-4 py-2 rounded-full font-light transition duration-300">
                Contact Me{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
