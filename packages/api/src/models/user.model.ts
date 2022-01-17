import { DataTypes, Model, Optional } from 'sequelize';
import database from '../config/database';

interface UserAttributes {
  id: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = database.define<UserInstance>('user', {
  id: {
    type: DataTypes.UUID
  }
});

export default User;
