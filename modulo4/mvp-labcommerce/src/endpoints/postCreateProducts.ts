import { Request, Response } from "express";
import createProducts from "../data/createProducts";

export default async function postCreateProducts(req:Request, res:Response){
  try {
    const id:string = Date.now() + Math.random().toString();
    const body = req.body;

    if(!body.name || !body.price || !body.img){
      res.status(404).send({message: 'Faltou colocar nome, price ou img'})
    }
    
    await createProducts(
      id,
      body.name,
      body.price,
      body.img
      )
      res.status(200).send({message: 'Produto criado com sucesso'});
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}