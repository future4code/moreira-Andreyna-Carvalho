import { Request, Response } from "express";
import editUserById from "../data/editUserById";

export default async function postEditUser(req:Request, res:Response){
  try {
    const body = req.body;

    if(body.name === '' || body.nickname === '' || body.email === ''){
      res.status(404).send({message: "Nenhum dos campos podem estar em branco"})
    }
    if(!body.name && !body.nickname && !body.email){
      res.status(404)
      .send({message: "Escolha ao menos um valor para fazer a alteração name, nickname ou email"})
    }

    await editUserById(
      req.params.id,
      body.name, 
      body.nickname, 
      body.email,
    )
    res.send(200).send({message: 'Editado com sucesso'})
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}