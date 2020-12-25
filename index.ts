import { createHttpServer } from './app'
import { Environment } from './config/environments'
import { getLocalIP, log } from './helpers'

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
