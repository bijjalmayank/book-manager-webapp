const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const upload = require('../middleware/upload');
const cloudinary = require('../config/cloudinary');

// POST /api/books — Upload + Save Book
router.post('/', upload.single('coverImage'), async (req, res) => {
  try {
    const { title, author } = req.body;

    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'book-covers' },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        stream.end(req.file.buffer);
      });
    };

    const result = await streamUpload(req);

    const book = new Book({
      title,
      author,
      coverImageURL: result.secure_url
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

// GET /api/books — Fetch All Books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ _id: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch books' });
  }
});

// DELETE /api/books/:id
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete book' });
  }
});


module.exports = router;
