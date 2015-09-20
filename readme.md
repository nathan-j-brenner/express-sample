https://github.com/robbyrussell/oh-my-zsh awsome commandline tool that shows what branch you're on  
npm init: creates a node project, adds in package.json  
npm install express --save: saves the installed package in the package.json  
npm install express: express loads just locally in node modules folder  
.gitignore: you don't track node_modules with git  
src dir: used to store application files  
'use strict': save from common mistakes by throwing an error if you make one, check out http://teamtreehouse.com/library/the-javascript-use-strict-statement

HTTP Treehouse Workshop: https://teamtreehouse.com/library/http-do-you-get-it
HTTP Request Methods: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
The listen method: http://expressjs.com/4x/api.html#app.listen
The get method: http://expressjs.com/4x/api.html#app.get.method
HTTP Status Codes (e.g. 404 - Page not found): https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

routes: tell the server what to do when a user visits a different url

software development: more iterative than linear
	linear would mean that you know what you want to write, so you sit down and write it all out
	iterative means you know what you want to accomplish, but you don't know how to accomplish every aspect of it yet

nodemon: a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.  
to start: nodemon src/app

node-inspector: interactively debugging node processes, lets you debug node apps in the browser, to run: node-debug src/app.js