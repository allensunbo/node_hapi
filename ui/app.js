var app = angular.module('app', []);
app.controller('MainCtrl', function($scope, UserService) {


});

app.service('UserService', function($log, $timeout, $q) {
	return {
		getAllUsers: function() {
			$log.info('begin loading users ...');
			var defer = $q.defer();
			$timeout(function() {
				defer.resolve([{
					'name': 'alex'
				}, {
					'name': 'john'
				}]);
				$log.info('end loading users ...');
			}, 1000);
			return defer.promise;
		}
	}
});

app.directive('userList', function(UserService) {
	return {
		restrict: 'E',
		scope: {
			load: '&load'
		},
		template: '<button ng-click="load()">Load Users</button><ul> <li ng-repeat="user in users"> <input type="text" ng-model="user.name"/> </li></ul>',
		link: function(scope, element, attributes, controller) {

		},
		controller: function($scope) {
			$scope.load = function() {
				UserService.getAllUsers().then(function(data) {
					$scope.users = data
				}, function() {

				});
			}
		}
	}
});