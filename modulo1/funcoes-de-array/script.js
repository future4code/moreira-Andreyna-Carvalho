// ------ Atividade 01 ------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

console.log('Atividade 01- A')
const NomeDog = (item) => {
    return item.nome
}
let FilterNomes = pets.map(NomeDog)
console.log(FilterNomes)

console.log('Atividade 01- B')
const Salsicha = (item) => {
    return item.raca == 'Salsicha'
}
const Filter = pets.filter(Salsicha)
console.log(Filter)

console.log('Atividade 01- C')
const Poodle = (item) => {
    if (item.raca == 'Poodle'){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
}
const Pudow = pets.map(Poodle)

console.log('Atividade 02- A')

// ------ Atividade 02 ------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
const Name = (item) => {
    return item.nome
}
let FiltrarNomes = produtos.map(Name)
console.log(FiltrarNomes)

console.log('Atividade 02- b')

function desconto(number) {
    return number.preco * (95/100)
}
const Desc = produtos.map(desconto) 
console.log(Desc)

console.log('Atividade 02- C')

const bebidas = (item) => {
    return item.categoria == 'Bebidas'
}
let FiltrarBebidas = produtos.filter(bebidas)
console.log(FiltrarBebidas)

console.log('Atividade 02- D')

const Ype = (item) => {
    return item.nome.includes('Ypê')
}

const Includes = produtos.filter(Ype)
console.log(Includes)


console.log('Atividade 02- E')

const imprimir = (item) => {
    if (item.nome.includes('Ypê')){
        console.log(`Compre ${item.nome} por ${item.preco} `)
    }        
}
const Teste = produtos.map(imprimir)

