const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(cors());
const PORT = 3000;

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
