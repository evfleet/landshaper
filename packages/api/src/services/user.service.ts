import { Op } from 'sequelize';
import { UserServiceInterface } from '../interfaces/services/user.interface';
import { User } from '../models';

const userService: UserServiceInterface = {
  findOne: async ({ email, username }) => {
    return User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });
  },

  create: async ({ email, username, password }) => {
    return User.create({ email, username, password });
  }
};

export default userService;
