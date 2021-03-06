/*Your api-routes.js file should include two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.*/

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on friend-data.
// ===============================================================================

var path = require('path');
var express = require('express');
var app = express();

//var friendData = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friend', function(req, res){
		res.send("FriendPage");
	});

}


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	//app.post('/api/tables', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		//if(tableData.length < 5 ){
			//tableData.push(req.body);
			//res.json(true); // KEY LINE
		//}

		// Or false if they don't have a table
		//else{
			//waitListData.push(req.body);
			//res.json(false); // KEY LINE
		//}

	//});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	//app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		//tableData = [];
		//waitListData = [];

		//console.log(tableData);
	//})
//}