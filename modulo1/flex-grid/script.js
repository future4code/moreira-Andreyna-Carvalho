// Atividade de revisão
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let resultado = [];

    for (let i = 0; i < arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] == numeroEscolhido){
            resultado.push(numeroEscolhido)
        }
    }  

    if(resultado.length === 0){
        return 'Número não encontrado'
    }
    else{
        return "O número "+ numeroEscolhido + " aparece " + resultado.length + "x"
    }
}

console.log(contaOcorrencias([1,4,8,2,5,4,4], 4));