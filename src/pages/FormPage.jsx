import React from "react";
import { Link } from "react-router-dom";

const FormPage = () => {
  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          แบบประเมินสุขภาพจิต
        </h2>

        <div>
          <Link
            to={"/form-2q"}
            className="my-5 block hover:text-blue-700 hover:underline hover:scale-105 tarnsition duration-200"
          >
            <li>แบบคัดกรองโรคซึมเศร้า (2Q)</li>
          </Link>
          <Link
            to={"/form-8q"}
            className="my-5 block hover:text-blue-700 hover:underline hover:scale-105 tarnsition duration-200"
          >
            <li>แบบประเมินความการฆ่าตัวตาย (8Q)</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
