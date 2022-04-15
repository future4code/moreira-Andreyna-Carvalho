import { connection } from "..";

export default async function selectAllProducts(){
  const result = await connection('LABCOMMERCE_PRODUCTS').select('*');

  return result
}