// ---------- Desafio 06 --------------
function Calculadora(numberOne:number, numberTwo:number):string {
  let somar = numberOne + numberTwo;
  let diminuir = numberOne - numberTwo;
  let multiplicar = numberOne * numberTwo;
  let dividir = numberOne / numberTwo;
 
    return `A soma é ${somar}, subtração é ${diminuir}, a multiplicação é ${multiplicar} e a divisão é ${dividir}`
 }
console.log(Calculadora(2022, 2001));
