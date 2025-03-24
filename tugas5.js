
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Mouse", harga: 300000 },
    { id: 5, nama: "Keyboard", harga: 500000 }
];


const eventHandler = {

    tambahProduk: function (id, nama, harga) {
        produkList = [...produkList, { id, nama, harga }];
        console.log(`Produk ${nama} berhasil ditambahkan.`);
    },


    hapusProduk: function (...idProduk) {
        produkList = produkList.filter(produk => !idProduk.includes(produk.id));
        console.log(`Produk dengan ID ${idProduk} berhasil dihapus.`);
    },


    tampilkanProduk: function () {
        console.log("Daftar Produk Saat Ini:");
        produkList.forEach(({ id, nama, harga }) => {
            console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
        });
    }
};


eventHandler.tampilkanProduk();
eventHandler.tambahProduk(6, "Monitor", 2000000);
eventHandler.tampilkanProduk();
eventHandler.hapusProduk(2, 4);
eventHandler.tampilkanProduk(); 