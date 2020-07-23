let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]

let beras = barang[0].harga * barang[0].jumlah
let gula = barang[1].harga * barang[1].jumlah
let telur = barang[2].harga * barang[2].jumlah
let minyak = barang[3].harga * barang[3].jumlah

let total = beras + gula + telur + minyak

console.log("Total belanja yang harus dibayarkan Bu Astuti adalah " + total);