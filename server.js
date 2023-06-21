const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Mendapatkan path file yang diminta
  const filePath = path.join(__dirname, req.url);

  // Membaca file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Jika terjadi kesalahan (misalnya file tidak ditemukan), kirim status 404
      res.statusCode = 404;
      res.end('File not found');
    } else {
      // Jika file berhasil dibaca, kirimkan kontennya dengan tipe MIME yang sesuai
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
