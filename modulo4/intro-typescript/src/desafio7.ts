// ---------- Desafio 07 --------------
function verificaDna(infoDna:string):string[] {
  let dados = infoDna.toLowerCase();
  let newInformation = []

  for (let i = 0; i <= dados.length; i++){
    if(dados[i] === 'a'){
      newInformation.push('u')
    }
    if(dados[i] === 't'){
      newInformation.push('a')
    }
    if(dados[i] === 'g'){
      newInformation.push('c')
    }
    if(dados[i] === 'c'){
      newInformation.push('g')
    }
  }
  return newInformation
 }
console.log(verificaDna('abcde'));