var Hapi = require('hapi');
var userService = require('./userService.js');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function(request, reply) {
		console.log(userService.allUsers());
		reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});

// Start the server
server.start();