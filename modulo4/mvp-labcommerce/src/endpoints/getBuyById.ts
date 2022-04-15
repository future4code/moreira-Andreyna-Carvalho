import { Request, Response } from "express";
import selectBuyById from "../data/selectBuyById";

export default async function getBuyById(req:Request, res:Response){
  try{
    const useerInfo = await selectBuyById(req.params.id)

    if(!useerInfo) res.status(404).send({message: 'Sorry, but not found'});    
    
    res.status(200).send({compras: useerInfo});

  } catch (error:any){
    res.status(400).send(error.message)
  }
}