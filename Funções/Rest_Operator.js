let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

// o rest operator representado pelos 3 pontos, permite a passagem ilimitada 
// de parâmetros sem precisar defini-los na função
function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num,num1,num2);
console.log('pausa');
imprimirNumeros(num2,num3);
console.log('pausa');
imprimirNumeros(2,6,7,8,9,5,3,2,5,6,2,4,5);