import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_NAME,
  synchronize: true, // set to false in production and use migrations instead
  entities: ['entities/*.js'],
  // migrations: ['migrations/*.js'],
  // cli: {
  //   migrationsDir: 'migrations',
  // },
});
