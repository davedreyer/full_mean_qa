var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 10},
	description: {type: String, required: false},
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	_username: {type: String, required: true},
	_answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
})	
mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');