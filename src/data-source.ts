import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const sqlCredentials: DataSourceOptions  = {
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    entities: ['dist/infraestructure/db/sql/entities/**/*.entity.js'],
    migrations: ['dist/infraestructure/db/sql/migrations/*.js'],
  };
  