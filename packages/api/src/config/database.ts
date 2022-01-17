import { Sequelize } from 'sequelize';

const database = new Sequelize(
  process.env.DATABASE_TABLE as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    host: process.env.DATABASE_HOST as string,
    dialect: 'postgres',
    port: 5433
  }
);

export default database;
