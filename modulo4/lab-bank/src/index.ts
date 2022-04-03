import cors from 'cors'
import express from 'express'
import { AddressInfo } from 'net'
import { users } from './GlobalUser'

const app = express()
app.use(express.json())
app.use(cors())

//Função de colocar a data atual do envio
let dataExtrato = new Date();
let diaExtrato  = String(dataExtrato.getDate()).padStart(2, '0');
let mesExtrato  = String(dataExtrato.getMonth() + 1).padStart(2, '0');
let anoExtrato  = dataExtrato.getFullYear();
let infoData = diaExtrato + '/' + mesExtrato + '/' + anoExtrato;

// 5- Crie um endpoint que irá adicionar um novo usuário
app.post("/add-usuario", (req, res) => {

  const anoAtual = new Date().getFullYear();
  const suaIdade = anoAtual - req.body.data;

  // Fazer a condição de ter 18 anos ou mais
  if(suaIdade >= 18){
    users.push({
      name: req.body.name,
      cpf: req.body.cpf,
      anoNascimento: req.body.data,
      saldo: req.body.saldo,
      extrato: [],
  })
    res.send({ users })
  } else {
    res.send('O usuário deve possuir 18 anos ou mais, e no momento tem apenas: '+ suaIdade)
  }
  
})

// 6- Crie um método GET na entidade users que irá pegar todos os usuários
app.get("/usuarios", (req, res) => {
  res.send(users)
})

//Função que procura o usuário pelo cpf
app.get("/procurar-usuario", (req, res) => {
  let result = []
  let infoCPF = req.query.cpf
  if (!infoCPF) {
      res.status(400).send("Coloque cpf no key dos Params e insira o cpf do userário")
  }
  for (let conta of users) {
      if (conta.cpf === infoCPF) {
          result.push(conta)
      }
  }
  res.send({result: result})
} )

//Função que adiciona o valor do extrato
app.post("/add-contas", (req, res) => {
  let infoCPF = req.query.cpf
  let result = []

  if (!infoCPF) {
    res.status(400).send("Coloque cpf no key dos Params e insira o cpf do userário")
  }

  for (let conta of users) {
      if (conta.cpf === infoCPF) {
        conta.extrato.push({
              valor: req.body.valor,
              data: infoData,
              descricao: req.body.descricao
          })
          result.push(conta)
          res.send({result: result})
        }
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server rodando na porta http://localhost:${address.port}`);
  } else {
      console.error(`Falha ao rodar o servidor`);
  }
});;

// Ainda não aprendi 100% como usar os tipos conforme a necessidade, mas calma lá
// quando tiver um tempinho vou rever as aulas, tava meio apertada aq
// Os próximos serão melhores, prometo