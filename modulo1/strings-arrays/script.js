// ----- Atividade 1 -------
let Usuario = prompt('Qual o seu nome?')
let Email = prompt('Qual o seu email?')

let resultado = "O e-mail " + Email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + Usuario + "!";

console.log(resultado)

// ----- Atividade 2 -------
let Food = ['Japonesa', 'Pizza', 'Dogão de rua', 'Baião de dois', 'Tutu de feijão com ovo']
console.log(Food)
console.log('Essas são minhas comidas preferidas: ')
console.log(Food[0])
console.log(Food[1])
console.log(Food[2])
console.log(Food[3])
console.log(Food[4])
// Creio que tinha uma forma mais facil, porém não lembro, se tu viu isso e puder ajudar.

let Question = prompt('Qual sua comida preferida?')
let i = 1;
Food[i] = Question;
console.log(Food)

// ----- Atividade 3 -------
let ListaDeTarefas = [];
let Tarefa1 = prompt('Qual sua primeira tarefa do dia?')
let Tarefa2 = prompt('Qual a sua segunda tarefa do dia?')
let Tarefa3 = prompt('Qual a sua terceira tarefa do dia?')

ListaDeTarefas.push(Tarefa1,Tarefa2,Tarefa3);
console.log(ListaDeTarefas)

let Concluida = prompt('Qual atividade tu já fez 0, 1 ou 2?')
let numero = Number(Concluida)

ListaDeTarefas.splice(numero);
console.log(ListaDeTarefas)
