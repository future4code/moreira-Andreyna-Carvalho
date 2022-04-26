import { connection } from "..";

export default async function selectUserById(
  id: string,
){
  const result = await connection('TODO_USERS').select('*').where({id})

  return result[0]
}