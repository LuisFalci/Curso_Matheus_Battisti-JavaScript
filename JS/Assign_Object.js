let pessoa = {
    nome: "Luis",
    idade: 12,
    profissao: "programador",
}

let status = {
    vivo: true,
}

console.log(pessoa);

// Copia as propriedades do segundo objeto e adiciona ao primeiro
Object.assign(pessoa, status);

console.log(pessoa);
