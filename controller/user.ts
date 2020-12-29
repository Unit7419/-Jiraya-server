const { check_user } = require('../service/user')

module.exports = {
  check_user: async (ctx, next) => {
    await next()

    const result = check_user(ctx.request.body)

    if (result.status) {
      ctx.body = {
        msg: 'Verified successfully!',
        status: true,
      }

      return
    }

    ctx.body = result
  },
}
