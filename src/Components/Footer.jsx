import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

// Social links data
const socialLinks = [

 
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/rohit-verma769/",
  },
  { icon: <FaGithub />, url: "https://github.com/rohit7979" },
  { icon: <FaXTwitter />, url: "https://x.com/rebelindia01" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/l_rohitsoni_l/" },
  // {
  //   icon: <FaFacebookF />,
    
  // },
];

// Footer component
const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-8">
      <div className="ftr text-white w-fit mx-auto text-5xl md:my-5 md:mb-20 josefin-sans-font">
        <p>"Learning , Living, and Leveling Up."</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A327F0] hover:text-white duration-200 text-xl rounded-full border-2 border-[#7222b0] p-2 flex items-center justify-center transform hover:scale-125 transition-transform"
                aria-label={`Follow on ${link.url}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center text-white mb-3">
            <FaEnvelope className="mr-2 text-xl text-indigo-500" />
            <a
              className="text-xl text-designColor hover:underline"
              href="mailto:rebelindia01@gmail.com"
            >
              rebelindia01@gmail.com
            </a>
          </div>
          <div className="flex items-center text-white mb-3">
            <FaWhatsapp className="mr-2 text-xl text-green-500" />
            <span className="text-lg">+91 7979718309</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Rohit Verma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
