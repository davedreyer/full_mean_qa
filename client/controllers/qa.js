myApp.controller('qaController', function ($scope, $location, $routeParams, qaFactory, sessionFactory){

	$scope.newQuestion = {};
	$scope.newAnswer = {}

	$scope.addQuestion = function () {
		if(!$scope.newQuestion.content || $scope.newQuestion.content < 10) {
			alert("Question must be at least 10 characters!");
		}
		else {
			qaFactory.question($scope.newQuestion, function () {
				checkQuestions();
				$location.url('/dashboard');
			})
		}
	}	

	$scope.addAnswer = function (questionId) {
		if(!$scope.newAnswer.content || $scope.newAnswer.content < 5) {
			alert("Answer must be at least 5 characters!");
		}
		else {
			qaFactory.answer(questionId, $scope.newAnswer, function (savedQuestion) {
				console.log(savedQuestion);
				checkQuestions();
				$location.url('/dashboard');
			})
		}
	}	

	function checkQuestions () {

	qaFactory.checkQuestions(function(returnedQuestions) {
		$scope.questions = returnedQuestions.data;
	})
	}

	sessionFactory.checkUser(function(returnedUser) {
		$scope.currUser = returnedUser.user;
		if(!$scope.currUser) {
			$location.url('/');
		}
	})
	

	function checkQuestion () {	

	qaFactory.showQuestion($routeParams['questionid'], function(returnedQuestion) {	
		$scope.questionCurrent = returnedQuestion;
		})
	}	

	if ($routeParams['questionid']) {

	checkQuestion();

	sessionFactory.checkUser(function(returnedUser) {
		$scope.currUser = returnedUser.user;
		if(!$scope.currUser) {
			$location.url('/');
		}
	})
	}

	$scope.like = function (answerId) {
		qaFactory.like(answerId, function () {
			checkQuestion();
		});
	}

	// function checkTopic () {	

	// topicsFactory.showTopic($routeParams['topicid'], function(returnedTopic) {	
	// 	$scope.topicCurrent = returnedTopic;
	// 	})
	// }	

	// if ($routeParams['topicid']) {

	// checkTopic();

	// sessionFactory.checkUser(function(returnedUser) {
	// 	$scope.currUser = returnedUser.user;
	// 	if(!$scope.currUser) {
	// 		$location.url('/');
	// 	}
	// })
	// }

	// if ($routeParams['userid']) {

	// userData();

	// sessionFactory.checkUser(function(returnedUser) {
	// 	$scope.currUser = returnedUser.user;
	// 	if(!$scope.currUser) {
	// 		$location.url('/');
	// 	}
	// })
	// }

	sessionFactory.checkUser(function(returnedUser) {
		$scope.currUser = returnedUser.user;
		if(!$scope.currUser) {
			$location.url('/');
		}
	})

	// function userData () {
	// topicsFactory.userData($routeParams['userid'], function(userData) {	
	// 	$scope.userData = userData;
	// 	})
	// }	

	

	// $scope.addAnswer = function (topicId) {
	// 	topicsFactory.answer(topicId, $scope.answer, function () {
	// 		checkTopic();
	// 	});
	// }	

	// $scope.upVote = function (answerId) {
	// 	topicsFactory.upVote(answerId, $routeParams['topicid'], function () {
	// 		checkTopic();
	// 	});
	// }

	// $scope.downVote = function (answerId) {
	// 	topicsFactory.downVote(answerId, $routeParams['topicid'], function () {
	// 		checkTopic();
	// 	});
	// }

	// $scope.addComment = function (answerId, topicId, comment) {
	// 	var commentContent = {content: comment}
	// 	topicsFactory.comment(answerId, commentContent, topicId, function () {
	// 		checkTopic();
	// 	});
	// }	

	checkQuestions();

})