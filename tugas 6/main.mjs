import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Tambahkan dua data baru
    store({ nama: "Kiki", umur: 22, alamat: "Bogor", email: "kiki@mail.com" });
    store({ nama: "Lala", umur: 25, alamat: "Depok", email: "lala@mail.com" });

    index(); // Tampilkan data

    destroy("Budi"); // Hapus data dengan nama "Budi"

    index(); // Tampilkan data setelah penghapusan
};

main();
