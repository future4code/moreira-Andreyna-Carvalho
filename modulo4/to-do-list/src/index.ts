import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";

import express, { Express } from "express";
import { AddressInfo } from "net";
import getAllUsers from "./endpoints/getAllUsers";
import getSearchUser from "./endpoints/getSearchUser";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";
import postEditUser from "./endpoints/postEditUser";
import putCreateTask from "./endpoints/putCreateTask";
import putCreateUser from "./endpoints/putCreateUser";

const app: Express = express();

app.use(express.json());
app.use(cors());
dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

//ENDPOINTS PARA USUÁRIOS
app.get("/user", getSearchUser); //08
app.put("/user", putCreateUser); //01
app.get('/user/all', getAllUsers); //06
app.get("/user/:id", getUserById); // 02
app.post("/user/edit/:id", postEditUser); //03

//ENDPOINTS MÍNIMOS PARA TAREFAS
app.put('/task', putCreateTask); //04
app.get('/task/:id', getTaskById); //05


const server = app.listen(3306, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//Teste para id user criado 16500215521590.5754316962134649