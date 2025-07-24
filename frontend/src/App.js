import React, { useState, useEffect } from "react";
import axios from "axios";
import confetti from "canvas-confetti";
import loadingGif from "./assets/uploading.gif"; // Ensure this exists

const API_URL = process.env.REACT_APP_API_URL;

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverImage: null,
  });

  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [books, setBooks] = useState([]);
  const [popup, setPopup] = useState({ type: "", message: "" });
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "coverImage") {
      const file = e.target.files[0];
      if (file && !["image/png", "image/jpeg"].includes(file.type)) {
        setError("❌ Only JPG or PNG images allowed");
        return;
      }
      if (file && file.size > 2 * 1024 * 1024) {
        setError("❌ File must be less than 2MB");
        return;
      }
      setFormData({ ...formData, coverImage: file });
      setError("");
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${API_URL}/books`);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.coverImage) {
      setError("Please fill all fields and upload a valid image");
      return;
    }

    setUploading(true);
    setError("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("coverImage", formData.coverImage);

    try {
      await axios.post(`${API_URL}/books`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });

      setFormData({ title: "", author: "", coverImage: null });
      setPopup({ type: "success", message: "🎉 Book added successfully!" });

      fetchBooks();
    } catch (err) {
      console.error(err);
      setPopup({ type: "error", message: "❌ Upload failed. Try again." });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(`${API_URL}/books/${id}`);
      setPopup({ type: "success", message: "🗑️ Book deleted successfully!" });
      fetchBooks();
    } catch (err) {
      console.error(err);
      setPopup({ type: "error", message: "❌ Failed to delete book." });
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        📚 Book Manager
      </h1>

      <div className="max-w-xl mx-auto space-y-6 relative">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-lg rounded space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="file"
            name="coverImage"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            className="w-full"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📤 Add Book
          </button>
        </form>

        {uploading && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <img
                src={loadingGif}
                alt="Uploading..."
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-lg font-semibold">Uploading book...</p>
            </div>
          </div>
        )}

        {popup.message && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white border px-6 py-4 rounded shadow-lg z-50 flex items-center gap-4">
            <span
              className={
                popup.type === "success" ? "text-green-600" : "text-red-600"
              }
            >
              {popup.message}
            </span>
            <button
              onClick={() => setPopup({})}
              className="text-gray-500 text-xl"
            >
              ×
            </button>
          </div>
        )}

        <div className="space-y-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-gray-100 p-4 rounded flex items-center justify-between cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={book.coverImageURL}
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded shadow"
                />
                <div>
                  <p className="font-bold">{book.title}</p>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(book._id);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                {deleting === book._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center relative">
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-2 right-3 text-gray-500 text-xl"
              >
                ×
              </button>
              <img
                src={selectedBook.coverImageURL}
                alt={selectedBook.title}
                className="w-full h-80 object-cover mb-4 rounded shadow"
              />
              <h2 className="text-xl font-bold">{selectedBook.title}</h2>
              <p className="text-gray-600">by {selectedBook.author}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookForm;
