const person = {
    name: 'Maria',
    age: 30,
    location: 'São Paulo'
  };
  
// fazemos o destructuring aqui para extrair os dados name e age (dentro de chaves) de person 
  const { name, age } = person;
  
  console.log(name); // Output: "Maria"
  console.log(age); // Output: 30