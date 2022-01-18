import { Request, Response } from 'express';
import userService from '../services/user.service';

// import emailService from '../services/email.service';

const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { email, username, password } = req.body;
      const existingUser = await userService.findOne({ email, username });

      if (existingUser?.getDataValue('username') === username) {
        return res.json({ message: 'Username already exists' });
      }

      if (existingUser) {
        // error
        console.log('existing user', existingUser);
        return res.json({ success: true });
      }

      const user = await userService.create({ email, username, password });

      // const emailToken = await emailService.sendEmail(user.email);

      return res.json({ user });
    } catch (error) {
      console.log(error);

      return res.json({ error });
    }
  }
};

export default authController;

/*

  register
   -> if success send email
   -> try to log in without verifying send to verify form
  
*/
