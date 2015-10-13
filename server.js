var Hapi = require('hapi')
var noticeMe = require('./index.js')

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(noticeMe());
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
