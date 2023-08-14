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
    saldo: 150000,
  },
  {
    id: 2,
    nama: "Jane Smith",
    umur: 25,
    saldo: 40000,
  },
  {
    id: 3,
    nama: "Michael Johnson",
    umur: 28,
    saldo: 250000,
  },
  {
    id: 4,
    nama: "Emily Brown",
    umur: 22,
    saldo: 80000,
  },
];

//akses user data
const targetId = 2;

const user = users.find((user) => user.id === targetId);

if (user) {
  console.log(`Username: ${user.nama}`);
  console.log(`Saldo: ${user.saldo}`);
}

//cek kecukupan saldo

const minSaldo = 50000;

const cekSaldo =
  user.saldo > minSaldo
    ? `Saldo anda cukup`
    : `Saldo anda tidak cukup \nSilahkan isi sebelum masa tenggang 1 bulan`;
console.log(cekSaldo);
