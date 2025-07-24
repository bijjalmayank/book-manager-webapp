import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📚 Book List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {books.map((book) => (
          <div key={book._id} className="border p-4 rounded shadow">
            <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
