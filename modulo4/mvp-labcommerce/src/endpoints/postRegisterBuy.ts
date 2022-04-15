import { Request, Response } from "express";
import insertBuy from "../data/insertBuy";

export default async function postRegisterBuy(req:Request, res:Response){
  try {
    const id:string = Date.now() + Math.random().toString();
    const total_price:number = 0;
    const body = req.body;

    await insertBuy(
      id,
      total_price,
      body.quantity,
      body.user_id,
      body.product_id,
      )
      res.status(200).send({message: 'Compra realizada com sucesso nesse usuário'});
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}