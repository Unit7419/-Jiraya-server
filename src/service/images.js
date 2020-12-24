const fs = require('fs')

module.exports.read_photos = () => {
  try {
    // return fs.readdirSync('../7419-images/photos')
    return fs.readdirSync('/root/christian/7419-images/photos')
  } catch (e) {
    return []
  }
}

module.exports.write_photos = params => {
  const { base64, name } = params || {}

  try {
    const path = `/root/christian/7419-images/photos/${name}.jpg`
    const buffer = Buffer.from(base64.replace(/^ *data:image\/\w+;base64,/, ''), 'base64')

    fs.writeFileSync(path, buffer)

    return {
      msg: 'success',
    }
  } catch (e) {
    return `Error: ${JSON.stringify(e)} ${name} ${base64}`
  }
}
