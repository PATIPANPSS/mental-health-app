import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-indigo-800 to-blue-900 text-white shadow-xl flex flex-col p-6 rounded-r-2xl">
        <div className="flex items-center mb-10 mt-4">
          <span className="text-4xl">📊</span>
          <h2 className="text-3xl font-bold ml-3 tracking-wide">แดชบอร์ด</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="flex items-center py-3 px-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                {/* <HomeIcon className="h-6 w-6 mr-3" /> */}
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link
                to="/info" // ลิงก์ไปยังหน้ารายการ E-book
                className="flex items-center py-3 px-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                {/* <BookOpenIcon className="h-6 w-6 mr-3" /> */}
                จัดการ E-book
              </Link>
            </li>
            <li>
              <button
                onClick={() => alert('ฟังก์ชันจัดการผู้ใช้ยังไม่พร้อมใช้งาน')}
                className="flex items-center w-full text-left py-3 px-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                {/* <UserGroupIcon className="h-6 w-6 mr-3" /> */}
                จัดการผู้ใช้
              </button>
            </li>
            <li>
              <button
                onClick={() => alert('ฟังก์ชันจัดการแบบประเมินยังไม่พร้อมใช้งาน')}
                className="flex items-center w-full text-left py-3 px-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                {/* <DocumentTextIcon className="h-6 w-6 mr-3" /> */}
                จัดการแบบประเมิน
              </button>
            </li>
            <li>
              <button
                onClick={() => alert('ฟังก์ชันรายงานยังไม่พร้อมใช้งาน')}
                className="flex items-center w-full text-left py-3 px-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                {/* <ChartBarIcon className="h-6 w-6 mr-3" /> */}
                รายงานและ Log
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t border-indigo-700 text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} สุขใจ. All rights reserved.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 min-h-full">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-6 text-center">
            ยินดีต้อนรับสู่ แดชบอร์ดผู้ดูแลระบบ
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
            ใช้แถบนำทางด้านซ้ายเพื่อเข้าถึงส่วนต่างๆ ของระบบจัดการเว็บไซต์
            คุณสามารถจัดการ E-book, ผู้ใช้, แบบประเมิน และดูรายงานได้ที่นี่
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* การ์ดสำหรับจัดการ E-book */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
                  {/* <BookOpenIcon className="h-8 w-8 mr-3" /> */}
                  จัดการ E-book
                </h3>
                <p className="text-gray-700 mb-6">
                  เพิ่ม, แก้ไข, ลบ E-book หรือดูรายการ E-book ทั้งหมดในระบบ
                </p>
              </div>
              <div className="flex space-x-4 mt-auto">
                <Link
                  to="/info"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  ดู E-book
                </Link>
                <Link
                  to="/add-ebook"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  เพิ่ม E-book
                </Link>
              </div>
            </div>

            {/* การ์ดสำหรับจัดการผู้ใช้ */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
                  {/* <UserGroupIcon className="h-8 w-8 mr-3" /> */}
                  จัดการผู้ใช้
                </h3>
                <p className="text-gray-700 mb-6">
                  ดูข้อมูลผู้ใช้, จัดการสิทธิ์การเข้าถึง, หรือลบบัญชีผู้ใช้
                </p>
              </div>
              <button
                onClick={() => alert('ฟังก์ชันจัดการผู้ใช้ยังไม่พร้อมใช้งาน')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-auto"
              >
                จัดการผู้ใช้
              </button>
            </div>

            {/* การ์ดสำหรับจัดการแบบประเมิน */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-yellow-700 mb-4 flex items-center">
                  {/* <DocumentTextIcon className="h-8 w-8 mr-3" /> */}
                  จัดการแบบประเมิน
                </h3>
                <p className="text-gray-700 mb-6">
                  สร้าง, แก้ไขแบบประเมินสุขภาพ หรือดูผลลัพธ์ของผู้ใช้
                </p>
              </div>
              <button
                onClick={() => alert('ฟังก์ชันจัดการแบบประเมินยังไม่พร้อมใช้งาน')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-auto"
              >
                จัดการแบบประเมิน
              </button>
            </div>

            {/* การ์ดสำหรับดู Log/Activity */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">
                  {/* <ChartBarIcon className="h-8 w-8 mr-3" /> */}
                  รายงานและ Log
                </h3>
                <p className="text-gray-700 mb-6">
                  ดูบันทึกกิจกรรม, สถิติการใช้งาน หรือรายงานต่างๆ
                </p>
              </div>
              <button
                onClick={() => alert('ฟังก์ชันรายงานยังไม่พร้อมใช้งาน')}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-auto"
              >
                ดูรายงาน
              </button>
            </div>
          </div>

          <div className="mt-16 p-8 bg-blue-50 rounded-xl border border-blue-200 text-blue-800 text-center shadow-inner">
            <p className="font-semibold text-lg">
              <span className="text-2xl">💡</span>
              นี่คือโครงสร้างเริ่มต้นของแดชบอร์ด คุณสามารถเพิ่มฟังก์ชันการจัดการข้อมูลสำหรับแต่ละส่วนได้ในภายหลัง
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard