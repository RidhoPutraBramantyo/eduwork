import { Table } from "./table.js";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const kolom = Object.keys(data[0]);

    const tabel = new Table(data, kolom);
    const tabelHTML = tabel.buatTabel();

    const tabelContainer = document.getElementById("tabelContainer");
    tabelContainer.innerHTML = tabelHTML;
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
