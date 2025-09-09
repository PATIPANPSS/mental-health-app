import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide transition hover:scale-105"
        >
          Mental-Health
        </Link>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="transition duration-300 hover:scale-120"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/form"
            className="text-white hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-white hover:scale-105"
          >
            แบบประเมินสุขภาพ
          </Link>
          <Link
            to="/hotline"
            className="text-white hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-white hover:scale-105"
          >
            สายด่วนสุขภาพจิต
          </Link>
          <Link
            to="/ebook"
            className="text-white hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-white hover:scale-105"
          >
            E-book
          </Link>
        </div>
      </div>

      {/* Mobile menu (Expanded) */}
      <div className={`lg:hidden ${isOpen ? "flex" : "hidden"}`}>
        <div className="flex flex-col mt-6 mx-auto space-y-2">
          <Link
            to="/form"
            className=" hover:text-blue-900 px-30 py-2 rounded-lg text-lg font-medium transition hover:scale-105 duration-300 hover:bg-white text-center"
            onClick={() => setIsOpen(false)}
          >
            แบบประเมินสุขภาพ
          </Link>
          <Link
            to="/hotline"
            className=" hover:text-blue-900 px-30 py-2 rounded-lg text-lg font-medium transition hover:scale-105 duration-300 hover:bg-white text-center"
            onClick={() => setIsOpen(false)}
          >
            สายด่วนสุขภาพจิต
          </Link>
          <Link
            to="/ebook"
            className=" hover:text-blue-900 px-30 py-2 rounded-lg text-lg font-medium transition hover:scale-105 duration-300 hover:bg-white text-center"
            onClick={() => setIsOpen(false)}
          >
            E-book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
