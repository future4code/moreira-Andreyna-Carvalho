import { connection } from "..";

export default async function insertTask(
  id: string,
  title: string,
  description: string,
  deadline: string,
  author_id: string,
){
  await connection.insert({
    id,
    title,
    description,
    deadline,
    author_id,
  }).into('TODO_TASKS');
}