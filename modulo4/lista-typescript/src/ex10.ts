// ------- Exercício 10 -----------
import { validate } from 'gerador-validador-cpf'

function cpfNumber(dados:string){
  const verifica = validate(dados)

  return verifica
}
console.log(cpfNumber('697.969.580-07')); //Peguei de um gerador é meu CPF naum em

//https://tiagoporto.github.io/gerador-validador-cpf 

//Se ligaaa o cara que criou esse validator e gerador tem teu nome rapazzzz