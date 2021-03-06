const exec = require('child_process').exec;

const ver = require('../package.json').version;

let hash;

module.exports.init = function () {
  exec('git rev-parse HEAD', (error, stdout) => {
    if (error != null) {
      hash = null;
      this.log.error("git's broken yo");
    }
    hash = stdout;
  });
};

module.exports.run = function (r, parts, reply) {
  reply(`${ver}: ${hash}`);
};

module.exports.commands = ['version'];
