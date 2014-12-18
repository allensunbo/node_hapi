(function(angular) {
	var app = angular.module('app', []);
	app.controller('MainCtrl', function($scope, UserService) {
		var vm = this;
		vm.number1 = 2;
		vm.number2 = 3;
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

	app.directive('userList', function($log) {
		return {
			restrict: 'E',
			scope: {
				number: '=number'
			},
			templateUrl: 'user-list.html',
			link: function(scope, element, attributes, controller) {
				scope.load = controller.load;
				scope.topUser = undefined;
				scope.setTopUser = function(user) {
					controller.setTopUser(user);
					$log.info(controller.getTopUser());
				};
				scope.mystyle= attributes['mystyle'];
				$log.info(scope.mystyle);

			},
			controller: UserListController
		}
	});

	function UserListController($scope, UserService) {
		this.getTopUser = function() {
			return $scope.topUser;
		}

		this.setTopUser = function(user) {
			$scope.topUser = user;
		}

		this.load = function() {
			UserService.getAllUsers().then(function(data) {
				// you can also avoid the above issue here
				/*var usersClone = [];
				angular.copy(data.slice(0, scope.number), usersClone);
				scope.users = usersClone;*/

				$scope.users = data.slice(0, $scope.number);
			}, function(reason) {
				$log.error(reason);
			});
		};
	}

})(angular);