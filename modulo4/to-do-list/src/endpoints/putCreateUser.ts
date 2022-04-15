import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function putCreateUser(req:Request, res:Response){
  try {
    const id:string = Date.now() + Math.random().toString();
    const body = req.body;

    if(!body.name || !body.nickname || !body.email){
      res.status(404).send({message: 'Faltou colocar nome, nickname ou email'})
    }
    
    await insertUser (
      id,
      body.name,
      body.nickname,
      body.email,
      )
      res.status(200).send({message: 'Usuário criado com sucesso'});
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}