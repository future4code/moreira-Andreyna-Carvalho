ˋˋˋ
function carrosVendidos(qtdeCarrosVendidos, valorTotalVendas) {
    let precoPorCarro = valorTotalVendas/qtdeCarrosVendidos

    if (qtdeCarrosVendidos == 0){
        return 2000
    }
    
    let resultado = 2000 + (100 * qtdeCarrosVendidos + (qtdeCarrosVendidos * (precoPorCarro * 5/100)))
    return resultado
}
console.log(carrosVendidos(0, 2000))

ˋˋˋ