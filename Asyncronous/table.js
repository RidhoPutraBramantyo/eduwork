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

    this.kolomYangDiinginkan.forEach((kolomItem) => {
      tableContent += `<th>${
        kolomItem.charAt(0).toUpperCase() + kolomItem.slice(1)
      }</th>`;
    });

    tableContent += `</tr></thead><tbody>`;

    this.data2.forEach((dataItem) => {
      tableContent += `<tr>`;

      this.kolomYangDiinginkan.forEach((kolomItem) => {
        if (kolomItem === "address") {
          tableContent += `<td>${dataItem.address.street}, ${dataItem.address.city}</td>`;
        } else if (kolomItem === "company") {
          tableContent += `<td>${dataItem.company.name}</td>`;
        } else {
          tableContent += `<td>${dataItem[kolomItem]}</td>`;
        }
      });
      tableContent += `</tr>`;
    });

    tableContent += `</tbody></table>`;
    return tableContent;
  }
}

export { Table };
