import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaArrowRight } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';

const GoProbono = () => {
  return (
    <div className="bg-[#f6f7fc] py-24 px-4 lg:px-0 border-t-2 border-[#00008876] border-dashed">
      <div id="goProbono" className="container mx-auto ">
        <h2 data-aos="fade-up" className="text-center underline text-5xl font-bold text-[#000088]">
          Go Probono
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 items-center">
          <div className="md:col-span-2 lg:col-span-3">
            <p data-aos="fade-up" className="mb-14 text-[18px]">
              GoProbono is a 360 legal application to provide access to justice
              in Bangladesh. It provides legal solution for free to the users by
              providing them answers to their legal problems, connecting them
              with practicing lawyers, and through their helplines. It was
              funded by herself, and it was ideated by her while she was working
              as a Fellow for a USAID project.
            </p>
            <Link data-aos="fade-up" className="mybtn flex items-center gap-2 w-[150px] rounded-lg justify-center">
              Read More <FaArrowRight />
            </Link>
          </div>
          <div data-aos="fade-up" className="md:col-span-2 lg:col-span-1 shadow-md rounded-lg p-6 m-6">
            <Tilt>
              <img className="w-full" src={logo} alt="" />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoProbono;
