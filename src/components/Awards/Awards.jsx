import React from "react";
import logo from "../../assets/images/logo.png";
import Tilt from "react-parallax-tilt";
import { awards } from "../../../public/data";

const Awards = () => {
  return (
    <div
      id="awards"
      className="py-24 px-4 lg:px-0 border-t-2 border-[#00008876] border-dashed"
    >
      <div id="goProbono" className="container mx-auto ">
        <h2
          daa-aos="fade"
          className="text-center underline text-5xl font-bold text-[#000088]"
        >
          Awards
        </h2>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 mt-8"
        >
          {awards.map((item) => (
            <>
              <Tilt>
                <div className="p-4 rounded-lg shadow-md h-full">
                  <img className="h-[150px] w-full" src={item.image} alt="" />
                  <p className="mt-4">{item.description}</p>
                </div>
              </Tilt>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
