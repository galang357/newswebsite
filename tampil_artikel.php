<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$password = "";
$database = "artikel_db";
$conn = mysqli_connect($host, $user, $password, $database);

// Mendapatkan judul artikel yang diklik
$judul = $_GET['judul'];

// Mengambil data artikel dari database berdasarkan judul
$query = "SELECT tanggal, kategori, judul, gambar, konten, gambar2, konten2 FROM articles WHERE judul = '$judul'";
$result = mysqli_query($conn, $query);

// Mengecek apakah artikel ditemukan
if (mysqli_num_rows($result) > 0) {
    $artikel = mysqli_fetch_assoc($result);
    // Mengirimkan data artikel dalam format JSON
    echo json_encode($artikel);
} else {
    // Jika artikel tidak ditemukan, mengirimkan pesan error
    echo json_encode(['error' => 'Artikel tidak ditemukan']);
}

// Tutup koneksi database
mysqli_close($conn);
?>
