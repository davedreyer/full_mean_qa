myApp.factory('sessionFactory', ['$http', '$location', function($http, $location) {
	var factory = {};

		factory.login  = function(user, callback) {
			$http.post('/login', user).then(function (returnedUser) {
				if (returnedUser.data.status) {
					$location.url('/dashboard');
				}	
				else {
					alert("Something went wrong!");
				}
			});
		}

		factory.checkUser = function(callback) {
			$http.get('/checkUser').then(function (returnedUser) {
				callback(returnedUser.data);
			})
		}

	return factory;
}])