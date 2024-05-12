import React, { useState, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectDetails from "./ProjectDetails";

const ProjectThumbnail = ({ imageSrc, title, description, details }) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    console.log(details);
  }, []);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={imageSrc} alt={title} className="w-full h-auto" />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 ${
            isHover ? "opacity-100" : "opacity-0 hover:opacity-100"
          }`}
        >
          <div className="text-center">
            <h2 className="text-sm md:text-lg lg:text-lg font-semibold">
              {title}
            </h2>
            <p className="text-sm md:text-lg lg:text-lg overflow-wrap break-word">
              {description}
            </p>
            {details && isHover && (
              <div className="flex justify-center mt-2 space-x-4">
                {details.liveDemo && (
                  <a
                    href={details.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none"
                    onClick={handleClick}
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                )}
                {details.github && (
                  <a
                    href={details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none"
                    onClick={handleClick}
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            )}
            <button
              className={`mt-2 px-4 py-2 bg-teal-500 text-xs md:text-base lg:text-base rounded-md hover:bg-teal-600 focus:outline-none ${
                isHover ? "" : "hidden"
              }`}
              onClick={() => {
                setDetailVisible(true);
                handleClick();
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {detailVisible && (
        <ProjectDetails details={details} onClose={() => setDetailVisible(false)} />
      )}
    </>
  );
};

export default ProjectThumbnail;