const fs = require('fs')

export const read_photos = () => {
  try {
    return fs.readdirSync('../7419-images/photos')
  } catch (e) {
    return []
  }
}
