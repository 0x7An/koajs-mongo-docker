import { createServer } from './src/app/application'
import { logger } from './src/infra/logger'
import { env } from './src/infra/env'

createServer().then(
  app =>
    app.listen(env.PORT, () => {
      const mode = env.NODE_ENV
      logger.debug(`Server listening on ${env.PORT} in ${mode} mode`)
    }),
  err => {
    logger.error('Error while starting up server', err)
    process.exit(1)
  }
)
