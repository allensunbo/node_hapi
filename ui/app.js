var app = angular.module('app', []);
app.controller('MainCtrl', function($scope, UserService) {
	$scope.number1 = 2;
	$scope.number2 = 3;
});

app.service('UserService', function($log, $timeout, $q) {
	var users = [{
		'name': 'alex'
	}, {
		'name': 'john'
	}, {
		'name': 'smith'
	}, {
		'name': 'zoe'
	}];
	return {
		getAllUsers: function() {
			$log.info('begin loading users ...');
			var defer = $q.defer();
			$timeout(function() {
				var usersClone = [];
				// avoid two user-list directives changing the same data set!
				angular.copy(users, usersClone);
				defer.resolve(usersClone);
				$log.info('end loading users ...');
			}, 1000);
			return defer.promise;
		}
	}
});

app.directive('userList', function(UserService, $log) {
	return {
		restrict: 'E',
		scope: {
			number: '=number'
		},
		template: '<button ng-click="load()">Load Users</button><ul ng-repeat="user in users"> <li> <input type="text" ng-model="user.name"/> </li></ul>',
		link: function(scope, element, attributes, controller) {
			scope.load = function() {
				UserService.getAllUsers().then(function(data) {
					// you can avoid the above issue here
					/*var usersClone = [];
					angular.copy(data.slice(0, scope.number), usersClone);
					scope.users = usersClone;*/

					scope.users = data.slice(0, scope.number);
				}, function(reason) {
					$log.error(reason);
				});
			}
		},
		controller: function($scope) {

		}
	}
});