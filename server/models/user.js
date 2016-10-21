var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema( {
	name: {type:String, required: true},
	_comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
	_answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
	_topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');