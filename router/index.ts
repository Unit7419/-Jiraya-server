const router = require('koa-router')({
  prefix: '/api',
})
const koaBody = require('koa-body')

const galleryRouter = require('./gallery')

module.exports = app => {
  app.use(router.routes())
  app.use(router.allowedMethods())

  galleryRouter(router)
}
