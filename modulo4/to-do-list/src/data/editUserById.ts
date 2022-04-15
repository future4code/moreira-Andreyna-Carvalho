import { connection } from "..";

export default async function editUserById(
  id: string,
  name?: string,
  nickname?: string,
  email?: string, // ? define eles como opcionais
){
  if(name) await connection.raw(`UPDATE TODO_USERS SET name = '${name}' WHERE id = '${id}';`)
  if(nickname) await connection.raw(`UPDATE TODO_USERS SET nickname = '${nickname}' WHERE id = '${id}';`)
  if(email) await connection.raw(`UPDATE TODO_USERS SET email = '${email}' WHERE id = '${id}';`)
}