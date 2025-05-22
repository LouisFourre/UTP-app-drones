const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('video'), (req, res) => {
    res.send('File uploaded successfully.');
  });

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});