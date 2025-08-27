import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-4xl text-center border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          ยินดีต้อนรับสู่ <span className="text-green-600">สุขใจ</span>
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          เรามุ่งมั่นที่จะเป็นพื้นที่ที่ปลอดภัยและสนับสนุนสำหรับสุขภาพจิตที่ดีของคุณ
          ไม่ว่าคุณกำลังมองหาเครื่องมือประเมิน กำลังใจ หรือข้อมูลที่เป็นประโยชน์
          เราพร้อมอยู่เคียงข้างคุณเสมอ
        </p>
        <p className="mt-8 text-lg text-gray-600">
          สำรวจหน้าต่างๆ เพื่อค้นหาสิ่งที่คุณต้องการ
        </p>
      </div>
    </div>
  )
}

export default HomePage