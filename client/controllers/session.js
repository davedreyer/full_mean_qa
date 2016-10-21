myApp.controller('sessionController', function ($scope, $location, sessionFactory){
	$scope.login = function () {
		if(!$scope.logReg || $scope.logReg.name.length < 3) {
			alert("Name must be at least 3 characters!");
		}
		else {
			sessionFactory.login($scope.logReg);
		}
	}

	sessionFactory.checkUser(function(returnedUser) {
		$scope.currUser = returnedUser.user;
		if(!$scope.currUser) {
			$location.url('/');
		}
	})
})