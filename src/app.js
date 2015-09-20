'use strict'
var express = require('express');
var app = express();

app.get('/', function(req, res){ //req = request, res = response
	res.send('<h1>get request</h1'); // type node app.js from terminal and visit localhost:3000 to see this html

})

app.listen(3000, function(){
	console.log("The frontend server is running on port 3000");
});