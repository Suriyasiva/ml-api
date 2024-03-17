import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './config/orm.config';
import { ConfigsModule } from './config/modules/config.module';
import { User } from './entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...pgConfig,
      autoLoadEntities: true,
    }),
    ConfigsModule,

    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
