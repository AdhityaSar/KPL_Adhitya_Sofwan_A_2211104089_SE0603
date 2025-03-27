class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      let hasil = a + b + c;
      return hasil;
    }
  }
  
  // NIM: 2211104089
  // Tiga input angka: 22, 11, 10
  // NIM berakhiran 9 -> tipe data long
  
  const angka1 = 22;
  const angka2 = 11;
  const angka3 = 10;
  
  const penjumlahan = new Penjumlahan();
  const hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
  
  console.log(`Hasil penjumlahan: ${hasil}`);

  class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

const database = new SimpleDataBase();

database.AddNewData(22);
database.AddNewData(11);
database.AddNewData(10);
database.PrintAllData();