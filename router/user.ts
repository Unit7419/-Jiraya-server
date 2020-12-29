const UserController = require('../controller/user')

module.exports = router => {
  router.post('/user/check', UserController.check_user)
}
