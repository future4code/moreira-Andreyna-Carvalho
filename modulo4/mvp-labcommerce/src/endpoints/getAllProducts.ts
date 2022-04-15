import { Request, Response } from "express";
import selectAllProducts from "../data/selectAllProducts";

export default async function getAllProducts(req:Request, res:Response){
  try{
    const user = await selectAllProducts()

    if(!user) res.status(404).send([]);    
    res.status(200).send({user: user});

  } catch (error:any){
    res.status(400).send({message: 'Não foi possivel localizar os produtos'})
  }
}