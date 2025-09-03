import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSldebar, setIsSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle Button */}
      {/* <div className="bg-blue-400 text-white p-4 flex justify-between items-center md:hidden">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setIsSidebar(!isSldebar)}>
          {isSldebar ? (
            
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
      </div> */}

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-blue-900 text-white shadow-xl flex flex-col p-4">
        <div className="flex items-center mb-4 md:mb-10 mt-4 justify-between md:justify-start">
          <h2 className="text-3xl font-bold md:ml-3 tracking-wide">
            Dashboard
          </h2>
          <button
            onClick={() => setIsSidebar(!isSldebar)}
            className="md:hidden transition duration-300 hover:scale-120"
          >
            {isSldebar ? (
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

        <nav
          className={`flex-1 md:flex-col flex flex-wrap md:flex-nowrap justify-center md:justify-start ${
            isSldebar ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="space-x-2 md:space-x-0 space-y-2 md:space-y-3">
            <li>
              <Link
                to="/book-list"
                className="flex py-3 md:px-4 px-30 text-lg font-medium hover:bg-blue-950 transition duration-200 hover:scale-105"
              >
                จัดการ E-book
              </Link>
            </li>

            <li>
              <Link
                to="/ebook"
                className="flex py-3 md:px-4 px-30 text-lg font-medium hover:bg-blue-950 transition duration-200 hover:scale-105"
              >
                จัดการแบบประเมิน
              </Link>
            </li>

            <li>
              <Link
                to="/ebook"
                className="flex py-3 md:px-4 px-30 text-lg font-medium hover:bg-blue-950 transition duration-200 hover:scale-105"
              >
                รายงานและ Log
              </Link>
            </li>

            <div className="mt-auto pt-6 border-t border-indigo-700 text-gray-300 text-sm">
              <div className="text-center">
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 px-4 py-2 rounded-sm cursor-pointer"
                >
                  LogOut
                </button>
              </div>
            </div>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-10 overflow-auto">
        <div className="bg-white p-4 lg:p-10 rounded-2xl shadow-xl border border-gray-200 min-h-full">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-800 mb-4 lg:mb-6 text-center">
            Welcome to Dashboard
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 md:mb-10 text-center leading-relaxed max-w-3xl mx-auto">
            ใช้แถบนำทางด้านซ้ายเพื่อเข้าถึงส่วนต่างๆ ของระบบจัดการเว็บไซต์
            คุณสามารถจัดการ E-book, ผู้ใช้, แบบประเมิน และดูรายงานได้ที่นี่
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-10">
            {/* การ์ดสำหรับจัดการ E-book */}
            <div className="bg-green-100 p-6 lg:p-8 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2 md:mb-4 flex items-center">
                  จัดการ E-book
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">
                  เพิ่ม, แก้ไข, ลบ E-book หรือดูรายการ E-book ทั้งหมดในระบบ
                </p>
              </div>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4  mt-auto">
                <Link
                  to="/ebook"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 lg:px-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  ดู E-book
                </Link>
                <Link
                  to="/book-list"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  จัดการ E-book
                </Link>
              </div>
            </div>

            {/* การ์ดสำหรับจัดการแบบประเมิน */}
            <div className="bg-yellow-100 p-6 md:p-8 rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-700 mb-2 lg:mb-4 flex items-center">
                  จัดการแบบประเมิน
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">
                  สร้าง, แก้ไขแบบประเมินสุขภาพ หรือดูผลลัพธ์ของผู้ใช้
                </p>
              </div>
              <button
                onClick={() =>
                  alert("ฟังก์ชันจัดการแบบประเมินยังไม่พร้อมใช้งาน")
                }
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-auto"
              >
                จัดการแบบประเมิน
              </button>
            </div>

            {/* การ์ดสำหรับดู Log/Activity */}
            <div className="bg-gray-100 p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2 lg:mb-4 flex items-center">
                  {/* <ChartBarIcon className="h-8 w-8 mr-3" /> */}
                  รายงานและ Log
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">
                  ดูบันทึกกิจกรรม, สถิติการใช้งาน หรือรายงานต่างๆ
                </p>
              </div>
              <button
                onClick={() => alert("ฟังก์ชันรายงานยังไม่พร้อมใช้งาน")}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-auto"
              >
                ดูรายงาน
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
