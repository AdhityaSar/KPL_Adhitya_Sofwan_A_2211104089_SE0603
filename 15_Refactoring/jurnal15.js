const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

// File data user
const USERS_FILE = "users.json";

// Membaca data user dari file JSON
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return {};
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}

// Menyimpan data user ke file JSON
function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Hash password dengan SHA256
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi username
function validateUsername(username) {
  if (username.length < 4 || username.length > 20) {
    return "Username harus 4-20 karakter.";
  }
  if (!/^[a-zA-Z]+$/.test(username)) {
    return "Username hanya boleh mengandung huruf alfabet ASCII.";
  }
  return null;
}

// Validasi password
function validatePassword(password, username) {
  if (password.length < 8 || password.length > 20) {
    return "Password harus 8-20 karakter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password harus mengandung setidaknya 1 angka.";
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return "Password harus mengandung setidaknya 1 karakter unik (!@#$%^&*).";
  }
  if (password.toLowerCase().includes(username.toLowerCase())) {
    return "Password tidak boleh mengandung username.";
  }
  return null;
}

// CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi tanya
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Registrasi user
async function register(users) {
  console.log("\n--- Registrasi ---");

  const username = (await ask("Masukkan username: ")).trim();
  const userError = validateUsername(username);
  if (userError) {
    console.log(userError);
    return;
  }

  if (users[username]) {
    console.log("Username sudah terdaftar.");
    return;
  }

  const password = await ask("Masukkan password: ");
  const passError = validatePassword(password, username);
  if (passError) {
    console.log(passError);
    return;
  }

  const hashed = hashPassword(password);
  users[username] = { password: hashed };
  saveUsers(users);
  console.log("Registrasi berhasil.");
}

// Login user
async function login(users) {
  console.log("\n--- Login ---");

  const username = (await ask("Username: ")).trim();
  const password = await ask("Password: ");
  const hashed = hashPassword(password);

  if (users[username] && users[username].password === hashed) {
    console.log("Login berhasil. Selamat datang,", username);
  } else {
    console.log("Username atau password salah.");
  }
}

// Main menu
async function main() {
  const users = loadUsers();
  console.log("=== Aplikasi Login/Register ===");

  while (true) {
    const choice = (await ask("\n1. Register\n2. Login\n3. Keluar\nPilihan: ")).trim();
    if (choice === "1") await register(users);
    else if (choice === "2") await login(users);
    else if (choice === "3") {
      console.log("Sampai jumpa!");
      break;
    } else {
      console.log("Pilihan tidak valid.");
    }
  }

  rl.close();
}

main();