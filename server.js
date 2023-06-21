const http = require('http');
const port = 3000; // Port yang akan digunakan oleh server

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
  
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
