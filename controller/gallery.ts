const fs = require('fs')
const { read_photos, write_photos, rename_photos, solveImageBlob } = require('../service/images')

module.exports = {
  get_photos: async (ctx, next) => {
    await next()
    ctx.response.body = read_photos()
  },

  upload_photos: async (ctx, next) => {
    await next()

    try {
      await rename_photos(await write_photos(await solveImageBlob(ctx)))
      ctx.response.body = { msg: 'Success!' }
    } catch (msg) {
      ctx.response.body = { msg }
    }
  },
}
