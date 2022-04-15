import { connection } from "..";

export default async function insertUser(
  id: string,
  name: string,
  nickname: string,
  email: string,
){
  await connection.insert({
    id,
    name,
    nickname,
    email
  }).into('TODO_USERS');
}