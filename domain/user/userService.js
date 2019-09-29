/**
 * User service.
 * This file handles all the business logic of users.
 * 
 * @module UserService
 */

import { usersRepository } from './userRepository'
import { authService } from '../authentication/authService'
import { Service } from '../core/service'

class UserService extends Service {
  constructor() {
    super();
    this.usersRepository = usersRepository;
  }

  async authenticate({ email, password }){
    let result = {}
    let user = await this.usersRepository.getUserByEmail(email)

    if (!user) {
      result.data = 'This email is not registered'
      result.status = 409
      return result
    }

    let validPassword = await authService.comparePassword(password, user.password)
    
    if (!validPassword){
      result.data = 'Wrong password'
      result.status = 200
      return result
    } 

    result.data = { 
      message: 'Authenticated!', 
      token: await authService.generateToken(user.email)
    }
    result.status = 200
    return result
  }

  async getAllUsers() {
    let result = {}
    result.data = await this.usersRepository.getAllUsers();
    result.status = result.data ? 200 : 500
    return result;
  }

  async getUserById(id) {
    let result = {}
    result.data = await this.usersRepository.getUserById(id)
    result.status = result.data ? 200 : 500
    return result
  }

  async getUserByEmail(email) {
    let result = {}
    result.data = await this.usersRepository.getUserByEmail(email)
    result.status = result.data ? 200 : 500
    return result
  }

  async createUser({ name, email, password }) {
    let result = {}
    
    if (await this.usersRepository.getUserByEmail(email)) {
      result.status = 409
      result.data = "This email is already registered"
      return result
    }

    let passwordHashed = await authService.hashPassword(password)
    result.data = await this.usersRepository.createUser({ name, email, password: passwordHashed });
    result.status = result.data ? 200 : 500
    return result;
  }

  async updateUser({ id, name, email, password }) {
    let result = {}
    result.data = await this.usersRepository.updateUser({ id, name, email, password });
    result.status = result.data ? 200 : 500
    return result;
  }

  async destroy(id) {
    let result = {}
    result.data = await this.usersRepository.destroy(id);
    result.status = result.data ? 200 : 500
    return result;
  }
}

export const userService = new UserService();
