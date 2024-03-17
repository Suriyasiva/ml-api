import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, DbConfig } from '../config';

/**
 * @class { ConfigModule } by default it import .env file 
 */

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [AppConfig, DbConfig]
        })
    ],
})
export class ConfigsModule { }