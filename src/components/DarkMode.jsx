import React from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";

export default function DarkMode(props) {
  const { darkMode, setDarkMode } = props;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div class="flex flex-row justify-between toggle fixed top-14 right-2 z-10">
      <label htmlFor="dark-toggle" className="flex gap-2 items-center cursor-pointer flex-col">
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
            className="dot absolute left-1 top-1  w-6 h-6 rounded-full transition-transform"
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
  );
}
