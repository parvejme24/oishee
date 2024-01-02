import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import line from "../../../assets/images/line.png";

const ContacMe = () => {
  return (
    <div id="contact" className="py-24 px-4 lg:px-0">
      <div className="container mx-auto relative">
        <div className="bg-black w-full h-[300px] rounded-2xl"></div>
        <div
          data-aos="fade"
          className="absolute top-0 left-0 skew-y-2 hover:skew-y-0 bg-[#00008B] shadow-lg w-full h-[300px] rounded-2xl flex items-center"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-10 p-10 items-center">
            <div className="text-white md:col-span-3 text-center md:text-left">
              <h2
                data-aos="fade"
                className="text-2xl md:text-[50px] font-bold mb-4"
              >
                Contact Me
              </h2>
              <p data-aos="fade" className="md:text-[20px]">
                My inbox is always open. Whether you have a question or just
                want to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <Link
              data-aos="fade"
              className="mx-auto md:mx-0 btn mt-8 md:mt-0 w-[150px] hover:bg-transparent hover:text-white hover:border hover:border-white"
            >
              Contact <FaArrowRight />
            </Link>
          </div>
          <img
            className="absolute left-0 h-[300px] w-[100%] -z-20 bg-fixed"
            src={line}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContacMe;
