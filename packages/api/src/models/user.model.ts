import { DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  id: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export type UserModel = ModelDefined<UserAttributes, UserCreationAttributes>;

export default (sequelize: Sequelize) => {
  const User: UserModel = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  });

  return User;
};
