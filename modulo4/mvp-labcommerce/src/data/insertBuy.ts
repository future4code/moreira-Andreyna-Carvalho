import { connection } from "..";

export default async function insertBuy(
  id: string,
  quantity: number,
  total_price: number,
  user_id: string,
  product_id: string,
){
  await connection.insert({
    id,
    quantity,
    total_price: total_price + quantity,
    user_id,
    product_id,
  }).into('LABCOMMERCE_PURCHASES');
}