// import getRawBody from 'raw-body'
const getRawBody = require('raw-body')

const { read_photos, write_photos } = require('../service/images')

module.exports = {
  get_photos: ctx => {
    ctx.response.body = read_photos()
  },

  upload_photos: async (ctx, next) => {
    const file = await getRawBody(ctx.req)

    const bufferStream = require('stream').PassThrough()
    const writeStream = fs.createWriteStream(`./file.jpg`)
    bufferStream.end(file)
    bufferStream.pipe(writeStream)

    require('fs').writeFileSync('./a.jpg', file)
    try {
      write_photos(file)

      ctx.response.body = { msg: 'Success' }
    } catch (msg) {
      ctx.response.body = { msg }
    }
  },
}
