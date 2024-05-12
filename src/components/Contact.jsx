import React, {useContext} from "react";
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

  const{ contactRef } = useContext(RefContext)

  return (
    <div className="w-full px-4 py-8 theme-bg-darker" id="footer" ref={contactRef}>
      <Slide direction="left">
        <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 md:mb-0">
          <div className="mx-6">
            <h1 className="text-lg font-bold">Address:</h1>
            <p className="">
              40/7-A Gillani Park Ferozepur Road Lahore
            </p>
          </div>
          <div className="mx-6">
            <h1 className="text-lg font-bold">Phone:</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl ">
                <FiPhoneCall />
              </span>
              <a
                href="tel:+923020417507"
                className=" hover:text-teal-500"
              >
                +92 302 0417 507
              </a>
            </div>
          </div>
          <div className="mx-6">
            <h1 className="text-lg font-bold">Email:</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl ">
                <HiOutlineMailOpen />
              </span>
              <a
                href="mailto:mu8494759@gmail.com"
                className=" hover:text-teal-500"
              >
                mu8494759@gmail.com
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold my-4">My Links</h1>
        <div className="flex items-center gap-4">
          <span className="text-3xl text-black hover:text-teal-500">
            <a target="_blank" href="https://github.com/MuhammadUmar7831">
              <AiFillGithub />
            </a>
          </span>
          <span className="text-3xl text-blue-600 hover:text-teal-500">
            <a target="_blank" href="https://www.linkedin.com/in/muhammad-umar-b1a815269/">
              <AiFillLinkedin />
            </a>
          </span>
          <span className="text-3xl text-lime-600 hover:text-teal-500">
            <a target="_blank" href="https://wa.me/923020417507">
              <FaWhatsapp />
            </a>
          </span>
          <span className="text-3xl text-rose-600 hover:text-teal-500">
            <a target="_blank" href="https://www.instagram.com/muhammad_umar489/">
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