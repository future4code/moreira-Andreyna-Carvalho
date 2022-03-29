import express from "express";
import { AddressInfo } from "net";
import cors from 'cors'
import { dados } from "./objetos";

const app = express(); //inicializa o express

app.use(express.json()); //obriga a saida do backend ser json (objeto)

app.use(cors()) // habilita o uso do cors

app.get('/', (req, res) => {
  const infoDados = dados;
  console.log(infoDados);
  
  res.status(200).send(infoDados)
})
app.delete('/:userId', (req, res) => {
  const userId = req.params.userId
  console.log(userId);
  

  res.send('users')
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server rodando na porta http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o servidor`);
  }
});;
