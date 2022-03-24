// ---------- Desafio 08 --------------
function stringDados(dados:string):string {
  return dados.split("").reverse().join("").toLowerCase()
}
console.log(stringDados('Hello'));
