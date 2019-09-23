import { log } from '../helpers'

const logger = (): any => {
  return async (ctx, next) => {
    const start = Date.now()

    await next()

    const responseTime = Date.now() - start

    log(`${ctx.method} ${ctx.host}${ctx.url}`)
    log(`Status ${ctx.response.status}`)
    log(`Response time: ${responseTime}ms`)
    log(`Device ${ctx.header['user-agent']}`, 'white')
    log('\n')
  }
}

module.exports = logger()
