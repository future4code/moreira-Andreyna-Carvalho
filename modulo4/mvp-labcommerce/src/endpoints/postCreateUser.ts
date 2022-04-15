import { Request, Response } from "express";
import createUser from "../data/createUser";

export default async function postCreateUser(req:Request, res:Response){
  try {
    const id:string = Date.now() + Math.random().toString();
    const body = req.body;

    if(!body.name || !body.email || !body.password){
      res.status(404).send({message: 'Faltou colocar nome, email ou password'})
    }
    
    await createUser(
      id,
      body.name,
      body.email,
      body.password
      )
      res.status(200).send({message: 'Usuário criado com sucesso'});
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}