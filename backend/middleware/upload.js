const multer = require('multer');

// Filter to allow only JPG and PNG
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPG and PNG allowed'), false);
  }
};

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2 MB limit
  }
});

module.exports = upload;
