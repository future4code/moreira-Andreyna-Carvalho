ˋˋˋ
// Exercício de fixação!
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

    const nomeAnimal = (item) => {
        return item.nome
    }
    let nomes = animais.map(nomeAnimal)
    return nomes

}
console.log(criarArrayNomesAnimais());
ˋˋˋ