module.exports = {
	allUsers: function() {
		users = [];
		for (var i = 0; i < 10; i++) {
			users.push({
				'name': 'user-' + i,
				'age': i
			});
		}
		return users;

	}
}