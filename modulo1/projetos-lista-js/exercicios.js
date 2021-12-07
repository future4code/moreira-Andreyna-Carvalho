// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
// EXERCÍCIO 0A
function soma(num1, num2) {
    return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
  // EXERCÍCIO 01
  function calculaAreaRetangulo() {
    a = prompt('Digite o valor da altura')
    l = prompt('Digite o valor da largura')
  
    let num1 = Number(a)
    let num2 = Number(l)
  
    let resultado = num1 * num2
  
    console.log(resultado)
  }
  
  // EXERCÍCIO 02
  function imprimeIdade() {
    a = prompt('Ano atual')
    n = prompt('Ano que você nasceu')
  
    let num1 = Number(a)
    let num2 = Number(n)
  
    let resultado = num1 - num2
  
    console.log(resultado)
  
  }
  
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    return peso / (altura **2)
  
  }
  console.log(calculaIMC())
  
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Qual a sua idade?')
    let email = prompt('Qual o seu email?')
  
    let resultado = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
    console.log(resultado)
  }
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    let cores = []
    let cor = prompt('Qual a sua primeira cor preferida?')
    let color = prompt('Qual a sua segunda cor preferida?')
    let yanse = prompt('Qual a sua terceira cor preferida?')
  
    cores.push(cor)
    cores.push(color)
    cores.push(yanse)
    
    console.log(cores)
  }
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    return string.toUpperCase()
  }
  console.log(retornaStringEmMaiuscula())
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    let SemPreju = custo / valorIngresso
    return SemPreju
  }
  console.log(calculaIngressosEspetaculo())
  
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    let TamanhoOne = string1.length
    let TamanhoTwo = string2.length
  
    let booleano = TamanhoOne == TamanhoTwo
  
    return booleano
  }
  console.log(checaStringsMesmoTamanho())
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    let ElementoOne = array[0]
    return ElementoOne
  }
  console.log(retornaPrimeiroElemento())
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    let Elemento = array.length
    let i = Elemento
    let ElementoUltimo = array[i-1]
    return ElementoUltimo
  }
  console.log(retornaUltimoElemento())
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    let Elemento = array.length
    let i = Elemento
    let j = 0
  
    let ElementoPrimeiro = array[j]
    let ElementoUltimo = array[i-1]
  
    array.shift()
    array.pop()
  
    array.unshift(ElementoUltimo)
    array.push(ElementoPrimeiro)
  
    return array
  
    // removo eles com pop e shif-- ver esse nome
    //.push manda no ultimo 
    // Retiro o primeiro elemento e coloco o novo elemento e o mesmo
    // HELP de Thiago
  }
  console.log(trocaPrimeiroEUltimo())
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    let funcaoOne = string1.toUpperCase()
    let FuncaoTwo = string2.toUpperCase()
  
    let booleano = funcaoOne == FuncaoTwo
    return booleano
  }
  console.log(checaIgualdadeDesconsiderandoCase())
  
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    let ano = prompt('Qual o ano atual?')
    let idade = prompt('Que ano você nasceu?')
    let RG = prompt('Que ano sua Carteira de Identidade foi emitida?')
  
    let Year = Number(ano)
    let YearOne = Number(idade)
    let RG1 = Number(RG)
  
    let Age = Year - YearOne;
    let Renovo =  Year - RG1;
  
    let crianca = Age <= 20 && Renovo >= 5;
    let Jovem = Age <= 50 && Renovo >= 10;
    let Sir = Age > 50 && Renovo >= 15;
  
    let booleano = crianca || Jovem || Sir;
    console.log(booleano)
  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    let booleano = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
    return booleano
  }
  console.log(checaAnoBissexto())
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    let p1 = prompt('Você tem mais de 18 anos?')
    let p2 = prompt('Você possui ensino médio completo?')
    let p3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
    let booleano = p1 == 'sim' && p2 == 'sim' && p3 == 'sim'
  
    console.log(booleano)
  }
  
  // podia refatorar, mas não dará tempo