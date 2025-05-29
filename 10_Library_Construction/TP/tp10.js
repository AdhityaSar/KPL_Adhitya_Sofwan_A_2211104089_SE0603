const Aljabar = require('./aljabarlibraries');

// Contoh pemanggilan fungsi AkarPersamaanKuadrat
const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar Persamaan Kuadrat:", akar); // Output: [5, -2]

// Contoh pemanggilan fungsi HasilKuadrat
const hasilKuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log("Hasil Kuadrat dari Persamaan Linear:", hasilKuadrat); // Output: [4, -12, 9]
