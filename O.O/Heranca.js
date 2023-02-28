class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;

    }
    latir = () => {
        console.log("Au Au");
    }
}

let husky = new Cachorro(4, "Husky");

console.log(husky.patas);
