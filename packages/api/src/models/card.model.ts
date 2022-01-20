import { DataTypes, Model } from 'sequelize';
import sequelize from '../loaders/sequelize';

interface CardAttributes {
  id: string;
  name: string;
  mtgo_id: number;
  arena_id: number;
  tcgplayer_id: number;
  released_at: Date;
  layout: string;
  card_faces?: []
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  },
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  loyalty: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  set_code: string;
  rarity: string;
  collector_number: string;
  flavor_text: string;
}

class Card extends Model<CardAttributes> implements CardAttributes {
  declare id: string;
  declare name: string;
  declare mtgo_id: number;
  declare arena_id: number;
  declare tcgplayer_id: number;
  declare released_at: Date;
  declare layout: string;
  declare card_faces?: [];
  declare image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  declare mana_cost: string;
  declare cmc: number;
  declare type_line: string;
  declare oracle_text: string;
  declare loyalty: string;
  declare colors: string[];
  declare color_identity: string[];
  declare keywords: string[];
  declare set_code: string;
  declare rarity: string;
  declare collector_number: string;
  declare flavor_text: string;
}

Card.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mtgo_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  arena_id: { 
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tcgplayer_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  released_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  layout: {
    type: DataTypes.STRING,
    allowNull: true
  },
  card_faces: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true
  },
  image_uris: {
    type: DataTypes.JSON,
    allowNull: true
  },
  mana_cost: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cmc: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  type_line: {
    type: DataTypes.STRING,
    allowNull: true
  },
  oracle_text: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  loyalty: {
    type: DataTypes.STRING,
    allowNull: true
  },
  colors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  color_identity: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  keywords: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  set_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rarity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  collector_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flavor_text: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  timestamps: false
});

export default Card;