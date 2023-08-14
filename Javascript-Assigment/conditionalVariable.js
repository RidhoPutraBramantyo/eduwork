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

//==================================================

// Latihan: Sistem Pengelolaan Pengguna
const users = [
  {
    id: 1,
    nama: "John Doe",
    umur: 30,
    saldo: 1000,
  },
  {
    id: 2,
    nama: "Jane Smith",
    umur: 25,
    saldo: 1500,
  },
  {
    id: 3,
    nama: "Michael Johnson",
    umur: 28,
    saldo: 2000,
  },
  {
    id: 4,
    nama: "Emily Brown",
    umur: 22,
    saldo: 800,
  },
];

const targetId = 2;

const user = users.find((user) => user.id === targetId);

if (user) {
  console.log(`Username: ${user.nama}`);
  console.log(`Saldo: ${user.saldo}`);
}
