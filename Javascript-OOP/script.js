class TabelSederhana2 {
  constructor(data, kolom) {
    this.data2 = data;
    this.kolom2 = kolom;
  }

  buatTabel() {
    let tableContent = `<table class="table table-bordered"><thead><tr>`;

    this.kolom2.forEach((kolomItem) => {
      tableContent += `<th>${kolomItem}</th>`;
    });

    tableContent += `</tr></thead><tbody>`;

    this.data2.forEach((dataItem) => {
      tableContent += `<tr>`;
      this.kolom2.forEach((kolomItem) => {
        tableContent += `<td>${dataItem[kolomItem]}</td>`;
      });
      tableContent += `</tr>`;
    });

    tableContent += `</tbody></table>`;
    return tableContent;
  }
}

const arrData = [
  { nama: "haryo", umur: 27 },
  { nama: "chris", umur: 27 },
  { nama: "sandi", umur: 27 },
  { nama: "haryo", umur: 27 },
];
const kolom = ["nama", "umur"];

const tabel = new TabelSederhana2(arrData, kolom);
const tabelHTML = tabel.buatTabel();

document.getElementById("tabelContainer").innerHTML = tabelHTML;
