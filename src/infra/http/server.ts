import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { handle } from '../utils/error'
import { logger } from '../utils/logger'
import pinoHttp from 'pino-http'
import { createHttpTerminator } from 'http-terminator'
import { 
  aircraftRouter, 
  classRouter, 
  instructorRouter, 
  pilotRouter, studentRouter } from './routes'



async function initServer(){
  const PORT = process.env.PORT
  const ADDRESS = process.env.ADDRESS

  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(pinoHttp({ logger }))

  app.use('/aircraft', aircraftRouter)
  app.use('/class', classRouter)
  app.use('/pilot', pilotRouter)
  app.use('/student', studentRouter)
  app.use('/instructor', instructorRouter)

  const server = app.listen(PORT,() => {
    
    logger.info(
      `Server running in address http://${ADDRESS}:${PORT} on ${process.env.NODE_ENV}environment`
    )
  })

  process.on('unhandledRejection', (err) => {
    throw err
  })
  process.on('uncaughtException', (err) => {
      handle(err)
    })

  const httpTerminator = createHttpTerminator({ server })

  enum shutdownSignals {
    SIGHUP = 'SIGHUP',
    SIGINT = 'SIGINT',
    SIGTERM = 'SIGTERM'
  }

  Object.values(shutdownSignals)
    .forEach(signal => {
      process.on(signal, async() => {
        logger.info(`${signal} received, server turning off...`)
    await httpTerminator.terminate()
      })
    })
}

initServer()


