import { DataSource, DataSourceOptions } from "typeorm";
import { DbConfig } from "./config";
import { entities, migrations } from './orm.config';

const dbConfig = DbConfig()

export const appDataSource = new DataSource({
    type: "postgres",
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: entities,
    migrations: migrations
})

// export const dataSource = appDataSource