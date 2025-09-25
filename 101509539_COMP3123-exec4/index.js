var express = require('express');

const SERVER_PORT = 3000;
var app = express();

app.use(express.json());


// GET /hello
app.get('/hello', function(req, res) {
    res.send('hellooowww');
});

// Returns Hello Express JS as plain text.

// GET /user (query parameters)

// Accepts query string parameters: ?firstname=<value>&lastname=<value>.

// If parameters are not provided, default to firstname = "Pritesh" and lastname = "Patel".
// Example request: GET /user?firstname=John&lastname=Doe

// Example response:

// { "firstname": "John", "lastname": "Doe" }
// POST /user/:firstname/:lastname (path parameters)

// Expects path parameters for firstname and lastname.

// Example request: POST /user/John/Doe

// Example response:

// { "firstname": "John", "lastname": "Doe" }
// POST /users (body – array of users)

// Expects a JSON array in the request body, each item with firstname and lastname.





app.listen(SERVER_PORT, function() {
    console.log('Server is running on http://localhost:' + SERVER_PORT);
});