// Deklarasikan pustaka atau modul
const TabelSederhana = (function () {
  // Fungsi untuk membuat tabel
  function buatTabel(data, kolom) {
    const kontainerTabel = document.getElementById("kontainer-tabel");
    const tabel = document.createElement("table");
    tabel.classList.add("table", "table-bordered", "table-hover");

    // Tambahkan baris judul kolom
    const barisJudul = document.createElement("tr");
    kolom.forEach((judul) => {
      const th = document.createElement("th");
      th.textContent = judul;
      barisJudul.appendChild(th);
    });
    tabel.appendChild(barisJudul);

    // Tambahkan data
    data.forEach((dataBaris) => {
      const baris = document.createElement("tr");
      dataBaris.forEach((dataSel) => {
        const sel = document.createElement("td");
        sel.textContent = dataSel;
        baris.appendChild(sel);
      });
      tabel.appendChild(baris);
    });

    kontainerTabel.appendChild(tabel);
  }

  // Kembalikan fungsi yang ingin dipublikasikan
  return {
    buatTabel: buatTabel,
  };
})();
