import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DbConfig } from "./config";
import { resolve } from "path";

// postgresql://postgres:postgres@localhost/moneylending?statusColor=686B6F&env=development&name=ml-api&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0&driverVersion=0&lazyload=false

const dbConfig = DbConfig()

let dbURL = `postgres://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`;


const pgConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    // url: dbURL,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [resolve(__dirname, "../entities/*{.ts,.js}")],
    migrationsTableName: 'migration',
    // migrationsRun: true,
    migrations:[resolve(__dirname, "../migrations/*{.ts,.js}")],
    synchronize: false
}

const entities = [resolve(__dirname, "../entities/*{.ts,.js}")]
const migrations = [resolve(__dirname, "../migrations/*{.ts,.js}")]
const seedersPath = resolve(__dirname, "../seeders/*{.ts,.js}")

export {
    pgConfig,
    entities,
    migrations
}