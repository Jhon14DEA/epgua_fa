import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validate } from 'uuid';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //van a validar todo lo que esta los tipos de datos
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
