/**
 * The entry file of the application which
 * uses the core function ```NestFactory``` to create a Nest application instance.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appDataSource } from './config/ds.config';
import { ValidationPipe } from '@nestjs/common';
import { unprocessableEntityException } from './errors/validationPipeError.error';

async function bootstrap() {
  // abortOnError: throw an error instead exit with the code 1. { abortOnError: false }
  const { APP_PORT } = process.env;
  const app = await NestFactory.create(AppModule);

  // validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // stripping property
      transform: true,
      exceptionFactory: unprocessableEntityException
    }),
  );


  //  initialize dataSource
  await appDataSource.initialize();
  const isDataSourceInitialized = appDataSource.isInitialized
  if (!isDataSourceInitialized) {
    throw new Error("Error during Data Source initialization")
  }



  await app.listen(APP_PORT);
  console.log('app listening ' + APP_PORT);
}
bootstrap();
