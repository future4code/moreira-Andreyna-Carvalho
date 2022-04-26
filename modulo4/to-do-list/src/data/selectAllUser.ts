import { connection } from "..";

export default async function selectAllUser(){
  const result = await connection('TODO_USERS').select('id', 'nickname');

  return result
}