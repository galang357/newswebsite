function submitArtikel(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit
  
    // Mendapatkan nilai judul dan konten dari form
    var judul = document.getElementById("judul").value;
    var gambar = document.getElementById("gambar").value;
    var konten = document.getElementById("konten").value;
    var gambar2 = document.getElementById("gambar2").value;
    var konten2 = document.getElementById("konten2").value;
    
  
    // Kirim data artikel ke server menggunakan AJAX atau fetch
    
    fetch('/submit-artikel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        judul: judul,
        gambar: gambar,
        konten: konten,
        gambar2: gambar2,
        konten2: konten2,
      })
    })
    .then(response => {
      // pengalihan halaman
      window.location.href = "../article.html";
      console.log('Artikel berhasil dikirim');
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      console.log('Artikel gagal dikirim');
    });
  }