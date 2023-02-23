let pessoa = {
    nome: "Luis",
    idade: 12,
    profissao: "programador",
}

console.log(pessoa.nome);

// deletando propriedade
delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

// adicionando nova propriedade
pessoa.casado = false;

console.log(pessoa.casado);
