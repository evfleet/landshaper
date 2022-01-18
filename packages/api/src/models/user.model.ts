import bcrypt from 'bcrypt';
import { DataTypes, Model, ModelDefined, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  id: string;
  email: string;
  username: string;
  password: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export type UserModel = ModelDefined<UserAttributes, UserCreationAttributes>;

export type UserInstance = Model<UserAttributes, UserCreationAttributes>;

export default (sequelize: Sequelize) => {
  const User: UserModel = sequelize.define(
    'user',
    {
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
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate(user: any) {
          user.password = bcrypt.hashSync(user.password, 10);
        }
      }
    }
  );

  return User;
};
