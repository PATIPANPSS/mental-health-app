import React from 'react'
import BookCard from '../components/BookCard'

import ImgBook1 from '../assets/book/depressive.JPG'

const ebooksData = [
    {
      title: "ภาวะซึมเศร้า (Depressive)",
      bookLink: "https://heyzine.com/flip-book/9147bcd2db.html",
      imageUrl: ImgBook1 // ตัวอย่างรูปภาพ
    },
    {
      title: "ศิลปะแห่งการนอนหลับ: เพื่อสุขภาพจิตที่ดี",
      bookLink: "https://www.who.int/docs/default-source/documents/who-mh-gap-ops-stress-management-guide-thai.pdf?sfvrsn=225c5d2c_2&download=true", // ตัวอย่างลิงก์ E-book
      imageUrl: "https://placehold.co/300x200/93c5fd/1e3a8a?text=Sleep+Book" // ตัวอย่างรูปภาพ
    },
    {
      title: "สร้างความยืดหยุ่นทางใจ: รับมือกับความท้าทาย",
      bookLink: "https://www.who.int/docs/default-source/documents/who-mh-gap-ops-stress-management-guide-thai.pdf?sfvrsn=225c5d2c_2&download=true", // ตัวอย่างลิงก์ E-book
      imageUrl: "https://placehold.co/300x200/fcd34d/b45309?text=Resilience+Book" // ตัวอย่างรูปภาพ
    },
    {
      title: "เข้าใจและก้าวผ่านภาวะซึมเศร้า",
      bookLink: "https://www.who.int/docs/default-source/documents/who-mh-gap-ops-stress-management-guide-thai.pdf?sfvrsn=225c5d2c_2&download=true", // ตัวอย่างลิงก์ E-book
      imageUrl: "https://placehold.co/300x200/fca5a5/be123c?text=Depression+Book" // ตัวอย่างรูปภาพ
    },
    {
      title: "พลังแห่งสติ: การฝึก Mindfulness เบื้องต้น",
      bookLink: "https://www.who.int/docs/default-source/documents/who-mh-gap-ops-stress-management-guide-thai.pdf?sfvrsn=225c5d2c_2&download=true", // ตัวอย่างลิงก์ E-book
      imageUrl: "https://placehold.co/300x200/a78bfa/5b21b6?text=Mindfulness+Book" // ตัวอย่างรูปภาพ
    },
    {
      title: "คู่มือฉบับสมบูรณ์เพื่อสุขภาพจิตที่ดี",
      bookLink: "https://www.who.int/docs/default-source/documents/who-mh-gap-ops-stress-management-guide-thai.pdf?sfvrsn=225c5d2c_2&download=true", // ตัวอย่างลิงก์ E-book
      imageUrl: "https://placehold.co/300x200/81e6d9/0f766e?text=Mental+Health+Guide" // ตัวอย่างรูปภาพ
    },
  ];

const Ebook = () => {
  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          คลัง E-book สุขภาพใจ (อ่านออนไลน์)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          ที่นี่คุณจะพบกับ E-book มากมายที่คัดสรรมาเพื่อส่งเสริมความรู้ความเข้าใจ
          และเป็นแนวทางในการดูแลสุขภาพจิตของคุณ
          สามารถคลิกเพื่ออ่านได้ทันที เพื่อเป็นส่วนหนึ่งของการเดินทางสู่สุขภาวะที่ดี
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* ใช้ .map() เพื่อ render EbookCard จาก array */}
          {ebooksData.map((ebook, index) => (
            <BookCard
              key={index} // ใช้ index เป็น key ชั่วคราว ควรใช้ id ที่ไม่ซ้ำกันจริงถ้ามี
              title={ebook.title}
              bookLink={ebook.bookLink}
              imageUrl={ebook.imageUrl}
            />
          ))}
        </div>
        <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800 text-center">
          <p className="font-semibold">
            <span className="text-xl">💡</span> หมายเหตุ: E-book เหล่านี้เป็นตัวอย่างลิงก์ภายนอก
            ในการใช้งานจริง คุณจะต้องจัดเก็บไฟล์ E-book ของคุณและสร้าง URL
            สำหรับแต่ละเล่ม
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ebook