myApp.factory('qaFactory', ['$http', '$location', function($http, $location) {
	var factory = {};



		factory.question  = function(question, callback) {
			$http.post('/question/new', question).then(function (returnedQuestion) {
				console.log(returnedQuestion);
				callback();
				$location.url('/dashboard');
			});
		}

		factory.checkQuestions = function (callback) {
			$http.get('/questions/show_all').then(function (returnedQuestions) {
				callback(returnedQuestions);
			});
		}	

		factory.showQuestion = function (questionId, callback) {
			$http.get('/question/' + questionId).then(function (returnedQuestion) {
				question = returnedQuestion.data;
				callback(question);
			});	
		}

		factory.answer = function (questionId, answer, callback) {
			$http.post('/answer/' + questionId, answer).then(function () {
				callback();
			});
		}

		factory.like = function (answerId, callback) {
			$http.get('/like/' + answerId).then(function () {
				callback();
			});
		}

		// factory.userData = function (userId, callback) {
		// 	$http.get('/user/' + userId).then(function (returnedUser) {
		// 		var userData = {
		// 			topics: returnedUser.data.topics.length || 0, 
		// 			comments: returnedUser.data.comments.length || 0, 
		// 			answers: returnedUser.data.answers.length || 0,
		// 			name: returnedUser.data.user}
		// 		callback(userData);
		// 	});	
		// }

		

		// factory.comment = function (answerId, comment, topicId, callback) {
		// 	$http.post('/comment/' + answerId, comment).then(function (returnedAnswer) {
		// 		callback();
		// 	});
		// }

		// factory.upVote = function (answerId, topicId, callback) {
		// 	$http.get('/upvote/' + answerId).then(function () {
		// 		callback();
		// 	});
		// }

		// factory.downVote = function (answerId, topicId, callback) {
		// 	$http.get('/downvote/' + answerId).then(function () {
		// 		callback();
		// 	});
		// }


	return factory;
}])