// Array
// Um array é uma lista que pode armazenar vários valores.

let frutas =["maçã", "banana", "uva"];
//let frutas = ["0", "1", "2"]

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

//Podemos adicionar itens!, sem alterar o array diretamente.

frutas.push("laranja");
console.log(frutas[3]);
frutas.pop(); //remove do final (no caso a laranja (ultimo))
console.log(frutas);

//crie um array chamado "animais " e adicione tres animais.
//-exiba o primero e o tltimono console.

let animais = ["cachorro","gato","coelho"];
console.log(animais[0])
console.log(animais[1])
console.log(animais[2])

animais.push("coala");
console.log(animais[3]); // ['cachorro', 'gato' 'coelho' 'coala']