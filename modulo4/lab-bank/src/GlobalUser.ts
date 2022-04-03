// Crie um tipo para representar uma conta para o usuário
export type contaUser = {
    nome: string,
    cpf: string,
    anoNascimento: number,
    saldo: number,
    extrado: transacoes
}

//Crie mais um tipo: para representar as transações que serão salvas no extrato
export type transacoes = {
    valor: number,
    data: string,
    descricao: string
}

// Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
// Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
export const users:any = [
  {
      nome: "Andreyna",
      cpf: "575.255.650-31",
      anoNascimento: 2001,
      saldo: 7000,
      extrato : [
          {
              valor: 200,
              data: "04/04/2022", 
              descricao: "pix"
          },
          {
              valor: 900,
              data: "02/05/2022", 
              descricao: "pix"
          }
      ]
  }]