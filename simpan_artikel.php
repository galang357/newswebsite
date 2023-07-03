<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$password = "";
$database = "artikel_db";
$conn = mysqli_connect($host, $user, $password, $database);

// Menerima data dari permintaan AJAX
$tanggal = $_POST['tanggal'];
$kategori = $_POST['kategori'];
$judul = $_POST['judul'];
$gambar = $_POST['gambar'];
$konten = $_POST['konten'];
$gambar2 = $_POST['gambar2'];
$konten2 = $_POST['konten2'];

// Menyimpan artikel ke database
$query = "INSERT INTO articles (tanggal, kategori, judul, gambar, konten, gambar2, konten2) VALUES ('$tanggal', '$kategori', '$judul', '$gambar', '$konten', '$gambar2', '$konten2')";
$result = mysqli_query($conn, $query);

// Memberikan respons ke JavaScript
if ($result) {
    echo "Artikel berhasil disimpan";
} else {
    echo "Gagal menyimpan artikel";
}

// Tutup koneksi database
mysqli_close($conn);
?>
