let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

// podemos definir propriedades de um objeto em variáveis   
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);