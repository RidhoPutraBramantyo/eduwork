class Table {
  constructor(data, kolom) {
    this.data2 = data;
    this.kolom2 = kolom;
    this.kolomYangDiinginkan = [
      "id",
      "name",
      "username",
      "email",
      "address",
      "company",
    ];
  }

  buatTabel() {
    let tableContent = `<table class="table table-bordered"><thead><tr>`;

    // Loop melalui kolom yang diinginkan
    this.kolomYangDiinginkan.forEach((kolomItem) => {
      tableContent += `<th>${
        kolomItem.charAt(0).toUpperCase() + kolomItem.slice(1)
      }</th>`; // Mengubah huruf pertama menjadi kapital
    });

    tableContent += `</tr></thead><tbody>`;

    this.data2.forEach((dataItem) => {
      tableContent += `<tr>`;

      // Loop melalui kolom yang diinginkan
      this.kolomYangDiinginkan.forEach((kolomItem) => {
        if (kolomItem === "address") {
          // Jika kolom adalah "address," ambil properti street dan city
          tableContent += `<td>${dataItem.address.street}, ${dataItem.address.city}</td>`;
        } else if (kolomItem === "company") {
          // Jika kolom adalah "company," ambil properti name
          tableContent += `<td>${dataItem.company.name}</td>`;
        } else {
          // Jika bukan "address" atau "company," tampilkan isi kolom biasa
          tableContent += `<td>${dataItem[kolomItem]}</td>`;
        }
      });
      tableContent += `</tr>`;
    });

    tableContent += `</tbody></table>`;
    return tableContent;
  }
}

export { Table }; // Named Export
