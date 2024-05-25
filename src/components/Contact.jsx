import React, { useContext } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { RefContext } from "../context/RefContext";

export default function Contact() {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const { contactRef } = useContext(RefContext);

  return (
    <div className="w-full px-4 py-8 light-bg" id="footer" ref={contactRef}>
      <Slide direction="left">
        <div className="font-semibold">
          <h1 className="text-4xl">
            <span className="txt-color">Contact</span> Me
          </h1>
        </div>
        <div className="flex flex-col items-center md:flex-row lg:flex-row my-8">
          <span className="text-2xl ml-5">
            <FiPhoneCall />
          </span>
          <div className="flex flex-col mx-6">
            <h1 className="">Phone</h1>
            <a href="tel:+923020417507" className=" hover:text-teal-500">
              +92 302 0417 507
            </a>
          </div>

          <span className="text-2xl ml-10">
            <HiOutlineMailOpen />
          </span>
          <div className="flex flex-col mx-6">
            <h1 className="">Email</h1>
            <a href="mailto:mu8494759@gmail.com" className=" hover:text-teal-500">
              +92 302 0417 507
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <span className="text-3xl txt-color">
            <a target="_blank" href="https://github.com/MuhammadUmar7831">
              <AiFillGithub />
            </a>
          </span>
          <span className="text-3xl txt-color">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-umar-b1a815269/"
            >
              <AiFillLinkedin />
            </a>
          </span>
          <span className="text-3xl txt-color">
            <a target="_blank" href="https://wa.me/923020417507">
              <FaWhatsapp />
            </a>
          </span>
          <span className="text-3xl txt-color">
            <a
              target="_blank"
              href="https://www.instagram.com/muhammad_umar489/"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </Slide>

      {/* Scroll to Top Button */}
      <div className="flex justify-center mt-8">
        <div
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600"
          onClick={scrollUp}
        >
          <AiOutlineArrowUp className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}
