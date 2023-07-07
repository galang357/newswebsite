function login(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit
  
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Lakukan validasi login
    if (username === "galang" && password === "solutions") {
     // alert("Login berhasil!");
      // setelah login berhasil, seperti pengalihan halaman
      window.location.href = "input_artikel.html";
    } else {
      alert("Username atau password salah!");
    }
  }