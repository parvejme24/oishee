import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import image from "../../../assets/images/banner-image.png";
import line from "../../../assets/images/line.png";
import gradiant from "../../../assets/images/gradiant.png";
import resume from "../../../assets/Sabiha_Mehzabin_Oishee.pdf";
import { Tilt } from 'react-tilt'

const Banner = () => {
  return (
    <div
      id="banner"
      className="relative bg-[url('https://i.ibb.co/mJ7vwZF/line.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20">
        {/* banner info  */}
        <div className="space-y-4">
          <Tilt>
            <h2 data-aos="fade" className="text-5xl font-semibold">
              Hi! I am{" "}
              <span className="text-[#000088] font-extrabold">
                Sabiha <br className="hidden lg:block" /> Mehzabin Oishee
              </span>
            </h2>
          </Tilt>
          <p data-aos="fade">
            DLA Piper Global Scholarship Programme, GoProbono, Bangladesh Forum
            for Legal and Humanitarian Affairs
          </p>
          <div data-aos="fade" className="flex gap-8 pt-14">
            <Link to={resume} target="_blank">
              <button className="mybtn">Get Resume</button>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="https://www.facebook.com/sabiha782"
                target="_blank"
                className="socialHover"
              >
                <FaFacebookF />
              </Link>
              {/* <Link className="socialHover">
                <FaTwitter />
              </Link> */}
              <Link
                to="https://www.linkedin.com/in/sabiha-mehzabin-oishee"
                target="_blank"
                className="socialHover"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://www.instagram.com/sabiha.mehzabin/"
                target="_blank"
                className="socialHover"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* banner image  */}
        <div>
          <img data-aos="fade" src={image} alt="" />
        </div>
      </div>
      <img className="absolute top-0 -z-50" src={gradiant} alt="" />
    </div>
  );
};

export default Banner;
