// ----- Atividade 1 -------
let Name = prompt('Your name');
let Age = prompt('You age');

console.log(typeof Name, typeof Age);

// ----------- RESPOSTA -------------
// Porque o prompt sempre retorna em string, notei que retornou o tipo usado.

// Para finalizar, imprima na tela a mensagem: 
let Nome = prompt('Seu nome');
let Idade = prompt('Sua idade');

let ResultadoDaPesquisa = 'Olá ' + Name + ', você tem ' + Age + ' anos.'

console.log(ResultadoDaPesquisa);

// ----- Atividade 2 -------
let PerguntaUm = prompt('Hoje é Segunda?');
let PerguntaDois = prompt('Já bebeu água hoje?');
let PerguntaTres = prompt('Já tomou banho?')

console.log('Hoje é Segunda? - ', PerguntaUm);
console.log('Já bebeu água hoje? - ', PerguntaDois)
console.log('Já tomou banho? - ', PerguntaTres)

// ----- Atividade 3 -------
let a = 10;
let b = 25;

a = b;
b = a / 2.5;

console.log('O novo valor de a é', a);
console.log('O novo valor de b é', b);

// ----- Desafio -------
let NumeroString1 = prompt('Escolhe o primeiro número');
let NumeroString2 = prompt('Escolha o segundo número');

let Number1 = Number(NumeroString1);
let Number2 = Number(NumeroString2);

let x = (Number1 + Number2);
let y = (Number1 * Number2);

console.log(x, y);
