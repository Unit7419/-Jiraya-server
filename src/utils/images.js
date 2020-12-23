const fs = require('fs')

module.exports.read_photos = () => {
  try {
    return fs.readdirSync('../7419-images/photos')
  } catch (e) {
    return []
  }
}
