import express from "express";

import { config } from "./config.js";
import apiRouter from "./api.routes.js";
import db from "./db.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection()

app.use('/api',apiRouter)


app.listen(config.PORT, () =>
  console.log("server listening on port :", config.PORT)
);







 async function dbConnection(){
  try {
      await db.authenticate()
      console.log("db connection successfully")
  } catch (error) {
    console.log(error)
  }
}