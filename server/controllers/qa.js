var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = {

newQuestion: function(req, res) {
	var question = new Question({
		question: req.body.content, 
		description: req.body.description,
		_username: req.session.user.name,
		_user: req.session.user._id});
	question.save(function (err, returnedQuestion) {
		if (err) {	
		} else {	
		res.json(returnedQuestion);	
		}
	});
},

getQuestions: function (req, res) {
	Question.find({}, function(err, returnedQuestions) {
		if (err) {
		} else {
			res.json(returnedQuestions);
		}
	});
},

getQuestion: function (req, res) {
	Question.findOne({_id: req.params.id}).populate('_answers').exec( function(err, returnedQuestion) {
		if (err) {
		} else {
			res.json(returnedQuestion);
		}
	});
},

newAnswer: function(req, res) {
	var answer = new Answer({
		answer: req.body.content,
		support: req.body.description,
		_username: req.session.user.name,
		_user: req.session.user._id,
		_question: req.params.id});
	answer.save(function (err, returnedAnswer) {
		if (err) {	
		} else {
			Question.findOne({_id: req.params.id}, function(err, returnedQuestion){
				returnedQuestion._answers.push(returnedAnswer._id)
				returnedQuestion.save(function (err, savedQuestion) {
					res.json(savedQuestion);
				}) 
				})	
			}
		})
	},

	like: function (req, res) {
	Answer.findOne({_id: req.params.id}, function (err, returnedAnswer) {
		returnedAnswer.likes += 1;
		returnedAnswer.save(function (err, savedAnswer) {
			res.json(savedAnswer);
		})
	});
	},

// commentCreate: function(req, res) {
// 	var comment = new Comment({
// 		comment: req.body.content,
// 		_username: req.session.user.name,
// 		_user: req.session.user._id,
// 		_answer: req.params.id});
// 	comment.save(function (err, returnedComment) {
// 		if (err) {	
// 		} else {
// 			Answer.findOne({_id: returnedComment._answer}, function(err, returnedAnswer){
// 				returnedAnswer._comments.push(returnedComment);
// 				returnedAnswer.save(function (err, savedAnswer) {
// 					res.json(savedAnswer);
// 				}) 
// 				})	
// 			}
// 		})
// 	},	

// upVote: function (req, res) {
// 	Answer.findOne({_id: req.params.id}, function (err, returnedAnswer) {
// 		returnedAnswer.upvote += 1;
// 		returnedAnswer.save(function (err, savedAnswer) {
// 			res.json(savedAnswer);
// 		})
// 	});
// },

// downVote: function (req, res) {
// 	Answer.findOne({_id: req.params.id}, function (err, returnedAnswer) {
// 		returnedAnswer.downvote += 1;
// 		returnedAnswer.save(function (err, savedAnswer) {
// 			res.json(savedAnswer);
// 		})
// 	});
// },



// getUserData: function (req, res) {
// 	User.findOne({_id: req.params.id}, function (err, returnedUser) {
// 		if (err) {	
// 		} else {
// 			Topic.find({_user: req.params.id}, function(err, returnedTopics) {
// 				if (err) {
// 				} else {
// 					Answer.find({_user: req.params.id}, function(err, returnedAnswers) {
// 						if (err) {
// 						} else {
// 							Comment.find({_user: req.params.id}, function(err, returnedComments) {
// 								if (err) {	
// 								} else {
// 									res.json({
// 										'comments': returnedComments, 
// 										'answers': returnedAnswers, 
// 										'topics': returnedTopics,
// 										'user': returnedUser.name
// 									});
// 								}
// 							})	
// 						}	
// 					})
// 				}	
// 			})	
// 		}
// 	})
// },		

// getTopics: function (req, res) {
// 	Topic.find({}, function(err, returnedTopics) {
// 		if (err) {
// 		} else {
// 			res.json(returnedTopics);
// 		}
// 	});
// }

}
