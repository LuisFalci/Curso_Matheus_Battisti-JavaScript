function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = () => {
        console.log("Au Au");
    }
}

let husky = new Cachorro("Husky", 4, "cinza");
console.log(husky);
husky.latir();