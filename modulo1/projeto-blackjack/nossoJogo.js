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

if(confirm('Quer iniciar o jogo?')) {
   // Sorteia duas cartas para cada usuário
   const user1 = comprarCarta(); 
   const user2 = comprarCarta(); 
   const maquina1 = comprarCarta(); 
   const maquina2 = comprarCarta(); 

   // Faz as somas do valor das cartas
   const somaUser = user1.valor + user2.valor
   const somaMaquina = maquina1.valor + maquina2.valor

   // Iforma os naipes + numeros das cartas e a soma delas
   console.log(`Usuário: cartas: ${user1.texto} e ${user2.texto} -- pontuação ${somaUser} `);
   console.log(`Computador: cartas: ${maquina1.texto} e ${maquina2.texto} -- pontuação ${somaMaquina} `);

   // condição de vencedor
   if (somaMaquina > somaUser){
      console.log('O computador ganhou!')
   }
   else if (somaUser > somaMaquina){
      console.log('O usuário ganhou!')
   }
   else if (somaMaquina == somaUser){
      console.log('Empate!')
   }
  
} else {
	console.log('O jogo acabou');
}
