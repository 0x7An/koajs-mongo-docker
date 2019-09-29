/**
 * Application file
 * This is the application file, where we return an koajs server with middlewares.
 * 
 * @module Application
 */

import mongoose from '../infra/database/mongoose'
import * as http from 'http'
import Koa from 'koa'
import cors from '@koa/cors'
import respond from 'koa-respond'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import { logger } from '../infra/logger'
import { notFoundHandler } from './middlewares/not-found'
import { errorHandler } from './middlewares/error-handler'
import router from './routes'
/**
 * Creates and returns a new Koa application.
 * Does *NOT* call `listen`!
 *
 * @return {Promise<http.Server>} The configured app.
 */
export async function createServer() {
  logger.debug('Creating server...')
  const app = new Koa()

  app
    // Top middleware is the error handler.
    .use(errorHandler)
    // Compress all responses.
    .use(compress())
    // Adds ctx.ok(), ctx.notFound(), etc..
    .use(respond())
    // Handles CORS.
    .use(cors())
    // Parses request bodies.
    .use(bodyParser())
    // routes
    .use(router.routes())
    // Default handler when nothing stopped the chain.
    .use(notFoundHandler)

  // Creates a http server ready to listen.
  const server = http.createServer(app.callback())

  // Add a `close` event listener so we can clean up resources.
  server.on('close', () => {
    logger.debug('Server closing, bye!')
  })

  logger.debug('Server created, ready to listen', { scope: 'startup' })
  return server
}
