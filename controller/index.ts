const fs = require('fs')
const formidable = require('formidable')
const { read_photos, write_photos } = require('../service/images')

module.exports = {
  get_photos: async (ctx, next) => {
    await next()
    ctx.response.body = read_photos()
  },

  upload_photos: async (ctx, next) => {
    await next()

    try {
      const form = new formidable.IncomingForm()

      await form.parse(ctx.req, async function (err, fields, files) {
        try {
          if (err) {
            ctx.response.body = { msg: err }
          }

          await write_photos({ file: files.file, name: fields.name })

          ctx.response.body = { msg: 'Success', file: files.file, name: fields.name }
        } catch (msg) {
          ctx.response.body = { msg }
        }
      })
    } catch (msg) {
      ctx.response.body = { msg }
    }
  },
}
