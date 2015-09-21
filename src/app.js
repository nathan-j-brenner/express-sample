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

//these two lines lets you render with jade templates
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){ //req = request, res = response
	// res.send('<h1>I am loving this course</h1'); // when the server is started, see localhost:3000 to see this html
	//first parameter: location parameter
	res.render('index');
});
//view all posts
// app.get('/blog/', function(req, res){
// 	res.send(posts);
// 	//send is good to send a string or a json object, sendFile is good to send a file to the client
// 	//good to set response headers manually
// });
//view a single post
app.get('/blog/:title?', function(req, res){ //the ? tells express that the parameter is optional
	var title = req.params.title;
	if(title===undefined){
		res.status(503); //search engines are refurred to as bots sometimes also see this status code
		res.send("This page is under construction");
	} else{
		var post = posts[title] || {};
		// res.send(post);
		res.render('post', {post: post});
	}
});

app.listen(3000, function(){ //start the app by typing node src/app.js, you can also type node src/app
	console.log("The frontend server is running on port 3000");
});