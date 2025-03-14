class KodeBuah {
    constructor() {
        this.tabelKodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "H00",
            "Kelapa": "I00",
            "Jagung": "J00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.tabelKodeBuah[namaBuah] || "Kode tidak ditemukan";
    }
}

// Contoh penggunaan
const kodeBuah = new KodeBuah();
console.log(kodeBuah.getKodeBuah("Apel")); // Output: A00
console.log(kodeBuah.getKodeBuah("Durian")); // Output: L00
console.log(kodeBuah.getKodeBuah("Mangga")); // Output: Kode tidak ditemukan