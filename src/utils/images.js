const fs = require('fs')

module.exports.read_photos = () => {
  try {
    return fs.readdirSync('../7419-images/photos')
  } catch (e) {
    return []
  }
}

module.exports.write_photos = ({ base64, name }) => {
  try {
    const path = `../7419-images/photos/${name}.png`
    const dataBuffer = Buffer(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64')

    if (Buffer.isBuffer(dataBuffer)) {
      fs.writeFile(path, dataBuffer, function(err) {
        //用fs写入文件
        if (err) {
          return {
            code: 500,
            msg: 'Write file failed.',
          }
        }

        return {
          code: 200,
          msg: '',
        }
      })
    }
  } catch (e) {
    return []
  }
}
