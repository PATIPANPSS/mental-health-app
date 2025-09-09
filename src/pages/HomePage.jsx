import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-4xl text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Welcome to Mental-Health
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          เรามุ่งมั่นที่จะเป็นพื้นที่ที่ปลอดภัยและสนับสนุนสำหรับสุขภาพจิตที่ดีของคุณ
          ไม่ว่าคุณกำลังมองหาเครื่องมือประเมิน กำลังใจ หรือข้อมูลที่เป็นประโยชน์
          เราพร้อมอยู่เคียงข้างคุณเสมอ
        </p>
        <p className="mt-8 text-lg text-gray-600">
          สำรวจหน้าต่างๆ เพื่อค้นหาสิ่งที่คุณต้องการ
        </p>
        <div className='flex justify-center mt-5 space-x-2'>
            <div>
              <Link to='/form' className='px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900'>แบบประเมินสุขภาพ</Link>
            </div>
            <div>
              <Link to='/hotline' className='px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900'>สายด่วนสุขภาพจิต</Link>
            </div>
            <div>
              <Link to='/ebook' className='px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900'>E-book</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage