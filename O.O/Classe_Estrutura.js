class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    latir = () => {
        console.log("Au Au");
    }

    uivar = () => {
        console.log("UUUUUUUU");
    }
    getRaca = () => {
        return this.raca;
    }
    setRaca = (raca) => {
        this.raca = raca;
    }
}


let husky = new Cachorro("Husky", 4, "cinza");
console.log(husky);
husky.latir();
husky.uivar();
console.log(husky.getRaca());
husky.setRaca("Pastor Belga")
console.log(husky.getRaca());