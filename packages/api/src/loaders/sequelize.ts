/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_TABLE as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    host: process.env.DATABASE_HOST as string,
    dialect: 'postgres',
    port: 5433
  }
);


export default sequelize;
