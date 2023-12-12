import React from "react";
import logo from "../../assets/images/main-logo.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="#banner">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#goProbono">Go Probono</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="border-b-2 border-dashed border-[#0000886d] py-2 sticky top-0 bg-white z-20">
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="mybtn rounded-lg flex items-center gap-2">
            Contact <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
