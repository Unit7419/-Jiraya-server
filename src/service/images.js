const fs = require('fs')
const dir =
  process.env.NODE_ENV === 'development'
    ? // 本地DEBUG向当前目录下写文件
      './'
    : '/root/christian/7419-images/photos'

module.exports.read_photos = () => {
  try {
    // return fs.readdirSync('../7419-images/photos')
    return fs.readdirSync(dir)
  } catch (e) {
    return []
  }
}

module.exports.write_photos = params => {
  const { base64, name } = params || {}

  try {
    const path = `${dir}/${name}.jpg`
    const buffer = Buffer.from(base64.replace(/^ *data:image\/\w+;base64,/, ''), 'base64')

    fs.writeFileSync(path, buffer)

    return {
      msg: 'success',
    }
  } catch (e) {
    return `Error: ${JSON.stringify(e)} ${name} ${base64}`
  }
}
