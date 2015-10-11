var Hapi = require('hapi');
var fs   = require('fs');
var infile = __dirname + '/senpai.txt'

var list = fs
  .readFileSync(infile, 'utf8')
  .split("\n")
  .map(function(element) { return element.trim() })

var notice = function() {
    return list[Math.floor(Math.random() * list.length)];
};

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(notice());
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
