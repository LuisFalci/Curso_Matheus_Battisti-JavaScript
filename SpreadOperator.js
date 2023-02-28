// Exemplo 1: spread operator em arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// Exemplo 2: spread operator em objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const novoObjeto = { ...objeto1, ...objeto2 };
console.log(novoObjeto); // Output: { a: 1, b: 2, c: 3, d: 4 }