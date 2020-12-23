const fs = require('fs')
const justwinkDB = require('../db/justwink.message.board')
const MAX = 10000


export const justwinkMessageGet = () => justwinkDB

export const justwinkMessageSet= data => {
  if (justwinkDB.length > MAX) {
    justwinkDB.splice(-(MAX - 1))
  }

  justwinkDB.push(data)

  return justwinkDB
}

export const getGallery = () => {
  return 'http://47.100.219.10:7001/images/avatar.jpg'
}
