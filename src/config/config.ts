import { ConfigService, registerAs } from '@nestjs/config';

export enum ConfigKey {
    APP = 'APP',
    DB = 'DB',
}

const configService: ConfigService = new ConfigService();


const AppConfig = registerAs(
    ConfigKey.APP, () => ({
        appEnvironment: configService.get<string>("ENVIRONMENT"),
        port: Number(configService.get<string>("APP_PORT")),
        jwtSecret: configService.get<string>("JWT_SECRET")
    }),
);

const DbConfig = registerAs(
    ConfigKey.DB, () => ({
        host: configService.get<string>("DB_HOST"),
        port: Number(configService.get<string>("DB_PORT")),
        username: configService.get<string>("DB_USERNAME"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_DATABASE"),
    }),
);

export {AppConfig, DbConfig}
