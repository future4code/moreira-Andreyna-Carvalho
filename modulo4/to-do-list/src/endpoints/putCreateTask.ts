import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTasks";

export default async function putCreateTask(req:Request, res:Response){
  try {
    const id:string = Date.now() + Math.random().toString();
    const body = req.body;

    if(!body.title || !body.description || !body.deadline || !body.author_id){
      res.status(404).send({message: 'Faltou colocar title, description, deadline ou author_id'})
    }

    const dateDiff: number = moment(body.deadline, 'DD/MM/YYYY').unix() - moment().unix();
    if(dateDiff <= 0){
      res.status(400).send({message: 'Deadline deve ser uma data futura'});
    }

    await insertTask (
      id,
      body.title,
      body.description,
      moment(body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      body.author_id,
      )
      res.status(200).send({message: 'Atividade criada com sucesso'});
      
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}