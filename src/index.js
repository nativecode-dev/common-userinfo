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
  const exec = require('child_process').execSync
  const username = exec('whoami').toString().trim()
  module.exports = {
    uid: parseInt(exec('eval echo `id -u $USER`').toString().trim()),
    gid: parseInt(exec('eval echo `id -g $USER`').toString().trim()),
    username: username,
    homedir: exec('eval echo ~$USER').toString().trim(),
    shell: exec('eval echo $SHELL').toString().trim()
  }

}
