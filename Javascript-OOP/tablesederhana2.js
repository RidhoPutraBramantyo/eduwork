class TabelSederhana2 {
  constructor(data, kolom) {
    this.data2 = data;
    this.kolom2 = kolom;
  }
  buatDiv() {
    let open = "<div>";
    let close = "</div>";
  }
}

let arrData = [
  { nama: "haryo", umur: 27 },
  { nama: "chris", umur: 27 },
  { nama: "sandi", umur: 27 },
  { nama: "haryo", umur: 27 },
];
let obj = arrData[0];

console.log(arrData[0].nama + ", " + arrData[0].umur);
