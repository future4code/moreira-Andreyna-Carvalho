// ----------- ATIVIDADE 01 -----------
let bichos = Number(prompt('Quantos bichos de estimação você tem?'))
let array = [];

for (let i = 0; i <= bichos; i++){0
    if (bichos == 0) {
        console.log('Que pena! Mas você pode adotar um pet!')
    }

    else if (bichos >= 1) {
        let name = prompt('Qual do nome do seu pet?')
        array.push(name)
    }
}
console.log(array)

// ----------- ATIVIDADE 02 -----------
let ArrayOriginal = [20,22,38,42,47];

console.log('próxima atividade')
for (let i = 0; i < ArrayOriginal.length; i++){
    console.log(ArrayOriginal[i]);
}

console.log('próxima atividade')
for (let i = 0; i < ArrayOriginal.length; i++){
    let resultado = ArrayOriginal[i] / 10
    console.log(resultado);
}

console.log('próxima atividade')

let pares = [];
for (let i = 0; i < ArrayOriginal.length; i++){    
    if (ArrayOriginal[i] % 2 === 0) {
        pares.push(ArrayOriginal[i])
    }
}
console.log(pares)

console.log('próxima atividade')
let elementos = [];
for (let i = 0; i < ArrayOriginal.length; i++){    
    let resultado = `Os elementos do index ${i} é ${ArrayOriginal[i]}`
    elementos.push(resultado)
}
console.log(elementos)

console.log('próxima atividade')
for (let i = 0; i < ArrayOriginal.length; i++){  
    let ValorMaximo = Math.max(...ArrayOriginal)
    let ValorMinimo = Math.min(...ArrayOriginal)

    // fonte:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max


    let resultado = `O maior número é ${ValorMaximo} e o menor é ${ValorMinimo}`
    console.log(resultado)
}