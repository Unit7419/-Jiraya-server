const fs = require('fs')
const formidable = require('formidable')

const dir =
  process.env.NODE_ENV === 'localhost'
    ? // 本地DEBUG向当前目录下写文件
      './'
    : '/root/christian/7419-images/photos'

export {}

module.exports.read_photos = () => {
  try {
    // return fs.readdirSync('../7419-images/photos')
    return fs.readdirSync(dir)
  } catch (e) {
    return []
  }
}

module.exports.write_photos = params => {
  const { file, name } = params || {}
  const path = `${dir}/${name}.jpg`

  const buffer = fs.readFileSync(file.path)
  fs.writeFileSync(path, buffer)
}

module.exports.solveImageBlob = ctx =>
  new Promise(async (resolve, reject) => {
    const form = new formidable.IncomingForm()

    await form.parse(ctx.req, async function (err, fields, files) {
      try {
        if (err) {
          reject({
            msg: 'File pasrse error.',
            stack: err,
          })
        }

        resolve({ file: files.file, name: fields.name })
      } catch (msg) {
        reject({ stack: msg, msg: 'Error caption.' })
      }
    })
  })
