import User from '../../models/user.model';

export interface UserServiceInterface {
  findOne({ email, username }: { email: string; username: string }): Promise<User | null>;

  create({
    email,
    username,
    password
  }: {
    email: string;
    username: string;
    password: string;
  }): Promise<User>;
}
