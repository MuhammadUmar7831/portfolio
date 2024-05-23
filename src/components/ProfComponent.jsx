import React, { useContext } from "react";
import { RefContext } from "../context/RefContext";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Slide, Zoom } from "react-awesome-reveal";
import TypeIt from "typeit-react";

const ProfComponent = () => {
  const { profileRef } = useContext(RefContext);

  return (
    <div className="bg-teal-900 dark:bg-slate-900">
      <div
        className="flex flex-col gap-8 py-12 max-w-screen-xl mx-auto p-4 md:flex-row lg:flex-row"
        ref={profileRef}
      >
        <Slide direction="left">
          <div className="flex-1 transition-transform duration-700 ease-in">
            <div className="space-y-4">
              <h4>
                Hello <span className="txt-color">I'am</span>
              </h4>
              <h1 className="text-3xl font-semibold txt-color">
                <TypeIt
                  options={{
                    strings: ["Muhammad Umar"],
                    speed: 200,
                    waitUntilVisible: true,
                    loop: true
                  }}
                />
              </h1>
              <h3>Web Developer</h3>
              <p>
                I am a web developer and i can provide you fullstack solution
                for your website.
              </p>
              <div>
                <a
                  target="_blank"
                  href="https://wa.me/923020417507"
                  className="px-4 py-3 bg-teal-700 dark:bg-slate-700 font-semibold"
                >
                  Let's talk
                </a>
              </div>
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
                  className="rounded-full bg-green p-2 hover:text-black"
                  target="_blank"
                >
                  <AiFillGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Slide>
        <Zoom>
          <div className="flex-1 transition-transform duration-700 ease-in">
            <img
              src="/images/bannerUser.png"
              alt="profile"
              className="w-full rounded-md shadow-md hover:shadow-lg"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ProfComponent;
