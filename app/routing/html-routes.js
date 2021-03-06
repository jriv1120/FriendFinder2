/*Your html-routes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default USE route that leads to home.html which displays the home page.*/

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var express = require('express');
var app = express();

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/survey', function(req,res) {
   		res.sendFile(path.join(__dirname, '../public', 'survey.html'));
	});

	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname, '../public', 'home.html'))
	});

}