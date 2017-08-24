var express = require('express');
var path = require("path")
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render("index");
});

app.listen(3000, function(){
	console.log("on port 3000");
});