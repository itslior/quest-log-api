import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // init memory db for this project
  const mongoMemoryServer = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongoMemoryServer.getUri();

  const app = await NestFactory.create(AppModule);
  // validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {enableImplicitConversion: true},
    forbidNonWhitelisted: true
  }));

  const port = process.env.PORT || 3000;
  await app.listen(3000);
  console.log(`application started listening to port: ${port}`);
}

bootstrap().catch((error) => console.error({ error }));
