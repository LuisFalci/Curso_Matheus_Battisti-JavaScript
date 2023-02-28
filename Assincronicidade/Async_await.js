function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a+b);
    }, 4000);
  })
}

// as async functions retornam uma promise
// O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
async function resSoma(a,b,c) {

  let x = somaComDelay(a,b);
  let y = c;

  // o await é utilizado para esperar por uma Promise e só pode ser utilizado em uma função assíncrona
  return await x + y;

}

resSoma(1,2,3).then(value => console.log(value));