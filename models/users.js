var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	user: String,
	password: String
});

var User = module.exports = mongoose.model('users', userSchema, 'users');

module.exports.getUsers = function(callback){
	User.find(callback);
}