// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function ordem(a,b){ // crio uma função de comparador
  return (a-b) // faço com que o array seja ordenado
}
function retornaArrayOrdenado(array) {
  return array.sort(ordem) // retorno a ordem desejada no sort
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = []
  for (let i = 0; i <= array.length; i++){
    if (array[i] % 2 == 0){
      pares.push(array[i])
    }
  }
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let pares = []
  for (let i = 0; i <= array.length; i++){
    if (array[i] % 2 == 0){
      pares.push(array[i]**2)
    }
  }
  return pares 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let MaiorValor = 0
  for (let item of array) {
    if (item > MaiorValor){
      MaiorValor = item // Ele vai verificando um por um e substituindo até achar o maior valor do array.
    }
  }
  return MaiorValor
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let MenorNumber = Math.min(num1, num2) // vai me retornar o menor numero de um array
  let MaiorNumber = Math.max(num1, num2) // vai me retornar o maior numero
  let Divisivel = MaiorNumber % MenorNumber == 0
  let ContaMenos = Math.abs(num1 - num2) // Não importa qual é o maior, voltará sempre positivo

  const objeto = {
  maiorNumero: MaiorNumber,
  maiorDivisivelPorMenor: Divisivel,
  diferenca: ContaMenos
  }

  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let pares = []
  for (let i = 0; i < n ; i++){
      pares.push(i*2)
  }
  return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) { 
// se todos os lados forem iguais é equilatero
// dois lados iguais, isoceles
// nenhum lado igual escaleno

  if (ladoA == ladoB && ladoA == ladoC) {
    return 'Equilátero'
  }
  if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    return 'Isósceles'
  }
  if (ladoA != ladoB || ladoA != ladoC || ladoC != ladoB) {
    return 'Escaleno'
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let ordenado = array.sort(ordem) // coloco o elemento em ordem
  let SegundoMenor = ordenado[1] // pego o segundo menor valor
  let SegundoMaior = array[array.length-2] // pego o penultimo elemento, sendo o segundo maior valor

  return [SegundoMaior, SegundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const catalogo = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  } 

    let resultado = `Venha assistir ao filme ${catalogo.nome}, de ${catalogo.ano}, dirigido por ${catalogo.diretor} e estrelado por ${catalogo.atores[0]}, ${catalogo.atores[1]}, ${catalogo.atores[2]}, ${catalogo.atores[3]}.`
  
    return resultado 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const objeto = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const teste = (pessoas) => {
    return pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5
  }
  const resultado = pessoas.filter(teste)
  return resultado
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const teste = (pessoas) => {
      return pessoas.idade <= 14 || pessoas.idade >= 60 || pessoas.altura < 1.5
    }
    const resultado = pessoas.filter(teste)
    return resultado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
// código feito com ajuda 80% da Fe no Plantão de dúvidas
  contas.forEach((contasCliente) => {
    let total = 0;
    contasCliente.compras.forEach((gasto) => {
      total += gasto 
    })

    contasCliente.saldoTotal -= total
    contasCliente.compras = [];
  });

  return contas
}

// EXERCÍCIO 15A
// Condição de comparação de letras (help do tio Google)
function alfabeto(a,b){ // crio uma função de comparador
  if (a.nome < b.nome) {
    return -1
  } else {
    return true
  } // faço com que o objeto nome seja ordenado
}
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort(alfabeto) 
}

// EXERCÍCIO 15B

function data(a,b) {
  return b.dataDaConsulta > a.dataDaConsulta
}
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort(data)
}
// Não consegui, até o presente momento.