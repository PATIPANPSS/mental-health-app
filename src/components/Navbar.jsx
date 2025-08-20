import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-200 to-green-200 p-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-blue-800 text-3xl font-bold tracking-wide transition-transform transform hover:scale-105"
        >
          Mental-Health
        </Link>
        <div className="space-x-8">
          {/* นำ NavLink ออกและใช้ Link โดยตรง พร้อมใส่ style */}
          <Link
            to="/form"
            className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-white hover:shadow-md"
          >
            แบบประเมินสุขภาพ
          </Link>
          <Link
            to="/hotline"
            className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-white hover:shadow-md"
          >
            สายด่วนสุขภาพจิต
          </Link>
          <Link
            to="/ebook"
            className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-white hover:shadow-md"
          >
            ข้อมูลสุขภาพจิต
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
