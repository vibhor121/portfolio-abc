import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward, MdDownload, MdVisibility, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        closeMobileMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="nvr pt-4">
      <div className="z-50 poppins-regular backdrop-blur-xl px-4 sm:px-10 py-3 bg-white/5 text-white w-full mx-auto rounded-full fixed top-4 left-1/2 transform -translate-x-1/2">
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
              href="#experience"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
            >
              Experience
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
        <div className="sm:hidden mobile-menu-container">
          {/* Mobile Header with Hamburger */}
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="cursor-pointer hover:text-purple-400 transition duration-300"
              onClick={closeMobileMenu}
            >
              <FaCode className="text-3xl" />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-purple-400 transition duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <MdClose className="text-2xl" />
              ) : (
                <MdMenu className="text-2xl" />
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Menu - Slide Down Animation */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col items-center space-y-4 pb-4">
              <a
                href="#skills"
                className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
                onClick={closeMobileMenu}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <a
                href="#about"
                className="cursor-pointer hover:text-purple-400 transition duration-300 text-lg font-light"
                onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
                >
                  <MdVisibility className="text-lg" />
                  Resume
                </a>
                <a
                  href="/vibhor_resume.pdf"
                  download="vibhor_resume.pdf"
                  className="cursor-pointer hover:text-purple-400 transition duration-300"
                  title="Download Resume"
                  onClick={closeMobileMenu}
                >
                  <MdDownload className="text-lg" />
                </a>
              </div>
              <a href="#contact" className="mt-2" onClick={closeMobileMenu}>
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

    </div>
  );
};

export default Navbar;
