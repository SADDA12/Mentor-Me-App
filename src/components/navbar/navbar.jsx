import React, { useState } from "react";
import { Link } from "react-router-dom";

import redhorizontal from "../../assets/redhorizantal.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex justify-between px-2.5 py-2 bg-gray-50 border-b lg:py-2">
        <div>
          <Link to="/">
          <img src={redhorizontal} alt="logo" className="w-36 h-10 md:w-48 md:h-12 lg:w-56 lg:h-16"/>
          </Link>
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xs focus:outline-none"
          >
            <svg
              className="w-6 h-6 mt-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col bg-gray-100">
              <div className="py-2">
                <Link
                  to="/signupmentee"
                  className="block text-sm px-4 py-2"
                >
                  Create An Account
                </Link>
                <Link
                  to="/login"
                  className="block text-sm px-4 py-2 "
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:hidden md:block pt-2 md:flex md:gap-12">

          <div>
            <form class="d-flex" role="search" className="flex">
              <input
                class="form-control me-1 h-10 w-80 border border-gray-300 rounded p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass text-lg"></i>
              </button>
            </form>
          </div>


          <div>
          <button
            onClick={toggleMenu}
            className="text-xs focus:outline-none"
          >
            <svg
              className="w-8 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col bg-gray-100">
              <div className="py-2">
                <Link
                  to="/signupmentee"
                  className="block text-base px-4 py-2"
                >
                  Create An Account
                </Link>
                <Link
                  to="/login"
                  className="block text-base px-4 py-2 "
                >
                  Login/s
                </Link>
              </div>
            </div>
          )}
        </div>

        </div>










        <div className="hidden md:hidden lg:block lg:flex lg:gap-12">

        <div className="lg:pt-2">
            <form class="d-flex" role="search" className="flex">
              <input
                class="form-control me-1 h-10 w-80 border border-gray-300 rounded p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass text-lg"></i>
              </button>
            </form>
          </div>

          <div className="flex gap-8 mr-12 lg:pt-2">
           

            <button className="bg-red-600 hover:bg-red-700 text-white px-3 rounded lg:h-12">
            <Link
              to="/signupmentee"
              className="text-base"
            >
              Create An Account
            </Link>
            </button>


            <Link
              to="/login"
              className="text-base hover:text-red-600 pt-1.5"
            >
              Login
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
