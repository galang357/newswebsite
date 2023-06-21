const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'in',
    user: 'galang',
    password: 'solutions',
    database: 'newswebsite'
  });

  connection.connect((error) => {
    if (error) throw error;
    console.log('Terhubung ke database MySQL!');
  });
  
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS artikel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255),
    konten TEXT,
    tanggal DATE
  )
`;

connection.query(createTableQuery, (error, results) => {
  if (error) throw error;
  console.log('Tabel artikel telah dibuat!');
});

const artikel = {
    judul: req.body.judul,
    konten: req.body.konten,
    tanggal: req.body.tanggal
  };
  
  const query = 'INSERT INTO artikel SET ?';
  
  connection.query(query, artikel, (error, results) => {
    if (error) throw error;
    console.log('Artikel berhasil disimpan ke database!');
    // Lakukan tindakan lain setelah menyimpan artikel ke database
  });
  
  