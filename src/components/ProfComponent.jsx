import React, { useContext } from "react";
import { RefContext } from "../context/RefContext";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Slide, Zoom } from "react-awesome-reveal";
import TypeIt from "typeit-react";

const ProfComponent = () => {
  const { profileRef } = useContext(RefContext);

  return (
    <div className="dark-bg">
      <div
        className="flex flex-col gap-8 py-12 max-w-screen-xl mx-auto p-4 md:flex-row lg:flex-row"
        ref={profileRef}
      >
        <div className="md:w-2/3 lg:w-2/3">
          <Slide direction="left">
            <div className="flex flex-col transition-transform duration-700 ease-in">
              <div className="space-y-4">
                <h4 className="text-4xl">
                  Hello <span className="txt-color">I'am</span>
                </h4>
                <h1 className="font-semibold txt-color text-5xl">
                  <TypeIt
                    options={{
                      strings: ["Muhammad Umar"],
                      speed: 100,
                      waitUntilVisible: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="text-xl">
                  I have chosen{" "}
                  <span className="txt-color">Web Development</span> as a
                  career. I am also interseted in{" "}
                  <span className="txt-color">AI/ML</span> and currently
                  studying it. Currently I am a enrolled in BS{" "}
                  <span className="txt-color">Software Engineering</span> at
                  FAST Lahore
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <p>Check out my</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/muhammad-umar-b1a815269/"
                    className="rounded-full bg-green p-2 hover:text-blue-500"
                    target="_blank"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MuhammadUmar7831"
                    className="rounded-full bg-green p-2 hover:text-slate-700"
                    target="_blank"
                  >
                    <AiFillGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </div>
        <Zoom>
          <div className="flex transition-transform duration-700 ease-in">
            <img
              src="/images/bannerUser.png"
              alt="profile"
              className="w-full"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ProfComponent;
