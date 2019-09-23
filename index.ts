import { createHttpServer } from './src/app'
import { Environment } from './src/config/environments'
import { getLocalIP, log } from './src/helpers'

module.exports = (() => {
  try {
    createHttpServer().listen(Environment.port, () =>
      log(
        `\n     Server is listening on ${getLocalIP()}:${
          Environment.port
        }, in ${Environment.identity} mode. \n`,
        'cyan'
      )
    )
  } catch (e) {
    console.log(e)

    process.exit(1)
  }
})()
