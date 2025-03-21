// Class untuk kendaraan
class Kendaraan {
    constructor(jenis, merk, platNomor) {
        this.jenis = jenis;
        this.merk = merk;
        this.platNomor = platNomor;
    }
}

// Class untuk pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    // Metode untuk menyewa kendaraan
    sewaKendaraan(kendaraan) {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} sudah menyewa kendaraan dan harus mengembalikannya terlebih dahulu.`);
        } else {
            this.kendaraanDisewa = kendaraan;
            console.log(`${this.nama} telah menyewa kendaraan ${kendaraan.jenis} (${kendaraan.merk}, ${kendaraan.platNomor}).`);
        }
    }

    // Metode untuk mengembalikan kendaraan
    kembalikanKendaraan() {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} telah mengembalikan kendaraan ${this.kendaraanDisewa.jenis} (${this.kendaraanDisewa.merk}, ${this.kendaraanDisewa.platNomor}).`);
            this.kendaraanDisewa = null;
        } else {
            console.log(`${this.nama} tidak memiliki kendaraan yang disewa.`);
        }
    }
}

// Class untuk sistem manajemen transportasi
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("Daftar pelanggan yang sedang menyewa kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`- ${pelanggan.nama} (${pelanggan.nomorTelepon}) menyewa ${pelanggan.kendaraanDisewa.jenis} (${pelanggan.kendaraanDisewa.merk}, ${pelanggan.kendaraanDisewa.platNomor}).`);
            }
        });
    }
}

// Contoh penggunaan
let sistem = new SistemManajemenTransportasi();
let pelanggan1 = new Pelanggan("Budi", "08123456789");
let pelanggan2 = new Pelanggan("Siti", "08987654321");

let mobil = new Kendaraan("Mobil", "Toyota Avanza", "B 1234 ABC");
let motor = new Kendaraan("Motor", "Honda Vario", "D 5678 XYZ");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

pelanggan1.sewaKendaraan(mobil);
pelanggan2.sewaKendaraan(motor);

sistem.tampilkanPelangganMenyewa();