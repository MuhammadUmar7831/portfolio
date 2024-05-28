import React, { useState, useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";
import MenuOverlay from "./MenuOverlay";
import { RefContext } from "../context/RefContext";

export default function Navbar(props) {
  const { darkMode, setDarkMode } = props;
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="nav shadow-md py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* <div className="flex items-center">
          <h1 className="font-bold text-2xl ml-2 Montserrat">Muhammad Umar</h1>
        </div> */}
        <div className="hidden md:flex">
          <nav className="space-x-4 Montserrat">
            <button
              onClick={handleProfileClick}
              className="hover:text-emerald-200 dark:hover:text-gray-300"
            >
              Profile
            </button>
            <button
              onClick={handleTechnologiesClick}
              className="hover:text-emerald-200 dark:hover:text-gray-300"
            >
              Technologies
            </button>
            <button
              onClick={handleProjectsClick}
              className="hover:text-emerald-200 dark:hover:text-gray-300"
            >
              Projects
            </button>
            <button
              onClick={handleContactClick}
              className="hover:text-emerald-200 dark:hover:text-gray-300"
            >
              Contact
            </button>
          </nav>
        </div>
        {/* <span className="cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? (
            <IoMdMoon className="w-6 h-6" />
          ) : (
            <LuSun className="w-6 h-6" />
          )}
        </span> */}
        <div class="flex flex-row justify-between toggle">
          <label
            htmlFor="dark-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="dark-mode"
                id="dark-toggle"
                className="checkbox hidden"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
              <div
                className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"
                style={{ backgroundColor: darkMode ? "#333" : "transparent" }}
              ></div>
              <div
                className="dot absolute left-1 top-1  w-6 h-6 rounded-full transition"
                style={{
                  transform: darkMode ? "translateX(100%)" : "translateX(0%)",
                }}
              >
                {darkMode ? (
                  <IoMdMoon className="w-6 h-6" />
                ) : (
                  <LuSun className="w-6 h-6 " />
                )}
              </div>
            </div>
            <div className="ml-3" style={{ color: darkMode ? "#fff" : "#333" }}>
              {darkMode ? `Dark` : "Light"} Mode
            </div>
          </label>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <MenuOverlay
          onClose={() => setIsOpen(false)}
          handleProfileClick={handleProfileClick}
          handleTechnologiesClick={handleTechnologiesClick}
          handleProjectsClick={handleProjectsClick}
          handleContactClick={handleContactClick}
        />
      )}
      <div ref={profileRef}></div>
    </div>
  );
}
