import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillProject,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <nav className="bg-[#000300] w-full border-b drop-shadow-xl fixed border-black">
        <div className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto px-4">
          <div className="flex">
            <div className=" sm:-my-px sm:flex">
              <Link to="/">
                <h1 className="w-full font-extrabold font-untouched text-xl  lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                  Portfolio
                </h1>
              </Link>
            </div>
          </div>
          <ul className="hidden text-gray-400 items-center font-semibold md:flex">
            <li className="p-4">
              <Link
                to="/"
                class="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                <div className="mx-1">
                  <AiFillHome />
                </div>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/About"
                className="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                {" "}
                <div className="mx-1">
                  <RiMessage2Fill />
                </div>
                About{" "}
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/Projects"
                class="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                {" "}
                <div className="mx-1">
                  <AiFillProject />
                </div>
                Projects
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/ContactMe"
                class="text-lg flex items-center font-bold text-gray-300"
              >
                <div className="mx-1">
                  <SiMinutemailer />
                </div>
                Contact Me
              </Link>
            </li>
          </ul>
          <div onClick={handleNav} className=" block md:hidden">
            {nav ? (
              <AiOutlineClose size={20} color="white" />
            ) : (
              <AiOutlineMenu size={20} color="white" />
            )}
          </div>
          <ul
            className={
              nav
                ? " min-h-max flex flex-col absolute h-[200rem] left-0 top-0 w-[60%] text-white border-r border-r-gray-900 bg-black ease-in-out duration-500"
                : "ease-in-out duration-600 fixed left-[-100%]"
            }
          >
            <div className="sm:-my-px mt-5 mx-8">
              <Link to="/">
                <h1 className="w-full font-extrabold font-untouched text-xl  lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                  Portfolio
                </h1>
              </Link>
            </div>
            <li className="p-4">
              <Link
                to="/"
                class="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                <div className="mx-1">
                  <AiFillHome />
                </div>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/About"
                className="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                <div className="mx-1">
                  <RiMessage2Fill />
                </div>
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/Projects"
                class="text-lg flex items-center font-semibold no-underline text-gray-300 mx-2"
              >
                <div className="mx-1">
                  <AiFillProject />
                </div>
                Projects
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/ContactMe"
                class="text-lg flex items-center font-bold text-gray-300"
              >
                <div className="mx-1">
                  <SiMinutemailer />
                </div>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
