/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem-vindo(a) ao jogo de blackjack vulgo 21');

// Sorteia duas cartas para cada usuário
const user1 = comprarCarta(); 
const user2 = comprarCarta(); 
const maquina1 = comprarCarta(); 
const maquina2 = comprarCarta(); 


if(confirm('Quer iniciar o jogo completo?')) {
   if (user2.texto == 'A' && user1.texto == 'A' || maquina1.texto == 'A' && maquina2.texto == 'A'){
      confirm('gostaria de reniciar o jogo?')
   }

   // Faz as somas do valor das cartas
   const somaUser = user1.valor + user2.valor
   const somaMaquina = maquina1.valor + maquina2.valor

   // Iforma os naipes + numeros das cartas e a soma delas

   confirm(`Sua primeira carta é ${user1.texto} e a do computador é ${maquina1.texto},
    gostaria de comprar mais uma? `)
   confirm(`Sua segunda carta é ${user2.texto} e a do computador é ${maquina2.texto}`)

   confirm(`A soma das suas cartas dão ${somaUser} e do computador ${somaMaquina} `)

   // condição de vencedor
   if (somaMaquina > somaUser){
      console.log('O computador ganhou!')
      confirm('O computador ganhou!')

   }
   else if (somaUser > somaMaquina){
      console.log('Você ganhou!')
      confirm('Você ganhou!')
   }
   else if (somaMaquina == somaUser){
      confirm('Empate!')
      console.log('Empate!')
   }
  
} else {
   console.log('O jogo acabou');
}

// Sorry, ainda ficou muito do desafio a se fazer ;(
