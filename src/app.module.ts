import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    playground: true,
  }), PetsModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
