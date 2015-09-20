'use strict'

var express = require('express'),
	posts = require('./mock/posts.json');
var app = express(); //

/*
a route is a url, it's the path the user takes to access the data on the server, 

a route is also called an endpoint, and gives the instructions to trigger a set of programming

home route or root directory is '/'

the client: the device that's used to visit the website, like the web browser

if you make any changes on the server side code, to see those changes, you have to restart the server (type  ctrl + c in terminal)
*/
app.get('/', function(req, res){ //req = request, res = response
	res.send('<h1>I am loving this course</h1'); // when the server is started, see localhost:3000 to see this html
	//first parameter: location parameter
});
//view all posts
app.get('/blog/', function(req, res){
	res.send(posts);
});
//view a single post
app.get('/blog/:title', function(req, res){
	var title = req.params.title;
	var post = posts[title];
	res.send(post);
});

app.listen(3000, function(){ //start the app by typing node src/app.js, you can also type node src/app
	console.log("The frontend server is running on port 3000");
});