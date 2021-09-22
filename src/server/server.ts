import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { handle } from './utils/error'
import { logger } from './utils/logger'
import pinoHttp from 'pino-http'
import { createHttpTerminator } from 'http-terminator'

dotenv.config()
const PORT = process.env.PORT
const ADDRESS = process.env.ADDRESS
const app = express()

process.on('unhandledRejection', (err) => {
  throw err
})
process.on('uncaughtException', (err) => {
  handle(err)
})

app.use(cors)
app.use(express.json)
app.use(pinoHttp({ logger }))

const server = app.listen(PORT,() => {
  logger.info(
    `Servidor iniciado em http://${ADDRESS}:${PORT} em ambiente de ${process.env.NODE_ENV}`
  )
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
      logger.info(`${signal} recebido, encerrando o servidor...`)
  await httpTerminator.terminate()
    })
  })



