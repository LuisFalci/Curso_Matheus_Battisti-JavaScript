let cachorro = {
    patas: 4,
    raca: "",
    latir: () => {
        console.log("au au");
    }
}

// um novo objeto criado a partir da nossa classe cachorro
let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = ("Pastor Alemão");
console.log(pastorAlemao);