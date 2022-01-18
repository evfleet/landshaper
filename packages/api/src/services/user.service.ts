import { Op } from 'sequelize';
import { UserServiceInterface } from '../interfaces/services/user.interface';
import database from '../loaders/sequelize';

const userService: UserServiceInterface = {
  findOne: async ({ email, username }) => {
    return database.User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });
  },

  create: async ({ email, username, password }) => {
    return database.User.create({ email, username, password });
  }
};

export default userService;
