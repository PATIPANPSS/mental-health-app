import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEbook = () => {
  const [ebook, setEbook] = useState(null);
  const [formData, setFormData] = useState({ title: "", bookLink: "" });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ message: "", type: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/ebooks/${id}`
        );
        if (!response.ok) {
          throw new Error("E-book not found");
        }
        const data = await response.json();
        setEbook(data);
        setFormData({ title: data.title, bookLink: data.bookLink });
        setPreviewUrl(data.imageUrl);
      } catch (err) {
        setStatusMessage({
          message: `Failed to fetch ebook: ${err.message}`,
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchEbook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setStatusMessage({ message: '', type: '' });

    const form = new FormData();
    form.append("title", formData.title);
    form.append("bookLink", formData.bookLink);
    if (imageFile) {
      form.append("ebookImage", imageFile);
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/ebooks/${id}`,
        {
          method: "PUT",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedEbook = await response.json();
      setStatusMessage({ message: "อัปเดต E-book สำเร็จ!", type: "success" });
      setTimeout(() => navigate("/book-list"), 1500);
    } catch (err) {
      setStatusMessage({
        message: `เกิดข้อผิดพลาดในการอัปเดต: ${err.message}`,
        type: "error",
      });
    } finally {
      setSubmit(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200 text-center text-2xl font-semibold">
          กำลังโหลดข้อมูล E-book...
          <div className="w-12 h-12 border-4 border-t-4 border-solid rounded-full animate-spin mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

    // if (!ebook) {
    //   return (
    //     <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
    //       <div className="bg-red-100 p-12 rounded-2xl shadow-xl border border-red-300 text-center text-red-700 text-xl font-semibold">
    //         ไม่พบ E-book ที่ต้องการแก้ไข
    //       </div>
    //     </div>
    //   );
    // };

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border- border-gray-200">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-gray-300 hover:text-white py-2 px-4 rounded-sm text-gray-500"
          >
            Back
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          แก้ไข E-book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              ชื่อ E-book
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="bookLink"
              className="block text-gray-700 font-semibold mb-2"
            >
              ลิงก์ E-book
            </label>
            <input
              type="url"
              id="bookLink"
              name="bookLink"
              value={formData.bookLink}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="ebookImage"
              className="block text-gray-700 font-semibold mb-2"
            >
              รูปปก E-book
            </label>
            <input
              type="file"
              id="ebookImage"
              name="ebookImage"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md text-gray-700 file:mr-4 file:py-2 file:px-4 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>
          {previewUrl && (
            <div className=" flex justify-center items-center mt-4">
              <img
                src={previewUrl}
                alt="E-book"
                className="w-48 h-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submit}
            className={`w-full flex items-center justify-center font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md
              ${
                submit
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
              }`}
          >
            {submit ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
          </button>
        </form>

        {statusMessage.message && (
          <div
            className={`mt-6 p-4 rounded-lg text-center font-semibold ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : statusMessage.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {statusMessage.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditEbook;
