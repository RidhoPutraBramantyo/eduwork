import { TabelSederhana2 } from "./tablesederhana2.js";

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
