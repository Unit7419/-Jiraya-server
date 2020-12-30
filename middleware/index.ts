const { shellLogger } = require('./logger')

module.exports = app => {
  app.use(shellLogger())
}
