// Destructuring Array

const numbers = [1, 2, 3, 4, 5];
const [pertama, kedua, ...sisanya] = numbers;

console.log(pertama); // 1
console.log(kedua); // 2
console.log(sisanya); // [3, 4, 5]

// Destructuring Object

const orang = { nama: "John", umur: 30, lokasi: "New York" };
const { nama, umur } = orang;

console.log(nama); // John
console.log(umur); // 30

// Destructuring di Function Parameter

function cetakNama({ nama }) {
  console.log(`Nama: ${nama}`);
}

const orang1 = { nama: "Alice", umur: 25 };
cetakNama(orang1); // Output: Nama: Alice

// Default Value dan Alias

const { judul = "Tidak Ada Judul", pengarang: penulis } = buku;

console.log(judul);
console.log(penulis);

// Latihan data daftar siswa   ================================================

const siswa = [
  { id: 1, nama: "Alice", umur: 20 },
  { id: 2, nama: "Bob", umur: 22 },
  { id: 3, nama: "Charlie", umur: 21 },
];

// Destructuring array of objects
for (const { id, nama, umur } of siswa) {
  console.log(`ID: ${id}, Nama: ${nama}, Umur: ${umur}`);
}

const produk = { idProduk: 123, namaProduk: "Laptop", harga: 1000 };

// Destructuring object properties
const { idProduk, namaProduk, harga } = produk;
console.log(`ID Produk: ${idProduk}, Nama: ${namaProduk}, Harga: ${harga}`);
