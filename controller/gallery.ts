const fs = require('fs')
const { read_photos, write_photos, rename_photos, solveImageBlob } = require('../service/images')

module.exports = {
  get_photos: async (ctx, next) => {
    await next()

    const { method, body, url, header } = ctx.request

    ctx.traceLogger.info({
      method,
      body,
      url,
      header,
    })
    ctx.response.body = read_photos()
  },

  upload_photos: async (ctx, next) => {
    await next()
    const { method, body, url, header } = ctx.request

    ctx.traceLogger.info({
      method,
      body,
      url,
      header,
    })

    try {
      await rename_photos(await write_photos(await solveImageBlob(ctx)))
      ctx.response.body = { msg: 'Success!' }
    } catch (msg) {
      ctx.response.body = { msg }
      ctx.logger.error({ msg })
    }
  },
}
