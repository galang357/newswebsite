<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$password = "";
$database = "artikel_db";
$conn = mysqli_connect($host, $user, $password, $database);

// Mengambil data terbaru dari database
$query = "SELECT * FROM articles ORDER BY tanggal DESC LIMIT 5";
$result = mysqli_query($conn, $query);

// Menyimpan data terbaru dalam array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Mengirimkan data dalam format JSON
echo json_encode($data);

// Tutup koneksi database
mysqli_close($conn);
?>
