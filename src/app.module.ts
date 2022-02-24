import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModuleParams } from './config';

@Module({
  imports: [LoggerModule.forRootAsync(LoggerModuleParams)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
