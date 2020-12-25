const os = require('os')
const chalk = require('chalk')

export function getLocalIP() {
  var interfaces = os.networkInterfaces()

  for (const devName in interfaces) {
    var iface = interfaces[devName]

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]

      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      )
        return alias.address
    }
  }
}

export const log = (txt: string, color: string = 'green'): void =>
  console.log(chalk[color](txt))
