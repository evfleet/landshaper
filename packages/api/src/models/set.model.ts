import { DataTypes, Model } from "sequelize";
import sequelize from '../loaders/sequelize';

interface SetAttributes {
  code: string;
  name: string;
  released_at: Date;
};

class Set extends Model<SetAttributes> implements SetAttributes {
  declare code: string;
  declare name: string;
  declare released_at: Date;
}

Set.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  released_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false
});

export default Set;