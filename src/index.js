const os = require('os')

switch (os.platform()) {
  case 'win32':
    const process = require('process')
    module.exports = {
      gid: -1,
      homedir: process.env.HOME,
      uid: -1,
      username: process.env.USERNAME
    }
    break;

  default:
    if (os.userInfo) {
      module.exports = os.userInfo()
    } else {
      const exec = require('child_process').execSync
      const username = exec('whoami').toString().trim()
      module.exports = {
        gid: exec('eval echo `id -g $USER`').toString().trim(),
        homedir: exec('eval echo ~$USER').toString().trim(),
        uid: exec('eval echo `id -u $USER`').toString().trim(),
        username: username
      }
    }
    break;
}

console.log(module.exports)
