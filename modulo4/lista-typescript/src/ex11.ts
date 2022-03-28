// ------- Exercício 11 -----------
const convert = require('lab-roman-int-converter');

function converterRomanos(dados:number){
  return convert.intToRoman(dados)
}
console.log(converterRomanos(2001));

// https://www.npmjs.com/package/lab-roman-int-converter