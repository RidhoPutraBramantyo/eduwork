const umur = 60;
const keterangan = umur > 50 ? "sudah tua" : "Masih muda";
console.log(keterangan);

//===

const kondisi_And = umur < 50 && "masih muda";
const kondisi_Or = umur < 50 || "Hello";

console.log(kondisi_And);
console.log(kondisi_Or);

const dataSiswa = [
  { nama: "Harry", nilai: 250000 },
  { nama: "Irfan", nilai: 100000 },
  { nama: "Iqbal", nilai: 150000 },
];

const listJudul = dataSiswa.map((buku) => buku.nama);

console.log(listJudul);
