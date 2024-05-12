import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ProjectDetails({ details, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-500 p-4 rounded-lg w-11/12 h-5/6 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl mb-4">Project Screenshots</h2>
        <Carousel showIndicators={false}>
          {details.img.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <h2 className="text-3xl mb-4">Project Video</h2>
        <div className="flex justify-center mt-6">
          <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${details.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 className="text-3xl m-4 text-center">Technologies used</h2>
        <div className="mt-6 flex flex-wrap justify-center">
          {details.technologies.map((tech, index) => (
            <div key={index} className="bg-gray-800 py-4 px-6 rounded-md flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-500 hover:scale-105 m-2">
              <div className="relative w-20 h-20 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mt-4">{tech.name}</h4>
            </div>
          ))}
        </div>
        <button
          className="block mx-auto mt-4 px-4 py-2 bg-blue-500  rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}