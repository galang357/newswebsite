const express = require('express');
//const mysql = require('mysql');

const app = express();

const db =require("./config/db")
// Contoh rute untuk URL root
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Contoh respons
});

app.use(express.urlencoded({extended: true}));

db.authenticate().then(() =>
  console.log("berhasil terkoneksi dengan database")
);


const User = require('./models/User'); // Mengimpor model User dari file terpisah

app.use(express.json()); // Middleware untuk parsing body dengan format JSON

app.post('/crud', async (req, res) => {
  try {
    const {  username, email, password } = req.body;

    const newUser = new User({
     // id,
      username,
      email,
      password
    });

    await newUser.save();

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.get("/crud", async (req, res) =>{
  try{
    const getAllUser = await User.findAll({});

    res.json(getAllUser)
  }catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.get("/crud/:id", async (req, res) =>{
try{
const id = req.params.id

const getUser = await User.findOne({
  where: {id:id}
});

res.json(getUser)
}catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.delete("/crud/:id", async (req, res) =>{
  try{
  const id = req.params.id
  
  const deleteUser = await User.destroy({
    where: {id:id}
  });
  
  await deleteUser;

  res.json("Berhasil dihapus")
  }catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  app.put("/crud/:id", async (req, res) =>{
    try{
      const {username, email, password} = req.body
      const id = req.params.id

      const updateUser = await User.update({
        username,
        email,
        password
      },{where: {id:id}})

      await updateUser;
      res.json("berhasil")
    }catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });


// ...

// Mengaktifkan server untuk mendengarkan pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
   
//   });
  
//   connection.connect((error) => {
//     if (error) throw error;
//     console.log('Terhubung ke database MySQL!');
//   });
  
//   app.get('/artikel', (req, res) => {
//     const query = 'SELECT * FROM artikel';
  
//     connection.query(query, (error, results) => {
//       if (error) throw error;
//       res.json(results);
//     });
//   });

//   const port = 3000;

//   app.listen(port, () => {
//     console.log(`Server berjalan di port ${port}`);
//   });
  
  