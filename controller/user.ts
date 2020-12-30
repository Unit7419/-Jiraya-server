const { check_user } = require('../service/user')

module.exports = {
  check_user: async (ctx, next) => {
    await next()

    const { method, body, url, header } = ctx.request

    ctx.traceLogger.info({
      method,
      body,
      url,
      header,
    })

    const result = check_user(ctx.request.body)

    if (result.status) {
      ctx.body = {
        msg: 'Verified successfully!',
        status: true,
      }

      return
    }

    ctx.logger.error(result)
    ctx.body = result
  },
}
