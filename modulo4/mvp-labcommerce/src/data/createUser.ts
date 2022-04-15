import { connection } from "..";

export default async function createUser(
  id: string,
  name: string,
  email: string,
  password: string,
){
  await connection.insert({
    id,
    name,
    email,
    password
  }).into('LABCOMMERCE_USERS');
}
