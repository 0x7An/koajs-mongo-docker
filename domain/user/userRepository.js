/**
 * Users repository.
 * This module handle all requests with the Users Collection in mongo databases.
 * 
 * @module usersRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const User = mongoose.model('User')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result 
  } catch (error) {
    logger.error(error, { scope: 'Mongo Repository' })
    return null;
  }
}

export const usersRepository = {
    getAllUsers : async () => handleMongoQuery(User.find({})),
    getUserById : async (id) => handleMongoQuery(User.findById(id)),
    getUserByEmail: async (email) => handleMongoQuery(User.findOne({ "email": email })),
    createUser: async (userData) => handleMongoQuery(User.create(userData)),
    updateUser: async ({ id, name, email, password }) => handleMongoQuery(User.findByIdAndUpdate(id, { name, email, password }, { new: true })),
    destroy: async (id) => handleMongoQuery(User.findByIdAndRemove(id))
  };