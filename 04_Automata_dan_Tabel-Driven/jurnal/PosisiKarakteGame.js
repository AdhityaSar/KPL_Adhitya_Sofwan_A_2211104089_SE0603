class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    ubahState(stateBaru) {
        let nim = 2211104089;
        
        if (nim % 3 === 1) {
            if (stateBaru === "Berdiri") console.log("posisi standby");
            if (stateBaru === "Tengkurap") console.log("posisi istirahat");
        }

        if (nim % 3 === 2) {
            if (this.state === "Terbang" && stateBaru === "Jongkok") console.log("posisi landing");
            if (this.state === "Berdiri" && stateBaru === "Terbang") console.log("posisi take off");
        }

        this.state = stateBaru;
    }

    tekanTombolS() {
        let nim = 2211104089;
        if (nim % 3 === 0) console.log("tombol arah bawah ditekan");
        
        if (this.state === "Berdiri") this.ubahState("Jongkok");
        else if (this.state === "Jongkok") this.ubahState("Tengkurap");
    }

    tekanTombolW() {
        let nim = 2211104089;
        if (nim % 3 === 0) console.log("tombol arah atas ditekan");
        
        if (this.state === "Jongkok") this.ubahState("Berdiri");
        else if (this.state === "Berdiri") this.ubahState("Terbang");
    }

    tekanTombolX() {
        if (this.state === "Tengkurap") this.ubahState("Jongkok");
    }
}

// Simulasi perubahan state
const karakter = new PosisiKarakterGame();
console.log(`State awal: ${karakter.state}`);
karakter.tekanTombolS();
karakter.tekanTombolW();
karakter.tekanTombolS();
karakter.tekanTombolX();