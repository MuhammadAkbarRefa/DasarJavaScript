let nama = ['Ana','Sulaiman','Putri','Gatot','Adit','Gico']

console.log("Data array")
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);

console.log("--------------------------------------------");
//Menghapus data
nama.splice(2,1) //2 merupakan start indeks yg dihapus
                 //1 merupakan jumlah data yg dihapus

console.log("Data array");
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);