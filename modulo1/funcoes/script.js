// ----- Atividade 01 --------- 
let nome = 'Andreyna';
let idade = 20;
let cidade = 'Floripa';
let profissao = 'estudante';

function InfoWithMe() {
    return 'Eu sou ' + nome + ', tenho ' + idade + ' anos' + ', moro em ' + cidade + ' e sou ' + profissao + '.';
}
console.log(InfoWithMe())

function MinhasInfo(p1, p2, p3, p4) { //p de parametros
    p1 = nome;
    p2 = idade;
    p3 = cidade;
    p4 = profissao;
    let resultado = 'Eu sou ' + p1 + ', tenho ' + p2 + ' anos, moro em ' + p3 + ' e sou ' + p4 + '.';

    return resultado
}
console.log(MinhasInfo());

// ----- Atividade 02 --------- 
function numbers(a,b) {
    return a + b;
}
console.log(numbers(2,3))

function numbersTwo(a,b) {
    return a >= b
}
console.log(numbersTwo(2,2))

function NumberPar(par) {
    return par % 2 == 0
}
console.log(NumberPar(2))

function mensagem(string) {
    return string.toUpperCase();
}
console.log(mensagem('Eu estou com fome'))
console.log(mensagem('Eu estou com fome').length)

// ----- Atividade 03 --------- 
function QuatroOperacoes(a,b) {
    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b; 

    let resultado = `Números inseridos: ${a} e ${b}
    Soma: ${soma}
    Diferença ${sub}
    Multiplicação: ${mult}
    Divisão ${div}`
    return resultado    
}
console.log(QuatroOperacoes(2,5))

// ----- Desafio 2 ---------
function Pitagoras(cat1, cat2) {
    let ContaCat1 = cat1 ** 2;
    let ContaCat2 = cat2 ** 2;

    let resultadoUm = ContaCat1 + ContaCat2;
    let hipotenusa = resultadoUm ** (1/2);
   
    return hipotenusa
}
console.log(Pitagoras(3,4))

// ----- Desafio 1 ---------
const ArrowFunctionTwo = (a,b) => {
    soma = a + b;
}
console.log(ArrowFunctionTwo(2,5));

const ArrowFunction = (UmParametro) => {
    return UmParametro
}
console.log(ArrowFunction(soma));
