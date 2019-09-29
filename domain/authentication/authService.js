/**
 * authentication service.
 * This file handles all the business logic of authentications.
 * 
 * @module AuthenticationService
 */

import { Service } from '../core/service'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../../infra/env'

class AuthService extends Service {
  constructor() {
    super();
  }

  async comparePassword(passwordGiven, passwordStored) {
    return await bcrypt.compare(passwordGiven, passwordStored);
  }

  async hashPassword(passwordGiven) {
    return await bcrypt.hash(passwordGiven, 8);
  }

  async generateToken(id) {
    return jwt.sign({ id: id }, env.PASSWORD_SECRET, {
        expiresIn: 86400, // expires in 1 day
      });
  }
}

export const authService = new AuthService();