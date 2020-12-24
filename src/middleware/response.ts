const response = (): any => {
  return async (ctx, next) => {
    await next()
    ctx.set('Content-Type', 'application/json')
  }
}

module.exports = response()
