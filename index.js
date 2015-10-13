var list = require('fs')
  .readFileSync(__dirname + '/senpai.txt', 'utf8')
  .split('\n')
  .map(function (line) { return line.trim() })

module.exports = function () {
  return list[Math.floor(Math.random() * list.length)]
}
