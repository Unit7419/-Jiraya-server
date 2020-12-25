const router = require('koa-router')()
const Controller = require('../controller')

module.exports = app => {
  app.use(router.routes())
  app.use(router.allowedMethods())

  router.get('/api/gallery/photos', Controller.get_photos)
  router.post('/api/gallery/upload', Controller.upload_photos)
}