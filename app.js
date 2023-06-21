const express = require('express');
const mysql = require('mysql');

const app = express();

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
  
  app.get('/artikel', (req, res) => {
    const query = 'SELECT * FROM artikel';
  
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
  });
  
  