import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEbook = () => {
  const [title, setTitle] = useState("");
  const [bookLink, setBookLink] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(); // ใช้ FormData สำหรับส่งไฟล์
    formData.append("title", title);
    formData.append("bookLink", bookLink);
    if (imageFile) {
      formData.append('ebookImage', imageFile); // ชื่อ field ต้องตรงกับ 'ebookImage' ใน Multer Backend
    }

    try {
      const response = await fetch("http://localhost:8000/api/ebooks", {
        method: "POST",
        // เมื่อใช้ FormData, Browser จะตั้งค่า Content-Type: multipart/form-data ให้เอง ไม่ต้องระบุ
        // headers: { 'Content-Type': 'application/json' }, // ไม่ใช้สำหรับ FormData
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add E-book");
      }
      
      setMessage("E-book added successfully!");
      setTitle("");
      setBookLink("");
      setImageFile(null);
      navigate("/ebook");
    } catch (err) {
      setMessage(`Error: ${err.message}`);
      console.error("Error adding e-book:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          เพิ่ม E-book
        </h1>
        <form onSubmit={handleSubmit} className="space-x-6 max-w-lg mx-auto">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              ชื่อ E-book
            </label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="bookLink"
              className="block text-lg font-medium text-gray-700"
            >
              ลิงก์ E-Book (URL)
            </label>
            <input
              type="url"
              id="bookLink"
              onChange={(e) => setBookLink(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="imgFile"
              className="block text-lg font-medium text-gray-700"
            >
              รูปภาพหน้าปก (เลือกไฟล์)
            </label>
            <input
              type="file"
              id="imgFile"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="mt-1 block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 hover:file:bg-blue-100 file:text-blue-700"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            {loading ? "กำลังเพิ่ม E-book..." : "เพิ่ม E-book"}
          </button>
          {message && (
            <p
              className={`mt-4 text-center text-lg ${
                message.startsWith("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddEbook;
