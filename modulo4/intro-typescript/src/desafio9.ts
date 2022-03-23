// ---------- Desafio 09 --------------
function souLabenu(idade:number, escola:string, horas:number, escolha:string):string{
  if(idade > 18 && escola === 'sim' && horas >= 40){
    return `Sua inscrição é válida`
  }
  else {
    return `Sua inscrição não é válida`
  }
}
console.log(souLabenu(20, 'sim', 40, 'integral'));
