class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    this.displayState();
  }

  displayState() {
    if (this.state === "Terkunci") {
      console.log("Pintu terkunci");
    } else if (this.state === "Terbuka") {
      console.log("Pintu tidak terkunci");
    }
  }

  bukaPintu() {
    if (this.state === "Terkunci") {
      console.log("Tidak bisa membuka pintu karena terkunci");
    } else {
      this.state = "Terbuka";
      this.displayState();
    }
  }

  kunciPintu() {
    if (this.state === "Terbuka") {
      this.state = "Terkunci";
      this.displayState();
    } else {
      console.log("Pintu sudah terkunci");
    }
  }
}

// Simulasi perubahan state
const pintu = new DoorMachine();
pintu.bukaPintu(); // Tidak bisa membuka pintu karena terkunci
pintu.kunciPintu(); // Pintu sudah terkunci
pintu.state = "Terbuka"; // Secara manual membuka kunci untuk demonstrasi
pintu.displayState(); // Pintu tidak terkunci
pintu.kunciPintu(); // Pintu terkunci
