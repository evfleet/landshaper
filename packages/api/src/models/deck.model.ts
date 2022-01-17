import { DataTypes, Model, Optional } from 'sequelize';
import database from '../config/database';
import User from './user.model';

interface DeckAttributes {
  id: string;
}

type DeckCreationAttributes = Optional<DeckAttributes, 'id'>;

interface DeckInstance extends Model<DeckAttributes, DeckCreationAttributes>, DeckAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Deck = database.define<DeckInstance>('deck', {
  id: {
    type: DataTypes.UUID
  }
});

Deck.belongsTo(User, {
  foreignKey: 'creatorId',
  as: 'creator'
});

export default Deck;
