import { Request, Response } from "express";
import selectAllUser from "../data/selectAllUser";

export default async function getAllUsers(req:Request, res:Response){
  try{
    const user = await selectAllUser()

    if(!user) res.status(404).send([]);    
    res.status(200).send({user: user});

  } catch (error:any){
    res.status(400).send({message: 'Deu merda'})
  }
}