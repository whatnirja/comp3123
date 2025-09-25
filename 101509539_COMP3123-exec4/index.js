var express = require('express');

const SERVER_PORT = 3000;
var app = express();

app.use(express.json());

app.get('/hello', function(req, res) {
    res.send('hellooowww');
});

app.get('/user', function(req, res) {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.json({ firstname: firstname, lastname: lastname });
});

app.post('/user/:firstname/:lastname', function(req, res) {
    // const firstname = req.params.firstname;
    // const lastname = req.params.lastname;
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.post('/users', function(req, res) {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);    
});  

app.listen(SERVER_PORT, function() {
    console.log('Server is running on http://localhost:' + SERVER_PORT);
});