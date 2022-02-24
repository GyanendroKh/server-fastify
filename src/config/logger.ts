import { LoggerOptions } from 'pino';
import { LoggerModuleAsyncParams } from 'nestjs-pino';

export const LoggerModuleParams: LoggerModuleAsyncParams = {
  useFactory: async () => {
    let transport: LoggerOptions['transport'] = undefined;

    if (process.env.NODE_ENV !== 'production') {
      transport = {
        target: 'pino-pretty',
        options: {
          translateTime: 'SYS:dd-mm-yyyy HH:MM:ss.l'
        }
      };
    }

    return {
      pinoHttp: {
        transport
      }
    };
  }
};
