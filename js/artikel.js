function showFileName(input) {
    var fileName = input.value.split("\\").pop();
    var fileNameElement = document.getElementById("file-name");
    fileNameElement.innerHTML = "Nama file: " + fileName;
    fileNameElement.style.display = "block";
  }