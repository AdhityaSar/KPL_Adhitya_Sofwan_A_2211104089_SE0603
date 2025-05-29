const Matematika = require('./matematikalibraries');

console.log("Matematika Libraries Console Application");

console.log("\n1. FPB dari 60 dan 45:");
console.log("Hasil:", Matematika.FPB(60, 45));  // Output: 15

console.log("\n2. KPK dari 12 dan 8:");
console.log("Hasil:", Matematika.KPK(12, 8));  // Output: 24

console.log("\n3. Turunan dari x^3 + 4x^2 -12x + 9:");
console.log("Input: [1, 4, -12, 9]");
console.log("Turunan:", Matematika.Turunan([1, 4, -12, 9]));  // Output: 3x2 + 8x -12

console.log("\n4. Integral dari 4x^3 + 6x^2 -12x + 9:");
console.log("Input: [4, 6, -12, 9]");
console.log("Integral:", Matematika.Integral([4, 6, -12, 9]));  // Output: x4 + 2x3 - 6x2 + 9x + C