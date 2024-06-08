import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfComponent from "./components/ProfComponent";
import Technologies from "./components/Techologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import { RefProvider } from "./context/RefContext";
import AnimatedCursor from "react-animated-cursor";

import "./App.css";
import DarkMode from "./components/DarkMode";
import Menu from "./components/Menu";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <RefProvider>
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
        /> */}
        <div
          className={`Montserrat p-0 m-0 overflow-x-hidden ${
            darkMode ? "dark dark-theme" : "light-theme"
          }`}
        >
          {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          {/* <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          <Menu />
          <ProfComponent />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </RefProvider>
    </>
  );
}

export default App;
