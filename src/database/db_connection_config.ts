import 'dotenv/config'

import { ConnectionOptions } from "typeorm";

export const connectionPoolConfig: ConnectionOptions = 
  {
    type: 'postgres',
    host: process.env.ADDRESS,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: false,
    migrations: [ __dirname + "/migration/*.ts"],
    entities: [ __dirname + "/entity/*.ts"],
  }




