import { UserInstance } from '../../models/user.model';

export interface UserServiceInterface {
  findOne({ email, username }: { email: string; username: string }): Promise<UserInstance | null>;

  create({
    email,
    username,
    password
  }: {
    email: string;
    username: string;
    password: string;
  }): Promise<UserInstance>;
}
