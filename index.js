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
	path: '/users',
	handler: function(request, reply) {
		var users = userService.allUsers();
		var result = [];
		for (var p in users) {
			result.push({
				'name': users[p].name,
				'email': users[p].email
			});
		}
		reply(result);
	}
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