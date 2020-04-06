const MAX = 10000

const justwinkDB = require('../db/justwink.message.board')

export const justwinkMessageGet = () => justwinkDB

export const justwinkMessageSet= data => {
  if (justwinkDB.length > MAX) {
    justwinkDB.splice(-(MAX - 1))
  }

  justwinkDB.push(data)

  return justwinkDB
}
