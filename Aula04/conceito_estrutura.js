//Estrutura Condicionais (tomando decisoes)
//As estruturas condicionais permitem executar diferentes blocos de código dependendo de uma condição.

//if/Else - condicionais
//If - verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de código.

let idade = 12

if (idade >= 18) {
    console.log("voce é maior de idade")
} else {
    console.log("voce é menor de idade");

}

// If,ELSE IF, ELSE (Mutiplas condições)

let idade2 = 10;

if (idade2 < 12) {
    console.log("voce é uma criança");
} else if (idade< 18) {
    console.log("voce é um adolescente");
} else {
    console.log("voce é um adulto");
}