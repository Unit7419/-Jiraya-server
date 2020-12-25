import * as Koa from 'koa'
import * as cors from 'koa2-cors'

const bodyParser = require('koa-body')
const router = require('./router')
const middleWare = require('./middleware')

export const createHttpServer = () => {
  const app = new Koa()

  app.use(bodyParser())
  app.use(cors())
  middleWare(app)
  router(app)

  return app
}
