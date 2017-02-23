const os = require('os')

if (os.userInfo) {

  // Bail if we already can access userInfo function.
  module.exports = os.userInfo()

} else if (os.platform() === 'win32') {

  // If we're on Windows, we'll grab the necessary info from environment variables.
  const process = require('process')
  module.exports = {
    uid: -1,
    gid: -1,
    username: process.env.USERNAME,
    homedir: process.env.HOME,
    shell: null
  }

} else {

  // If we're on POSIX systems, we'll shell out and use native calls.
  const path = require('path')
  const exec = require('child_process').execSync

  const script = path.join(__dirname, 'userinfo.sh')
  const info = exec(`/bin/sh ${script}`).toString().split('\n')

  module.exports = {
    uid: info[1],
    gid: info[2],
    username: info[0],
    homedir: info[3],
    shell: info[4]
  }

}
