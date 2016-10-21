var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	answer: {type: String, required: true, minlength: 5},
	support: {type: String, required: false},
	likes: {type: Number, default: 0},
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	_username: {type: String, required: true},
	_question: {type: Schema.Types.ObjectId, ref: "Question"}
})	
mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');