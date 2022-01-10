ˋˋˋ
function calculaNota(ex, p1, p2) {
    const exercicio = ex * 1;
    const provaUm = p1 * 2;
    const provaDois = p2 * 3;
    
    const media = (provaUm + provaDois + exercicio) / 6;
     
    if(media >= 9) {
    return "A"
    }

    if(media < 9 && media >= 7.5) {
        return "B"    
    }
    
    if(media < 7.5 && media >= 6) {
        return "C"
    }
    
    else {
        return "D"
    }
}
ˋˋˋ