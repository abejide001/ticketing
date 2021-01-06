import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class Password {
  static hashPassword(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  static comparePassword(hashPassword: any, password: any) {
    return bcrypt.compareSync(password, hashPassword);
  }
}