<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$password = "";
$database = "artikel_db";
$conn = mysqli_connect($host, $user, $password, $database);

// Mendapatkan data artikel dari form
$tanggal = mysqli_real_escape_string($conn, $_POST['tanggal']);
$kategori = mysqli_real_escape_string($conn, $_POST['kategori']);
$judul = mysqli_real_escape_string($conn, $_POST['judul']);
$konten = mysqli_real_escape_string($conn, $_POST['konten']);
$konten2 = mysqli_real_escape_string($conn, $_POST['konten2']);

// Mengambil data gambar 1
$gambar = $_FILES['gambar']['name'];
$gambar_tmp = $_FILES['gambar']['tmp_name'];
$gambarTujuan = 'folder_tujuan/' . $gambar;
move_uploaded_file($gambar_tmp, $gambarTujuan);

// Mengambil data gambar 2
$gambar2 = $_FILES['gambar2']['name'];
$gambar2_tmp = $_FILES['gambar2']['tmp_name'];
$gambar2Tujuan = 'folder_tujuan/' . $gambar2;
move_uploaded_file($gambar2_tmp, $gambar2Tujuan);

// Menyimpan gambar ke folder tujuan
$folderTujuan = "folder_tujuan/"; // Sesuaikan dengan folder tujuan penyimpanan gambar
if (!file_exists($folderTujuan)) {
    mkdir($folderTujuan, 0755, true);
}
$gambarTujuan = $folderTujuan . $gambar;
$gambar2Tujuan = $folderTujuan . $gambar2;
move_uploaded_file($gambar_tmp, $gambarTujuan);
move_uploaded_file($gambar2_tmp, $gambar2Tujuan);

// Menyimpan data artikel dan referensi gambar ke basis data
$query = "INSERT INTO articles (tanggal, kategori, judul, gambar, konten, gambar2, konten2) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, "sssssss", $tanggal, $kategori, $judul, $gambarTujuan, $konten, $gambar2Tujuan, $konten2);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
// Tutup koneksi database
mysqli_close($conn);

// Mengirimkan respon sukses
echo "Artikel berhasil disimpan!";
?>
