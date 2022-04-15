import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";

import express, { Express } from "express";
import { AddressInfo } from "net";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import getBuyById from "./endpoints/getBuyById";
import postCreateProducts from "./endpoints/postCreateProducts";
import postCreateUser from "./endpoints/postCreateUser";
import postRegisterBuy from "./endpoints/postRegisterBuy";

const app: Express = express();

app.use(express.json());
app.use(cors());
dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3003,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

//Cadastro de usuário
app.get('/users', getAllUsers);
app.post('/users', postCreateUser);

//Cadastro de produtos
app.get('/products', getAllProducts);
app.post('/products', postCreateProducts);

//USUÁRIO PRODUTO
app.get('/users/:user_id/purchases', getBuyById);
app.post('/purchases', postRegisterBuy);

const server = app.listen(3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});