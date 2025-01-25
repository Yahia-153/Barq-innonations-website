const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.options('*', cors());
app.get('', (req, res) => {
  const directoryPath = path.join(__dirname, 'imgs/team');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    const folders = files.filter((file) => {
      const fullPath = path.join(directoryPath, file);
      return fs.statSync(fullPath).isDirectory();
    });
    res.json(folders);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));