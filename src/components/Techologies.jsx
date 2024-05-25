import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { RefContext } from "../context/RefContext";
import technologies from '../services/technologiesService';

const Technologies = () => {
  const { technologiesRef } = useContext(RefContext);

  return (
    <div
      className="py-12 px-4 w-full light-bg"
      ref={technologiesRef}
    >
      <div className="font-semibold">
        <h4 className="text-xl py-7">Check out</h4>
        <h1 className="text-4xl">
          The <span className="txt-color">Technologies</span> I Know
        </h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-8">
        {technologies.map((tech, index) => (
          <Slide key={index} direction="left">
            <div className="contrast shadow-md py-4 px-6 flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="w-10 h-10 mx-auto overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h4 className=" font-semibold mt-4">{tech.name}</h4> */}
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
