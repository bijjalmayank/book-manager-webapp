import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, coverImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("coverImage", formData.coverImage);

    try {
      await axios.post("http://localhost:5000/api/books", data);
      alert("Book added!");
      window.location.reload();
    } catch (error) {
      console.error("Upload failed", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-semibold mb-4">📘 Add a New Book</h2>
      <input name="title" type="text" placeholder="Book Title" onChange={handleChange} className="border p-2 block mb-2 w-full" required />
      <input name="author" type="text" placeholder="Author" onChange={handleChange} className="border p-2 block mb-2 w-full" required />
      <input type="file" onChange={handleFileChange} className="mb-4" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Book</button>
    </form>
  );
};

export default AddBookForm;
