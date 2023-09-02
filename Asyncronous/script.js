// script.js

import { Table } from "./table.js";

// Mengambil data JSON dari URL online
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const kolom = Object.keys(data[0]); // Ambil kolom dari data JSON pertama

    // Instansiasi kelas Table dengan data dan kolom yang diambil
    const tabel = new Table(data, kolom);
    const tabelHTML = tabel.buatTabel();

    // Tambahkan tabel ke elemen dengan ID "tabelContainer"
    const tabelContainer = document.getElementById("tabelContainer");
    tabelContainer.innerHTML = tabelHTML;
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
