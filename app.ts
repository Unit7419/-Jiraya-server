import * as Koa from 'koa'
import * as cors from 'koa2-cors'

const path = require('path')
const log4js = require('koa-log4')
const body = require('koa-body')
const router = require('./router')
const middleWare = require('./middleware')

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'access.log'),
    },
    accessTrace: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'trace.log'),
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'application.log'),
    },
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    accessTrace: { appenders: ['accessTrace'], level: 'info' },
    application: { appenders: ['application'], level: 'WARN' },
  },
})

export const createHttpServer = () => {
  const app = new Koa()
  const appLogger = log4js.getLogger('application')
  const traceLogger = log4js.getLogger('accessTrace')
  const accessLogger = () => log4js.koaLogger(log4js.getLogger('access'));

  app.context.traceLogger = traceLogger
  app.context.logger = appLogger
  app.context.log4js = log4js

  app.on('error', err => {
    appLogger.error(err)
  })

  app.use(accessLogger())
  app.use(body())
  app.use(cors())
  middleWare(app)
  router(app)

  return app
}
