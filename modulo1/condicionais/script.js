// --------- Atividade 01 -------------
let idade = Number(prompt('Qual a sua idade?'))
if (idade >= 18) {
    console.log('Você pode dirigir')
}
else {
    console.log('você não pode dirigir')
}

// --------- Atividade 02 -------------
let turno = prompt('Que turno do dia você estuda - m, v ou n?').toLowerCase()
if (turno == 'm') {
    console.log('Bom Dia!')
}
else if (turno == 'v') {
    console.log('Boa Tarde!')
}
else if (turno == 'n') {
    console.log('Boa Noite!')
}
else {
    console.log('Esse turno não existe')
}

// --------- Atividade 03 -------------
let turnoOne = prompt('Que turno do dia você estuda - m, v ou n?').toLowerCase()
switch (turnoOne) {
  case "m":
    console.log('Bom Dia!')
    break;
  case "v":
    console.log('Boa Tarde!')
    break;
  case "n":
    console.log('Boa Noite!')
    break;
  default:
    console.log('Esse turno não existe')
    break;
}

// --------- Atividade 04 -------------
let filme = prompt('Qual o gênero do filme?').toLowerCase()
let preco = Number(prompt('Qual o valor do ingresso?'))

if (filme == 'fantasia' && preco <= 15) {
    console.log('Bom filme!')
}
else {
    console.log('Escolha outro filme :( tururu')
}

// --------- Desafio 01 -------------
let filmeOne = prompt('Qual o gênero do filme?').toLowerCase()
let precoOne = Number(prompt('Qual o valor do ingresso?'))

if (filmeOne == 'fantasia' && precoOne <= 15) {
    let lanchinho = prompt('Qual lanchinho você irá comprar?').toLowerCase()
    console.log(`Bom filme e aproveite seu ${lanchinho}`)
}
else {
    console.log('Escolha outro filme :( tururu')
}

// --------- Desafio 02 -------------
let NomeComp = prompt('Qual o seu nome completo?')
let tipoJogo = prompt('Qual o Tipo de jogo: IN ou DO ').toLowerCase()
let EtapaJogo = prompt('Qual a Etapa do jogo: SF; DT; ou FI').toLowerCase()
let Categoria = Number(prompt('Categoria: pode ser as opções 1, 2, 3 ou 4'))
let Igressos =  Number(prompt('Qual a Quantidade de ingressos?'))

if (tipoJogo == 'in' && EtapaJogo <= 'sf' && Categoria == 1 ) {
    let total = (1320 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  SemiFinal 
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'sf' && Categoria == 2 ) {
    let total = (880 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  SemiFinal 
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'sf' && Categoria == 3 ) {
    let total = (550 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  SemiFinal 
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'sf' && Categoria == 4 ) {
    let total = (220 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  SemiFinal 
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'dt' && Categoria == 1 ) {
    let total = (660 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'dt' && Categoria == 2 ) {
    let total = (440 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'dt' && Categoria == 3 ) {
    let total = (330 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'dt' && Categoria == 4 ) {
    let total = (170 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'fi' && Categoria == 1 ) {
    let total = (1980 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Final 
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'fi' && Categoria == 2 ) {
    let total = (1320 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Final 
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'fi' && Categoria == 3 ) {
    let total = (880 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Final 
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'in' && EtapaJogo <= 'fi' && Categoria == 4 ) {
    let total = (330 * 4.10) * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Internacional 
    Etapa do jogo:  Final 
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}

// Domesticos
else if (tipoJogo == 'do' && EtapaJogo <= 'sf' && Categoria == 1 ) {
    let total = 1320 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  SemiFinal 
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'sf' && Categoria == 2 ) {
    let total = 880 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  SemiFinal 
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'sf' && Categoria == 3 ) {
    let total = 550 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  SemiFinal 
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'sf' && Categoria == 4 ) {
    let total = 220 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  SemiFinal 
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'dt' && Categoria == 1 ) {
    let total = 660 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'dt' && Categoria == 2 ) {
    let total = 440 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'dt' && Categoria == 3 ) {
    let total = 330 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'dt' && Categoria == 4 ) {
    let total = 170 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Decisão de Terceiro Lugar 
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'fi' && Categoria == 1 ) {
    let total = 1980 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Final
    Categoria:  1 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'fi' && Categoria == 2 ) {
    let total = 1320 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Final
    Categoria:  2 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'fi' && Categoria == 3 ) {
    let total = 880 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Final
    Categoria:  3 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}
else if (tipoJogo == 'do' && EtapaJogo <= 'fi' && Categoria == 4 ) {
    let total = 330 * Igressos;
    let valorIngresso = total / Igressos

    console.log(`  ---Dados da compra--- 

    Nome do cliente:  ${NomeComp}
    Tipo do jogo:  Doméstico 
    Etapa do jogo:  Final
    Categoria:  4 
    Quantidade de Ingressos:  ${Igressos} 

    ---Valores--- 
    Valor do ingresso:  U$  ${valorIngresso}
    Valor total:  U$  ${total}`)
}