let um = document.querySelector('.um')
function mouseOver(){
    um.innerHTML = ` <h2> Pokedex</h2>
    <p> Foi elaborada uma pokedex com o consumo de uma API, utilizando JavaScript, bruto para treinar minha lógica e testar os conhecimentos que adquiri no tempo ocioso</p>
    <button> <a href="https://github.com/andreyna1808/ProjetoFixacao/tree/main/pokedex" target="_blank"> GitHub</a></button>
    <button> <a href="https://andreyna1808.github.io/ProjetoFixacao/pokedex/index.html" target="_blank"> Rodando</a></button>
    `
    um.style.backgroundColor = 'rgb(48, 46, 46)';
}
function mouseOut() {
    um.innerHTML += "<h3> Você já viu?! </h3>"
}

let dois = document.querySelector('.dois')
function mouseOver1(){
    dois.innerHTML = ` <h2> Pedra Papel Tesoura</h2>
    <p> Foi criado um jogo de Pedra Papel Tesoura com js bruto</p>
    <button> <a href="https://github.com/andreyna1808/ProjetoFixacao/tree/main/Pedra-Papel-Tesoura" target="_blank"> GitHub</a></button>
    <button> <a href="https://andreyna1808.github.io/ProjetoFixacao/Pedra-Papel-Tesoura/index.html" target="_blank"> Rodando</a></button>
    `
    dois.style.backgroundColor = 'rgb(48, 46, 46)';
}
function mouseOut1() {
    dois.innerHTML += "<h3> Você já viu?! </h3>"
}

let tres = document.querySelector('.tres')
function mouseOver2(){
    tres.innerHTML = ` <h2> Lista de Desejos</h2>
    <p> Foi criado uma lista no qual pode colocar o nome, preço e idade, pretendo otimizar ela em breve</p>
    <button> <a href="https://github.com/andreyna1808/ProjetoFixacao/tree/main/Lista" target="_blank"> GitHub</a></button>
    <button> <a href="https://andreyna1808.github.io/ProjetoFixacao/Lista/index.html" target="_blank"> Rodando</a></button>
    `
    tres.style.backgroundColor = 'rgb(48, 46, 46)';
}
function mouseOut2() {
    tres.innerHTML += "<h3> Você já viu?! </h3>"
}

let quatro = document.querySelector('.quatro')
function mouseOver3(){
    quatro.innerHTML = ` <h2> Você realmente é OTAKU?</h2>
    <p> Uma brincadeira de perguntas sobre rap de animes, se acerta mais de 80%, eitahh você é um OTAKU!! já bora amigar</p>
    <button> <a href="https://github.com/andreyna1808/Quiz" target="_blank"> GitHub</a></button>
    <button> <a href="https://andreyna1808.github.io/Quiz/" target="_blank"> Rodando</a></button>
    `
    quatro.style.backgroundColor = 'rgb(48, 46, 46)';
}
function mouseOut3() {
    quatro.innerHTML += "<h3> Você já viu?! </h3>"
}