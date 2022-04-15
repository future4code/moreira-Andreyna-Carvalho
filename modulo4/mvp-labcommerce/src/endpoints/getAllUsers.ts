import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getAllUsers(req:Request, res:Response){
  try{
    const user = await selectAllUsers()

    if(!user) res.status(404).send([]);    
    res.status(200).send({user: user});

  } catch (error:any){
    res.status(400).send({message: 'Não foi possivel localizar os usuários'})
  }
}