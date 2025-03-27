class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

const halo = new HaloGeneric();
halo.SapaUser("Adhitya");

class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const nim = "2211104089";
const dataGeneric = new DataGeneric(nim);
dataGeneric.PrintData();