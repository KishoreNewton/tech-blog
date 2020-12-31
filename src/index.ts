import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Request, Response } from "express";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [`${__dirname}/entity/*.ts`],
  synchronize: true,
  logging: false,
})
  .then(async (connection) => {
    console.log("🚀Connected to the database successfully");

    // create and setup express app
    const app = express();
    app.use(express.json());

    

    // start express server
    app.listen(3000);
  })
  .catch((error) => console.log(error));
