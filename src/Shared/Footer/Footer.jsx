import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 border-dashed border-t-2">
      <div className="container mx-auto md:flex justify-between items-center">
        <div>
          <p className="flex items-center gap-2">
            Make with <FaHeart className="text-red-500" /> by me
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p>Got a question?</p>
          <p>youremail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
