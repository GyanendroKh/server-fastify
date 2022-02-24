import { MercuriusDriver, MercuriusDriverAsyncConfig } from '@nestjs/mercurius';

export const GraphQLModuleParams: MercuriusDriverAsyncConfig = {
  driver: MercuriusDriver,
  useFactory: async () => {
    return {
      jit: 1,
      graphiql: true,
      autoSchemaFile: 'schema.gql'
    };
  }
};
