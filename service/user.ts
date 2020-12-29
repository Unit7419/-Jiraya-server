const fs = require('fs')

const dir =
  process.env.NODE_ENV === 'localhost'
    ? // 本地DEBUG向当前目录下写文件
      './7419-images.json'
    : '/root/christian/user-admin/7419-images.json'

module.exports.check_user = (params = {}) => {
  const { name: n, password: p } = params as { name; password }

  try {
    const buffer = fs.readFileSync(dir)
    const userData = JSON.parse(buffer.toString())
    const status = userData.users.some(
      ({ name, password }) =>
        //
        name === n && password === p
    )
    const msg = status
      ? //
        'Verified successfully!'
      : 'Verified failed.'

    return {
      status,
      msg,
    }
  } catch (error) {
    return {
      status: false,
      msg: 'Verified failed.',
      stack: error,
    }
  }
}

export {}
