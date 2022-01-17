import { DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';

interface DeckAttributes {
  id: string;
}

type DeckCreationAttributes = Optional<DeckAttributes, 'id'>;

export type DeckModel = ModelDefined<DeckAttributes, DeckCreationAttributes>;

export default (sequelize: Sequelize) => {
  const Deck: DeckModel = sequelize.define('deck', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  });

  return Deck;
};
