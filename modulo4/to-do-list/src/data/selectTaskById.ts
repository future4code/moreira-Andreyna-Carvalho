import { connection } from "..";

export default async function selectTaskById(
  id: string,
):Promise<any>{
  const result = await connection.raw(`
  SELECT TASKS.*, nickname FROM TODO_TASKS AS TASKS
  JOIN TODO_USERS AS USERS
  ON author_id = USERS.id
  WHERE TASKS.id = '${id}'
  `)

  return result[0][0]
}