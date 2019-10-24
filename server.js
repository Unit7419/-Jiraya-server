const process = require('child_process')

process.exec('NODE_ENV=development ./node_modules/.bin/nodemon ./index.ts')
