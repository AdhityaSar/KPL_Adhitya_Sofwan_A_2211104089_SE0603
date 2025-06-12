class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }

    // Inisialisasi list kosong
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  // Static method untuk mendapatkan instance Singleton
  static GetDataSingleton() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  // Mengembalikan semua data dalam list
  GetSemuaData() {
    return this.DataTersimpan;
  }

  // Mencetak semua data ke konsol
  PrintSemuaData() {
    if (this.DataTersimpan.length === 0) {
      console.log("Tidak ada data yang tersimpan.");
    } else {
      this.DataTersimpan.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }
  }

  // Menambahkan data baru ke dalam list
  AddSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  // Menghapus data berdasarkan index
  HapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid!");
    }
  }
}


// Simulasi di main
function main() {
  // A. Buat dua variabel data1 dan data2
  const data1 = PusatDataSingleton.GetDataSingleton();
  const data2 = PusatDataSingleton.GetDataSingleton();

  // B. Tambah data anggota kelompok dan asisten praktikum
  data1.AddSebuahData("adit");
  data1.AddSebuahData("rosid");
  data1.AddSebuahData("apip");
  data1.AddSebuahData("kholil");
  data1.AddSebuahData("fariz");
  data1.AddSebuahData("evan (asisten praktikum)");

  // C. Print data dari data2
  console.log("Data dari data2 sebelum penghapusan:");
  data2.PrintSemuaData();

  // D. Hapus nama asisten praktikum dari data2
  const indexAsisten = data2.GetSemuaData().indexOf("evan (asisten praktikum)");
  data2.HapusSebuahData(indexAsisten);

  // E. Print ulang dari data1 untuk memastikan asisten terhapus
  console.log("\nData dari data1 setelah penghapusan asisten:");
  data1.PrintSemuaData();

  // F. Print jumlah data pada data1 dan data2
  console.log(`\nJumlah data pada data1: ${data1.GetSemuaData().length}`);
  console.log(`Jumlah data pada data2: ${data2.GetSemuaData().length}`);
}

// Jalankan fungsi main
main();