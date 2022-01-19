import bcrypt from 'bcrypt';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../loaders/sequelize';

interface UserAttributes {
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  declare id: string;
  declare email: string;
  declare username: string;
  declare password: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  hooks: {
    beforeCreate: (user: User) => {
      user.password = bcrypt.hashSync(user.password, 10);
    },
    beforeUpdate: (user: User) => {
      if (user.changed('password')) {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  }
});

export default User;