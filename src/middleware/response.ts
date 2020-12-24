const response = (): any => {
  return async (ctx, next) => {
    try {
      ctx.set('Content-Type', 'application/json')
      await next()
    } catch (e) {
      ctx.body = {
        msg: e,
      }
    }
  }
}

module.exports = response()
