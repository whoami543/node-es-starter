import config from './config'
import express from 'express'
import http from 'http'
import logger from './utils/logger'

const { port } = config

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const server = http.createServer(app)

server.listen(port, () =>
  logger.info(`Server running on ${port}`)
)

export default server
