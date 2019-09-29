/**
 * mongoose file.
 * This file connects and load all models to a mongo database.
 * 
 * @module mongoose
 */

import mongoose from 'mongoose'
import { logger } from '../logger'
import { env } from '../env'
import { UsersModel } from './models/userModel'

mongoose.connect(env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  logger.info(`Successful connected to mongo on ${env.MONGO_URI}`, { scope: 'startup' })

}).catch(err => {
    logger.error(`Error while connectting to mongo on ${env.MONGO_URI}`, err, { scope: 'startup' })
    process.exit(1)
})

export default mongoose