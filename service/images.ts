const fs = require('fs')
const { promisify } = require('util')
const formidable = require('formidable')
const sizeOf = promisify(require('image-size'))

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

module.exports.write_photos = async params => {
  const { file, name } = params || {}
  const path = `${dir}/${name}`

  const buffer = fs.readFileSync(file.path)
  fs.writeFileSync(path, buffer)

  return { dir, name, path }
}

module.exports.rename_photos = async ({ dir, name, path }) => {
  const { width, height, type } = await sizeOf(path)
  const temp = name.split('.')
  temp.pop()
  const real = `${temp.join('.')}&wh=${width}*${height}`

  fs.rename(path, `${dir}/${real}.${type}`, e => console.log('修改完毕'))
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
