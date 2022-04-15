import { connection } from "..";

export default async function selectAllUsers(){
  const result = await connection('LABCOMMERCE_USERS').select('id', 'name', 'email');

  return result
}