/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize';
import deckFactory from '../models/deck.model';
import userFactory from '../models/user.model';

interface Database {
  sequelize: Sequelize;
  User: ReturnType<typeof userFactory>;
  Deck: ReturnType<typeof deckFactory>;
}

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

const User = userFactory(sequelize);
const Deck = deckFactory(sequelize);

Deck.belongsTo(User, {
  foreignKey: 'creatorId',
  as: 'creator'
});

const database: Database = {
  sequelize,
  User,
  Deck
};

export default database;
