let um = document.querySelector('.um')
let fantasmaUm = document.querySelector('.fantasmaUm')
function mouseOver(){
    um.style.backgroundColor = 'rgb(48, 46, 46)';
    fantasmaUm.style.opacity = 1;
}

let dois = document.querySelector('.dois')
let fantasmaDois = document.querySelector('.fantasmaDois')
function mouseOver1(){
    dois.style.backgroundColor = 'rgb(48, 46, 46)';
    fantasmaDois.style.opacity = 1;
}

let tres = document.querySelector('.tres')
let fantasmaTres = document.querySelector('.fantasmaTres')
function mouseOver2(){
    tres.style.backgroundColor = 'rgb(48, 46, 46)';
    fantasmaTres.style.opacity = 1;
}

let quatro = document.querySelector('.quatro')
let fantasmaQuatro = document.querySelector('.fantasmaQuatro')
function mouseOver3(){
    quatro.style.backgroundColor = 'rgb(48, 46, 46)';
    fantasmaQuatro.style.opacity = 1;
}

function mouseOut() {
    fantasmaUm.style.opacity = 0;
    um.style.backgroundColor = "rgb(100, 7, 25)";
}
function mouseOut1() {
    fantasmaDois.style.opacity = 0;
    dois.style.backgroundColor = "rgb(11, 61, 61)";
}
function mouseOut2() {
    fantasmaTres.style.opacity = 0;
    tres.style.backgroundColor = "darkblue";
}
function mouseOut3() {
    fantasmaQuatro.style.opacity = 0;
    quatro.style.backgroundColor = "rgb(145, 93, 30)";
}
