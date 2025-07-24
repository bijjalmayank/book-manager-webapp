import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: null,
  });

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookForm = new FormData();
    bookForm.append("title", formData.title);
    bookForm.append("author", formData.author);
    bookForm.append("image", formData.image);

    await axios.post("http://localhost:5000/api/books", bookForm);
    fetchBooks();
    setFormData({ title: "", author: "", image: null });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          📚 Book Manager
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2">
            📘 Add a New Book
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Book
          </button>
        </form>

        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          📚 Book List
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 flex items-start gap-4"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
