// ----------- Exercício de fixação JS - 01 ----------
function carrosVendidos(qtdeCarrosVendidos, valorTotalVendas) {
    let precoPorCarro = valorTotalVendas/qtdeCarrosVendidos

    if (qtdeCarrosVendidos == 0){
        return 2000
    }
    
    let resultado = 2000 + (100 * qtdeCarrosVendidos + (qtdeCarrosVendidos * (precoPorCarro * 5/100)))
    return resultado
}
console.log(carrosVendidos(0, 2000)) // exemplo de teste

// ----------- Exercício de fixação JS - 02 ----------

// As maças custam 1.3 se for comprado menos de 12 <
// Custaram 1 real se compradas ao menos 12 >=
function calculaPrecoTotal(quantidade){
    if (quantidade < 12){
        return quantidade * 1.3
    }
    else{
        return quantidade * 1
    }
}