import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule, Int } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { PetsModule } from './pets/pets.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlCredentials } from './data-source';

console.log(sqlCredentials)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal : true }),
    TypeOrmModule.forRoot(sqlCredentials),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    PetsModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
