function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

// Desta forma separamos o método do construtor
Cachorro.prototype.latir = () => {
    console.log("Au Au");
}

Cachorro.prototype.uivar = () => {
    console.log("UUUUUUUU");
}

let husky = new Cachorro("Husky", 4, "cinza");
console.log(husky);
husky.latir();
husky.uivar();