import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../loaders/sequelize';

interface DeckAttributes {
  id: string;
}

export interface DeckInput extends Optional<DeckAttributes, 'id'> {}

export interface DeckOutput extends Required<DeckAttributes> {}

class Deck extends Model<DeckAttributes, DeckInput> implements DeckAttributes {
  declare id: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Deck.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  }
}, {
  sequelize,
})

export default Deck;
