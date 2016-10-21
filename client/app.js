var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'sessionController'
	})
	.when('/question', {
		templateUrl: 'partials/question.html',
		controller: 'qaController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'qaController'
	})
	.when('/question/:questionid/new_answer', {
		templateUrl: 'partials/new_answer.html',
		controller: 'qaController'
	})	
	.when('/question/:questionid/show', {
		templateUrl: 'partials/showquestion.html',
		controller: 'qaController'
	})
	.otherwise({
		redirectTo: '/'
	})
});