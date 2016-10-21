var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

		login: function (req, res) {
			User.findOne({name:req.body.name}, function (err, user) {
				if(!user) {
						var user = new User(req.body);
						user.save(function (err, data) {
						if (err) {
							return res.json({status:false});
						} else {
							req.session.user = data;
							req.session.save();
							return res.json({status:true, user: data})
						}	
						});
						}

				else {

						req.session.user = user;
						req.session.save();	
						return res.json({status:true, user: user})
				}			

			})
		},

		checkUser: function (req, res) {
			if(req.session.user) {
				res.json({status: true, user: req.session.user});	
			} else {
				res.json({status: false});
			}
		},

		logout: function(req, res) {
			req.session.destroy();
			res.redirect('/');
		}
	}