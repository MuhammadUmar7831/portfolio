import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Burger from "./Burger";
import { RefContext } from "../context/RefContext";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const { profileRef, technologiesRef, projectsRef, contactRef } =
    useContext(RefContext);

  const handleProfileClick = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleTechnologiesClick = () => {
    technologiesRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="p-4 relative z-10">
        <Burger isOpen={isOpen} handleClick={handleClick} />
      </div>
      <motion.div
        className="bg-white dark:bg-stone-950 w-1/2 min-w-80 fixed top-0 right-0 h-screen shadow-xl"
        initial={{ translateX: 80 }}
        animate={{ translateX: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => {
          if (!isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <nav className="flex flex-col justify-center items-center h-full text-xl">
          <span
            onClick={handleProfileClick}
            className="text-black dark:text-white py-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Profile
          </span>
          <span
            onClick={handleTechnologiesClick}
            className="text-black dark:text-white py-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Technologies
          </span>
          <span
            onClick={handleProjectsClick}
            className="text-black dark:text-white py-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </span>
          <span
            onClick={handleContactClick}
            className="text-black dark:text-white py-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </span>
        </nav>
      </motion.div>
    </div>
  );
};

export default Menu;
