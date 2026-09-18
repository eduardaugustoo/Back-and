//Tipos de dados 
//no javascript, tudo o que armazenamos em variáveis tem um tipo. esses tipos definem o que podemos fazer com os valores.

//Principais tipos de dados:
//string (texto)
//number (número)
//boolean (verdadeiro ou falso)
//object (objetos que agrupam informações)
//Array (lista de valores)
//null (valor vazio)
//undefined (quando algo não foi definido)

let nome = "jarvis";
let mensagem = 'Ola, mundo'

console.log (nome);
console.log(mensagem);

let saudacao = "ola,"  + nome + "!";
console.log (saudacao); //Exibe "ola, jarvis"

//typeof 
// O Typeof serve parra descobrir um tipo de um valor ou variavel

let nomeDois  = "2";
console.log(typeof nomeDois);

let soma = 10+ 5;
console.log(soma);


//boolean (verdadeiro ou falso)
//Um boolean pode ter apenas dois valores: true (verdadeiro) ou false(falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); //exibe true
console.log(menorDeIdade); //exibe false
let idade = 16;
let podeDirigir = idade >=18;
console.log(podeDirigir)


