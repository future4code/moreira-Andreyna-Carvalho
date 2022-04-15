import { Request, Response } from "express";
import moment from "moment";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(req:Request, res:Response){
  try{
    const getTask = await selectTaskById(req.params.id)

    if(!getTask) res.status(404).send({message: 'Sorry, but not found'});    
    
    res.status(200).send({...getTask,
      deadline: moment(getTask.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY')});

  } catch (error:any){
    res.status(400).send(error.message)
  }
}