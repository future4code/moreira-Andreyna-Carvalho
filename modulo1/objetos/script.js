// ----------- Atividade 01 ------------------
const ObjetoName = {
    nome: 'Andreyna',
    apelidos: ['Drica', 'malinha', 'Dreyna']
}

function RecebeObjeto(ObjetoName){
    let Apresentacao = `Eu sou ${ObjetoName.nome}, mas pode me chamar de ${ObjetoName.apelidos[0]}, ${ObjetoName.apelidos[1]}, ou ${ObjetoName.apelidos[2]}`
    return Apresentacao
}
console.log(RecebeObjeto(ObjetoName))

const MudarApelido = {
    ...ObjetoName,
    apelidos: ['Andrey', 'Andryca', 'DehDeh']
}
console.log(RecebeObjeto(MudarApelido))

// ----------- Atividade 02 ------------------
const pessoaUm = {
    nome: 'Andreyna',
    idade: 20,
    profissao: 'estudante'
}

const peopleOne = {
    name: 'Drica',
    age: 21,
    job: 'desenvolvedora'
}

function Person(pessoaUm, peopleOne){
    let array = [];

    let nome = pessoaUm.nome.length;
    let name = peopleOne.name.length;

    let profissao = pessoaUm.profissao.length;
    let job = peopleOne.job.length;

    let resultadoUm = `${pessoaUm.nome}, possui ${nome} elementos, ${pessoaUm.idade} anos, ${pessoaUm.profissao}, possui ${profissao} elementos. `
    let resultadoOne = `${peopleOne.name}, have ${name} elements, ${peopleOne.age} years, ${peopleOne.job}, have ${job} elements. `
    
    array.push(resultadoUm)
    array.push(resultadoOne)

    return array
}
console.log(Person(pessoaUm, peopleOne))

// ----------- Atividade 03 ------------------
let carrinho = [];

const sacolaoFrutas = {
    nome: "Laranja", disponivel: true,
    nome1: "Mirtilo", disponivel1: true,
    nome2: "Abacaxi", disponivel2: true
}

function Verfica(sacolaoFrutas){
    let array = `${sacolaoFrutas.nome} está disponível? - ${sacolaoFrutas.disponivel}`
    let array1 = `${sacolaoFrutas.nome1} está disponível? - ${sacolaoFrutas.disponivel1}`
    let array2 = `${sacolaoFrutas.nome2} está disponível? - ${sacolaoFrutas.disponivel2}`

    carrinho.push(array, array1, array2)
    return carrinho
}
console.log(Verfica(sacolaoFrutas))
// Como que faz para aparecer que são objetos?

// ----------- Desafio  ------------------
// em construção