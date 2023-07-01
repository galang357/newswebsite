const express = require('express');
//const mysql = require('mysql');
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "uploads/"); // Menentukan folder penyimpanan gambar
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Menentukan nama file gambar yang disimpan
  }
});
const upload = multer({ storage: storage });

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

app.post("/crud", upload.single("image"), async (req, res) => {
  try {
      const { kategori, judul, konten } = req.body;
     // const image = req.file.filename;
      const tanggal = new Date(); // Mendapatkan tanggal saat ini
     let image = "";
     if (req.file) {
         image = req.file.filename;
     }

      const newUser = new User({
          kategori,
          judul,
          konten,
          image,
          tanggal, // Mengatur kolom "date" dengan nilai tanggal saat ini
      });

      await newUser.save();

      res.json(newUser);
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
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
      const {kategori, judul, konten, image, tanggal} = req.body
      const id = req.params.id

      const updateUser = await User.update({
        kategori,
        judul,
        konten,
        image,
        tanggal
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
  
  