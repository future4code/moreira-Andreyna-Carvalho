import { Request, Response } from "express";
import searchUser from "../data/searchUser";

export default async function getSearchUser(req:Request, res:Response){
  const { query } = req.query

  if (typeof query !== "string") {
    res.status(400).send([]);
    return;
  }

  try{
    const search = await searchUser(query);

    if(!search) res.status(404).send([]);    
    res.status(200).send({user: search});

  } catch (error:any){
    res.status(400).send({message: 'Deu merda'})
  }
}