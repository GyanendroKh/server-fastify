import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import MercuriusUpload from 'mercurius-upload';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const fastify = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
    {
      bufferLogs: true
    }
  );
  app.useLogger(app.get(Logger));
  app.register(MercuriusUpload);

  await app.listen(3000, '0.0.0.0', () => {
    app.get<Logger>(Logger).log('Listening at port :3000', 'Bootstrap');
  });
};

bootstrap();
