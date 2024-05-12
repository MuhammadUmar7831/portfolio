import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { RefContext } from "../context/RefContext";
import technologies from '../services/technologiesService';

const Technologies = () => {
  const { technologiesRef } = useContext(RefContext);

  return (
    <div
      className="py-12 px-4 w-full theme-bg-darker"
      ref={technologiesRef}
    >
      <div className="font-semibold">
        <h4 className="text-xl py-7">Check out</h4>
        <h1 className="text-4xl">
          My <span className="txt-color">Tech Stack</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {technologies.map((tech, index) => (
          <Slide key={index} direction="left">
            <div className="bg-gray-800 py-4 px-6 rounded-md flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <div className="relative w-20 h-20 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mt-4">{tech.name}</h4>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
