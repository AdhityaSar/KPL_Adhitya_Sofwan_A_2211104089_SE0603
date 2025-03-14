class KodePos {
    // Objek untuk menyimpan data kode pos
    static kodePosDict = {
        "Batununggal": "40266",
        "Kujangsari": "40287",
        "Mengger": "40267",
        "Wates": "40256",
        "Cijaura": "40287",
        "Jatisari": "40286",
        "Margasari": "40286",
        "Sekejati": "40286",
        "Kebonwaru": "40272",
        "Maleer": "40274",
        "Samoja": "40273"
    };

    // Method untuk mendapatkan kode pos berdasarkan nama kelurahan
    static getKodePos(kelurahan) {
        return this.kodePosDict[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Fungsi utama untuk menjalankan program
function main() {
    let kelurahan = "Batununggal";
    console.log(`Kode Pos ${kelurahan}: ${KodePos.getKodePos(kelurahan)}`);

    kelurahan = "Sekejati";
    console.log(`Kode Pos ${kelurahan}: ${KodePos.getKodePos(kelurahan)}`);

    kelurahan = "Kebonwaru";
    console.log(`Kode Pos ${kelurahan}: ${KodePos.getKodePos(kelurahan)}`);
}

// Panggil fungsi utama
main();