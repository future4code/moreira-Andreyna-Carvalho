import { connection } from "..";

export default async function createProducts(
  id: string,
  name: string,
  price: number,
  img: string,
){
  await connection.insert({
    id,
    name,
    price,
    img
  }).into('LABCOMMERCE_PRODUCTS');
}
