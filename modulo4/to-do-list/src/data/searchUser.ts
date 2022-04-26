import { connection } from "..";

export default async function searchUser(query: string):Promise<any[]>{
  const result = await connection('TODO_USERS').select('id', 'nickname')
  .where('email', 'LIKE', `${query}`)
  .orWhere('nickname', 'LIKE', `${query}`);

  return result
}