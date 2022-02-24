import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { GraphQLModuleParams, LoggerModuleParams } from './config';

@Module({
  imports: [
    LoggerModule.forRootAsync(LoggerModuleParams),
    GraphQLModule.forRootAsync(GraphQLModuleParams)
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
export class AppModule {}
