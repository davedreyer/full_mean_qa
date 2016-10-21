var session = require('./../controllers/sessions.js');
var qa = require('./../controllers/qa.js');

module.exports = function (app) {
	app.post('/login', function(req, res) {
		session.login(req, res);
	});
	app.get('/checkUser', function(req, res) {
		session.checkUser(req, res);
	});
	app.get('/logout', function(req, res) {
		session.logout(req, res);
	});
	app.get('/questions/show_all', function(req, res) {
		qa.getQuestions(req, res);
	});
	app.get('/question/:id', function(req, res) {
		qa.getQuestion(req, res);
	});
	app.get('/like/:id', function(req, res) {
		qa.like(req, res);
	});
	app.post('/question/new', function(req, res) {
		qa.newQuestion(req, res);
	});
	app.post('/answer/:id', function(req, res) {
		qa.newAnswer(req, res);
	});
}	