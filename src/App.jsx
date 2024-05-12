import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfComponent from "./components/ProfComponent";
import Technologies from "./components/Techologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import { RefProvider } from "./context/RefContext";
import AnimatedCursor from "react-animated-cursor";

import "./App.css";

function App() {
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
        <div className="theme-bg Montserrat text-white p-0 m-0 overflow-x-hidden">
          <Navbar />
          <ProfComponent />
          <Technologies />
          <Projects/>
          <Contact />
        </div>
      </RefProvider>
    </>
  );
}

export default App;
