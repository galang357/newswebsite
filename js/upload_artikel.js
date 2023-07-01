function submitArtikel(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit
  
    // Mengambil referensi elemen-elemen HTML
const form = document.getElementById("artikelForm");
const kategoriInput = document.getElementById("kategori");
const judulInput = document.getElementById("judul");
const gambarInput = document.getElementById("gambar");
const kontenInput = document.getElementById("konten");
const tanggalInput = document.getElementById("tanggal");

// Menggunakan Event Listener untuk menangani pengiriman formulir
form.addEventListener("submit", submitArtikel);

// Fungsi untuk menangani pengiriman formulir
async function submitArtikel(event) {
  event.preventDefault(); // Menghentikan perilaku pengiriman formulir default

  // Mengambil nilai-nilai input dari formulir
  const kategori = kategoriInput.value;
  const judul = judulInput.value;
  const gambar = gambarInput.files[0]; // Mengambil file gambar yang dipilih
  const konten = kontenInput.value;
  const tanggal = tanggalInput.value;

  // Membuat objek FormData untuk mengirim data dalam bentuk multipart/form-data
  const formData = new FormData();
  formData.append("kategori", kategori);
  formData.append("judul", judul);
  formData.append("image", gambar);
  formData.append("konten", konten);
  formData.append("tanggal", tanggal);

  try {
    const response = await fetch("/crud", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Artikel berhasil disimpan:", data);
      // Lakukan tindakan lain setelah berhasil menyimpan artikel
    } else {
      console.error("Gagal menyimpan artikel.");
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err.message);
  }
}}
