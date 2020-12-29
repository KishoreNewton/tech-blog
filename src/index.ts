import "reflect-metadata";
import { createConnection } from "typeorm";

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
    console.log('🚀Connected to the database successfully')
  })
  .catch((error) => console.log(error));
