import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const fastify = new FastifyAdapter();
  const app = await NestFactory.create(AppModule, fastify, {
    bufferLogs: true
  });
  app.useLogger(app.get(Logger));

  await app.listen(3000, '0.0.0.0', () => {
    app.get<Logger>(Logger).log('Listening at port :3000', 'Bootstrap');
  });
};

bootstrap();
