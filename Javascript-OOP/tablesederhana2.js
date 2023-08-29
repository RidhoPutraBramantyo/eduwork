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

export { TabelSederhana2 }; // Named Export
