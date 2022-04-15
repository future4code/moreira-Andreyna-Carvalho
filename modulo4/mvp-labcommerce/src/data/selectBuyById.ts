import { connection } from "..";

export default async function selectBuyById(
  id: string,
){
  const result = await connection('LABCOMMERCE_USERS').select('*').where({id})

  return result
}