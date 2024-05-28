import React, { useState } from "react";
import { FiLink, FiYoutube, FiGithub } from "react-icons/fi";
import ProjectDetails from "./ProjectDetails";

const ProjectThumbnail = ({ imageSrc, title, description, details }) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

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
        className="flex flex-col lg:flex-row relative rounded-xl contrast shadow-md p-4 cursor-pointer overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {!details.completed && (
          <div class="absolute right-0 top-0 h-16 w-16">
            <div class="absolute transform rotate-45 bg-green-600 dark:bg-red-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
              in progress
            </div>
          </div>
        )}
        <img src={imageSrc} alt={title} className="lg:w-1/2 rounded-xl" />
        <div className="flex flex-col m-4 lg:w-1/2">
          <h2 className="text-center text-lg md:text-lg lg:text-xl font-semibold Gandhara">
            {title}
          </h2>
          <p className="text-center text-sm md:text-lg lg:text-lg mt-4">
            {description}
          </p>
          <div className="flex flex-wrap mx-auto mt-4">
            {details &&
              details.technologies.map((tech, index) => (
                <div className="contrast shadow-md py-2 px-6 mx-4 my-2">
                  <div className="w-10 h-10 flex overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex mx-auto mt-4">
            {details.github && (
              <a
                href={details.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 hover:text-gray-500"
                onClick={handleClick}
              >
                <FiGithub className="mr-2" />
                Code
              </a>
            )}
            {details.liveDemo && (
              <a
                href={details.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 hover:text-blue-600"
                onClick={handleClick}
              >
                <FiLink className="mr-2" />
                Live Demo
              </a>
            )}
            {details.screenshots && (
              <a
                href={details.screenshots}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 hover:text-yellow-600"
                onClick={handleClick}
              >
                <FiLink className="mr-2" />
                screen shots
              </a>
            )}
            {details.video && (
              <a
                href={`https://www.youtube.com/watch/${details.video}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs md:text-base lg:text-base px-4 py-2 hover:text-red-600"
                onClick={handleClick}
              >
                <FiYoutube className="mr-2" />
                Youtube
              </a>
            )}
          </div>
        </div>
        {/* <div
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
        </div>*/}
      </div>
      {detailVisible && (
        <ProjectDetails
          details={details}
          onClose={() => setDetailVisible(false)}
        />
      )}
    </>
  );
};

export default ProjectThumbnail;
