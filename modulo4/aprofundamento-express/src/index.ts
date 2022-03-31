import cors from 'cors';
import express from "express";
import { afazeres, toDo } from "./objetos";

const app = express(); //inicializa o express
app.use(express.json()); //obriga a saida do backend ser json (objeto)
app.use(cors()) // habilita o uso do cors

//atividade 01
app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

//atividade 02, 03 e 04
app.get('/to-do/:status', (req, res) => {
  const usuario = req.headers.authorization;
  let status: boolean;

  afazeres.filter(user => {
    if(user.userId.toLowerCase() === usuario){
      if(req.params.status === 'true'){
        status = true
      }
      else {
        status = false
      }    

      const filterStatus = afazeres.map((dados:toDo) => dados.listToDo).filter((dados:any) =>{
        if(dados.completed === status){
          return dados
        }
        else {
          return 'Você não possui nenhuma atividade para fazer'
        }
      })
      res.status(200).send(filterStatus)
    }
    else {
      res.status(400).send('Usuário não encontrado na base de dados')
    }
  })
})

//Atividade 05
app.post('/to-do', (req, res) => {
  const usuario = req.headers.authorization

  const newToDo = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  }

  for(let i = 0; i < afazeres.length; i++){
    if(afazeres[i].userId.toLowerCase() === usuario){
      afazeres[i].listToDo.push(newToDo)
    }
  }

  const filterInfo = afazeres.filter((dados) => {
    if(dados.userId === usuario){
      return dados
    }
    else {
      return 'Não foi possível localizar o usuário tente apenas minusculas'
    }
  })

  res.status(200).send(filterInfo)
})

//Atividade 06

app.listen(3003, () => {
    console.log(`server rodando na porta http://localhost:3003`);
});
