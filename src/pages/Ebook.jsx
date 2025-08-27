import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const Ebook = () => {
  const [ebookData, setEbookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/ebooks");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEbookData(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch ebooks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200 text-center text-blue-700 text-2xl font-semibold">
          กำลังโหลด E-book สุขภาพใจ...
          <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-red-100 p-12 rounded-2xl shadow-xl border border-red-300 text-center text-red-700 text-xl font-semibold">
          เกิดข้อผิดพลาดในการโหลด E-book: {error}
          <p className="text-lg mt-4">
            โปรดตรวจสอบว่า Backend Server ของคุณกำลังทำงานอยู่ และ URL ถูกต้อง (
            <code className="font-mono">http://localhost:8000/api/ebooks</code>)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          คลัง E-book (อ่านออนไลน์)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {ebookData.length > 0 ? (
            ebookData.map((ebook) => (
              <BookCard
                key={ebook._id}
                title={ebook.title}
                bookLink={ebook.bookLink}
                imageUrl={ebook.imageUrl}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              ไม่พบ E-book ในคลังขณะนี้ โปรดเพิ่มข้อมูลในฐานข้อมูล MongoDB
              ของคุณ หรือใช้หน้าเพิ่ม E-book ใหม่
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ebook;
