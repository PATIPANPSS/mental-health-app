import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [ebookData, setEbookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://mental-health-server-production.up.railway.app/api/ebooks"); // mental-health-server-production.up.railway.app
      // localhost:8000
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

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-ebook/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("ยืนยันที่จะลบ E-book")) {
      try {
        const response = await fetch(`https://mental-health-server-production.up.railway.app/api/ebooks/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setEbookData(ebookData.filter((ebook) => ebook._id !== id));
        alert("E-book ถูกลบเรียบร้อยแล้ว");
      } catch (err) {
        alert(`เกิดข้อผิดพลาดในการลบ E-book: ${err.message}`);
        console.error("Error deleting ebook:", err);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200 text-center text-2xl font-semibold">
          กำลังโหลดรายการ E-book...
          <div className="w-12 h-12 border-4 border-t-4 border-solid rounded-full animate-spin mx-auto mt-4"></div>
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
            โปรดตรวจสอบว่า Backend Server ของคุณกำลังทำงานอยู่ และ URL ถูกต้อง
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-gray-200">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-gray-300 hover:text-white py-2 px-4 rounded-sm text-gray-500"
          >
            Back
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          จัดการ E-book
        </h2>

        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/add-ebook")}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            เพิ่ม E-book ใหม่
          </button>
        </div>

        {ebookData.length > 0 ? (
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    รูปปก
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    ชื่อ E-book
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    ลิงก์
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    จัดการ
                  </th>
                </tr>
              </thead>
              <tbody>
                {ebookData.map((ebook) => (
                  <tr
                    key={ebook._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      {ebook.imageUrl ? (
                        <img
                          src={ebook.imageUrl}
                          alt={ebook.title}
                          className="w-16 h-auto object-cover rounded-md shadow-sm"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/64x64/cccccc/333333?text=No+Img";
                          }}
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-xs">
                          ไม่มีรูป
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-800 font-medium">
                      {ebook.title}
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={ebook.bookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm truncate max-w-[150px] inline-block"
                      >
                        {ebook.bookLink}
                      </a>
                    </td>
                    <td className="py-3 px-4 flex mt-6 space-x-2">
                      <button
                        onClick={() => handleEdit(ebook._id)}
                        className="py-2 px-4 rounded-sm bg-gray-400 text-white hover:bg-blue-500 transition duration-200 hover:scale-105"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ebook._id)}
                        className="py-2 px-4 rounded-sm bg-gray-400 text-white hover:bg-red-500 transition duration-200 hover:scale-105"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 col-span-full mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            ไม่พบ E-book ในคลังขณะนี้ คลิก "เพิ่ม E-book ใหม่" เพื่อเริ่มต้น
          </p>
        )}
      </div>
    </div>
  );
};

export default BookList;
