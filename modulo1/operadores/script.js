// ------ ATIVIDADE 1 --------
let idade = prompt('Qual a sua idade?');
let idadeAmigo = prompt('Qual a idade do seu amigo?');
let ComparacaoIdade = idade > idadeAmigo;

console.log('Sua idade é maior do que a do seu melhor amigo?', ComparacaoIdade);

// ------ ATIVIDADE 2 --------
let NumberPar = prompt('Insira um número par');
let StringNumber = Number(NumberPar);

let resultado = StringNumber % 2;
console.log(resultado)
// Percebi que ele me mostrou o resto da divisão ex. 2 % 2 = 0: 
// O resto é 1, pois todo número impar divido por 2 resta 1;

// ------ ATIVIDADE 3 --------
let IdadeUser = prompt('Qual a sua idade?');
let IdadeNumber = Number(IdadeUser);

let IdadeMeses = IdadeNumber * 12;
let IdadeDias = IdadeNumber * 365;
let IdadeHoras = IdadeNumber * (365 * 24);

console.log('Sua idade em meses seria: ', IdadeMeses, '. Sua idade em dias seria: ', IdadeDias, '. Sua idade em horas seria: ', IdadeHoras)

// ------ ATIVIDADE 4 --------
let NumberOne = prompt("Escolhe o primeiro valor")
let NumberTwo = prompt("Escolha o segundo valor")

let Number1 = Number(NumberOne);
let Number2 = Number(NumberTwo)

soma = Number1 > Number2;
igualdade = (Number1 == Number2);
divisao1 = Number1 % Number2 == 0;
divisao2 = Number2 % Number1 == 0;

console.log("O primeiro numero é maior que segundo?", soma,
    "O primeiro numero é igual ao segundo?", igualdade, 
    "O primeiro numero é divisível pelo segundo?", divisao1,
    "O segundo numero é divisível pelo primeiro?", divisao2)

// ------ Desafio --------
// Queimou meus neurônios, vou fazer depois que compreender melhor <3
