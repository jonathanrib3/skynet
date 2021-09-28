import dotenv from 'dotenv'

import { ConnectionOptions } from "typeorm";

dotenv.config()
export const connectionPoolConfig: ConnectionOptions = 
  {
    type: 'postgres',
    host: process.env.ADDRESS,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    migrations: ['./src/database/migration/**/*.{ts,js}'],
    entities: [ __dirname + "/entity/*.ts"],
  }




