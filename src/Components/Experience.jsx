import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaChartLine, FaMobile, FaRocket } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "MFilterit",
      position: "Software Engineer",
      duration: "Feb 2025 - Aug 2025",
      icon: FaBriefcase,
      achievements: [
        {
          icon: FaCode,
          title: "Developed Intellplus Dashboard",
          description: "Built comprehensive fraud detection dashboard from inception to detect online fraud, manipulation, and emerging risk trends"
        },
        {
          icon: FaChartLine,
          title: "API Integrations",
          description: "Implemented robust API integrations to enhance data flow and system interoperability across platforms"
        },
        {
          icon: FaMobile,
          title: "Responsive Web Applications",
          description: "Engineered responsive web applications to optimize user experience across all devices and screen sizes"
        },
        {
          icon: FaRocket,
          title: "Performance Optimization",
          description: "Optimized application performance for scalability and efficiency in high-traffic environments"
        }
      ]
    }
  ];

  return (
    <div className="pt-24 mt-5 pb-20">
      <div className="text-white w-fit mx-auto text-5xl mb-16">
        <span className="josefin-sans-light">Work </span>
        <span className="josefin-sans-font">Experience</span>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={expIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: expIndex * 0.2 }}
            className="mb-16"
          >
            {/* Company Header */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl shadow-purple-900/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="bg-purple-600 p-4 rounded-xl">
                    <exp.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white josefin-sans-font">
                      {exp.company}
                    </h2>
                    <p className="text-xl text-purple-300 josefin-sans-light">
                      {exp.position}
                    </p>
                  </div>
                </div>
                <div className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                  <span className="text-purple-200 font-semibold">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (expIndex * 0.2) + (achIndex * 0.1) 
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                        <achievement.icon className="text-purple-400 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 josefin-sans-font">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
