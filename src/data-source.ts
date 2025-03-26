import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client } from "./entity/Client"
import { Banker } from "./entity/Banker"
import { Transaction } from "./entity/Transaction"
require('dotenv').config();


export const AppDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION as 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [Client, Banker, Transaction],
    migrations: [],
    subscribers: [],
})
