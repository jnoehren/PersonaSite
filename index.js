var express = require('express');
var path = require("path")
var app = express();
var mongoose = require('mongoose');

    /*        Controller Functions         */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render("index");
});

app.get('/login', function(req, res){
	res.render("login")
});


    /*         API Calls       */
User = require('./models/users')
mongoose.connect('mongodb://localhost/jenniesite');
var db = mongoose.connection;

app.get('/api/users', function(req, res){
	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users)
	});
});

app.listen(3000, function(){
	console.log("on port 3000");
});