const chalk = require('chalk')

const log = (txt: string, color: string = 'green'): void => console.log(chalk[color](txt))

const logger = (): any =>  {
  return async (ctx, next) => {
    const start = Date.now()

    await next()

    const responseTime = (Date.now() - start)

    log(`${ctx['method']}: ${ctx['url']}`)
    log(`response: ${responseTime / 1000}s from device: ${ctx['header']['user-agent']}`)
    log('\n')
  }
}

module.exports = logger()